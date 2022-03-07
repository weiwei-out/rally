# class FallbackController < ApplicationController::Base
class FallbackController < ActionController::Base
    def index
        render file: '/Users/andrewwei/rally/client/public/index.html'
      end
end
