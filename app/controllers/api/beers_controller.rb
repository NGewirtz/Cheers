class Api::BeersController < ApplicationController

  def index
    @beers = Beer.all.includes(:brewery).left_outer_joins(:checkins).group('beers.id').order('avg(checkins.rating) desc').offset(params[:offset]).limit(10)
    puts params
    render "api/beers/index"
  end

  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      render "api/beers/show"
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def show
    @beer = Beer.includes(:checkins).find(params[:id])
    render "api/beers/show"
  end

  def update
    @beer = Beer.find(params[:id])
    if @beer.update(beer_params)
      render "api/beers/show"
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def sidebar
    @beers = Beer.all.includes(:brewery).joins(:checkins).order('checkins.created_at desc').limit(10).uniq
    render 'api/beers/sidebar'
  end

  def wishlist_create
    WishlistItem.create(user_id: current_user.id, beer_id: params[:id])
    @beer = Beer.find(params[:id])
    @user = current_user
    render "api/users/show"
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :abv, :ibu, :beer_type, :description, :brewery_id, :created_at, :image)
  end

end
