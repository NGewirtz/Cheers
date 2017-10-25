class Api::BreweriesController < ApplicationController

  def index
    @breweries = Brewery.all
    render "api/breweries/index"
  end

  def show
    @brewery = Brewery.find(params[:id])
    render "api/breweries/show"
  end

end
