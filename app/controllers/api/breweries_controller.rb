class Api::BreweriesController < ApplicationController

  def index
    @breweries = Brewery.all
    render "api/breweries/index"
  end

end
