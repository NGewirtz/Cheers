class Api::CheckinsController < ApplicationController

  def index
    @checkins = Checkin.all.includes(:user, :beer, :brewery)
  end

  def create
    @checkin = current_user.checkins.new(checkin_params)
    @checkin.beer = Beer.find(params[:beer_id])
    if @checkin.save
      render 'api/checkins/show'
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def show
    @checkin = Checkin.includes(:cheers).find(params[:id])
    render 'api/checkins/show'
  end

  def cheers_create
    Cheer.create(user_id: current_user.id, checkin_id: params[:id])
    @checkin = Checkin.find(params[:id])
    render "api/checkins/show"
  end

  private

  def checkin_params
    params.require(:checkin).permit(:body, :rating)
  end
end
