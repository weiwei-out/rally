Rails.application.routes.draw do
  resources :availabilities
  
  namespace :api do 
    resources :users
    resources :events
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
    
  end 
  
  get '*path',
        to: 'fallback#index',
        constraints: ->(req) { !req.xhr? && req.format.html? }

  
end
