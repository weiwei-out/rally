Rails.application.routes.draw do
  resources :friends
  
  namespace :api do 
    
    # # route to test your configuration
    # get '/hello', to: 'application#hello_world'
    # get '/test', to: 'application#test'
    # route to test your configuration
    get '/hello', to: 'users#hello_world'
    get '/test2', to: 'events#test2'

    #User Routes
    post '/signup', to: 'users#create'
    get '/me', to: 'users#show' 

    # Session Routes
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'


    #Event Routes
    get '/events', to: "events#index"
    post '/events', to: "events#create"

    #Availability Routes
    get '/availability', to: "availabilities#index"
    post '/availability', to: "availabilities#create"
    delete '/availability', to: "availabilities#destroy"

    
  end 
  
  get '*path',
        to: 'fallback#index',
        constraints: ->(req) { !req.xhr? && req.format.html? }

  
end
