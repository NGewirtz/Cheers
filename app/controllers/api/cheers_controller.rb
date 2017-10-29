class Api::CheersController < ApplicationController
  def destroy
    @checkin = Checkin.find(params[:id])
    cheer = Cheer.where(checkin_id: params[:id], user_id: current_user.id)
    cheer[0].destroy
    render "api/checkins/show"
  end
end
