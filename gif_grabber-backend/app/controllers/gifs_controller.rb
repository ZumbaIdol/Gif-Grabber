class GifsController < ApplicationController
    def index
        @gifs = Gif.all
        render json: @gifs
    end
end