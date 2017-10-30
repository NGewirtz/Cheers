class Api::WishlistsController < ApplicationController
  def destroy
    @beer = Beer.find(params[:id])
    wishlist_item = WishlistItem.where(beer_id: params[:id], user_id: current_user.id)
    wishlist_item[0].destroy
    render "api/beers/show"
  end
end
