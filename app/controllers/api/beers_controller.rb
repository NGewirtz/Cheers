class Api::BeersController < ApplicationController

  def index
    #@beers = Beer.all.includes(:brewery).joins(:checkins).group('beers.id').order('avg(checkins.rating) desc')
    @beers = Beer.all.includes(:brewery)
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
    @beer = Beer.find(params[:id])
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
    @beers = Beer.all.includes(:brewery).order(created_at: :desc).limit(10)
    render 'api/beers/sidebar'
  end



  private

  def beer_params
    params.require(:beer).permit(:name, :abv, :ibu, :beer_type, :description, :brewery_id, :id, :created_at)
  end

end
