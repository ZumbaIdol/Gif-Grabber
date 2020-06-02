class GifsController < ApplicationController
    def index
      gifs = Gif.all
      render json: gifs, include: [:users]   
    end

    def show
      gif = Gif.find_by(id: params[:id])
      render json: gif, include: [:user]  
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

    def update
      if params[:id] != 'undefined'
        gif = Gif.find(params[:id])
        gif.update(gif_params)
        render json: gif, status: 200
      end
    end

    def destroy
      gif = Gif.find(params[:id])
      gif.delete
      render json: { gifID: gif.id }
    end

  private

  def gif_params
    params.require(:gif).permit(:name, :user_id)
  end
end