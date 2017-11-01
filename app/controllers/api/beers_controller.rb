class Api::BeersController < ApplicationController

  def index
    @beers = Beer.all.includes(:brewery).order("COALESCE(avg_rating, 0) DESC").order(created_at: :desc).offset(params[:offset]).limit(10)
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
    if params[:filter] == "wishlist"
      @beers = current_user.wishlist_beers.includes(:brewery)
    elsif params[:filter] == "bar"
      @beers = Beer.all.includes(:brewery).order(created_at: :desc).limit(10)
    else
      @beers = Beer.all.includes(:brewery).joins(:checkins).order('checkins.created_at desc').uniq[0...10]
    end
    render 'api/beers/sidebar'
  end

  def wishlist_create
    WishlistItem.create(user_id: current_user.id, beer_id: params[:id])
    @beer = Beer.find(params[:id])
    @user = current_user
    render "api/users/show"
  end

  def search
    if params[:query].present?
      @beers = Beer.all.includes(:brewery).where('lower(name) ~ ?', params[:query].downcase)
      render 'api/beers/search'
    end
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :abv, :ibu, :beer_type, :description, :brewery_id, :created_at, :image)
  end

end
