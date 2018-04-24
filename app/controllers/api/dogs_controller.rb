class Api::DogsController < ApplicationController

  def create
    @dog = Dog.new(dog_params)
    @dog.user_id = current_user.id

    if @dog.save
      render "api/dogs/show"
    else
      render json: @dogs.errors.full_messages, status: 422
    end

  end

  def index
    
  end

  def destroy

  end

  def show

  end

  private

  def dog_params
    params.require(:dog).permit(:user_id, :photo_url, :breed, :name)
  end
end
