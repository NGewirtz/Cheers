class Api::BreweriesController < ApplicationController

  def index
    @breweries = Brewery.select(:name, :id)
    render "api/breweries/index"
  end

  def show
    @brewery = Brewery.includes(:checkins, :beers).find(params[:id])
    render "api/breweries/show"
  end

end
