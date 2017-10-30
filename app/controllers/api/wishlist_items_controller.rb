class Api::WishlistItemsController < ApplicationController
  def destroy
    @beer = Beer.find(params[:id])
    @user = current_user
    wishlist_item = WishlistItem.where(beer_id: params[:id], user_id: current_user.id)
    wishlist_item[0].destroy
    render "api/users/show"
  end
end
