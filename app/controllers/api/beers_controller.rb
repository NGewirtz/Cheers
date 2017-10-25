class Api::BeersController < ApplicationController

  def index
    @beers = Beer.all.includes(:brewery)
    render "api/beers/index"
  end

end
