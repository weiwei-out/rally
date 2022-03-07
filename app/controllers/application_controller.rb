class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authenticate_user
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

    def test 
        render json: { test: "working" }
    end 




    private
    def authenticate_user
      render json: {error: "not authorized"}, status: :unauthorized unless current_user
    end
    def current_user
        User.find_by(id: session[:user_id])
    end
    def render_not_found_response(invalid)
      render json: { error: "#{invalid.model} not found"}, status: :not_found
    end
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
    
end
