class Gifs < ApplicationController
    def test
        render json: { test: 'Success!' }
    end
end