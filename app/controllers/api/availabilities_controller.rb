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

    private 

    def availability_params
        params.permit(:username, :start, :end, :show)
    end 
end
