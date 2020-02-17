class ApplicationController < ActionController::API
    def test
        render json: { test: 'Success!' }
    end
end
