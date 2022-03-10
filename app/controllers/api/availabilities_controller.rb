class Api::AvailabilitiesController < ApplicationController
    wrap_parameters format: []
    def index 
        availability = Availability.all 
        render json: availability
    end

    def create 
        availability = Availability.create(availability_params)
        render json: availability
    end 

    def destroy
        byebug
        availability = Availability.find_by(id: params[:id])
        availability.destroy
        head :no_content 
    end

    private 

    def availability_params
        params.permit(:id, :username, :start, :end, :show)
    end 
end
