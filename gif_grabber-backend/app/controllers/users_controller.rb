class UsersController < ApplicationController
   def index
    users = User.all
    render json: users
   end

   def show
    user = User.find_by(id: params[:id])
    render json: user
   end

   def create
    current_user = User.find_by(id: params[:user_id])
    user = current_user.users.build(user_params)
    if @current_user.save
      render json: user, status: 200
    else
      render json: { error: "Failed to create user", status: 500 }, status: 500
    end
  end  

  def update
    if params[:id] != 'undefined'
      user = User.find_by(id: params[:id])
      user.update(user_params)
      render json: user, status: 200
    end
  end

  def destroy
    user = User.find_by(id: params[:id])
    user.delete
    render json: { userID: user.id }
  end

private

def user_params
  params.require(:user).permit(:name)
    end
end





# def login
#     user = User.find_or_create_by(user_params)
#     render json: user, status: 200
# end

# private

# def user_params
#     params.require(:user).permit(name)
# end