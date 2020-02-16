class Gifs < ApplicationController
    def create
        unless gif_params[:user_id].nil?
          default = {}

          @gif = Gif.create(gif_params.merge(default))
        render json: @gif, status: 201
        else
            render json: { error: 'User not found '}, status: 404 
        end
    end
end