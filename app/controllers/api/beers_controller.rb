class Api::BeersController < ApplicationController

  def index
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

  private

  def beer_params
    params.require(:beer).permit(:name, :abv, :ibu, :beer_type, :description, :brewery_id)
  end

end
