Rails.application.routes.draw do
  namespace :api do 
    resources :users

    # # route to test your configuration
    # get '/hello', to: 'application#hello_world'
    # get '/test', to: 'application#test'
    # route to test your configuration
    get '/hello', to: 'users#hello_world'
    get '/test', to: 'users#test'

    #User Routes
    post '/signup', to: "users#create"
    get '/me', to: "users#show" 

    # Session Routes
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    
  end 
  
  get '*path',
        to: 'fallback#index',
        constraints: ->(req) { !req.xhr? && req.format.html? }

  
end
