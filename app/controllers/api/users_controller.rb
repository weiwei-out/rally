class Api::UsersController < ApplicationController
    skip_before_action :authenticate_user, only:[:create, :show]
    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: "No one is logged in", status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # def hello_world
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
    # end

    # def test 
    #     render json: { test: "working" }
    # end 

    private
    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end

    
end
