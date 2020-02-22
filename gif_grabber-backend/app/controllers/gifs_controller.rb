class GifsController < ApplicationController
    def index
        @gifs = Gif.all
        render json: @gifs
    end

    def create
        current_user = Gif.find_by(params[:gif][:user_id])
        gif = current_user.gifs.build(gif_params)
        if @current_user.save
          render json: gif, status: 200
        else
          render json: { error: "Failed to grab gif", status: 500 }, status: 500
        end
    end  
end