class Api::CheckinsController < ApplicationController

  def index
    @checkins = Checkin.all
  end

  def create
    @checkin = current_user.checkin.new(checkin_params)
    @checkin.beer = Beer.find(params[:beer_id])
    if @checkin.save
      render 'api/checkins/show'
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  private

  def checkin_params
    params.require(:checkin).permit(:body, :rating)
  end
end
