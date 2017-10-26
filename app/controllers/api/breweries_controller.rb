class Api::BreweriesController < ApplicationController

  def index
    @breweries = Brewery.select(:name, :id)
    render "api/breweries/index"
  end

  def show
    @brewery = Brewery.find(params[:id])
    render "api/breweries/show"
  end

end
