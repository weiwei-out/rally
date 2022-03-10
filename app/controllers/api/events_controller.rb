class Api::EventsController < ApplicationController
    wrap_parameters format: []
    def index 
        events = Event.all 
        render json: events
    end

    def create 
        event = Event.create(event_params)
        # byebug
    end 

    private 

    def event_params
        params.permit(:title, :image_url, :start, :end, :description, :private)
    end 
end
