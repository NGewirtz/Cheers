class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where(checkin_id: params[:checkin_id]).includes(:user)
    render 'api/comments/index'
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user = current_user
    @comment.checkin = Checkin.find(params[:checkin_id])
    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
