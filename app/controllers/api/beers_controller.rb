class Api::BeersController < ApplicationController

  def index
    @beers = Beer.all
    render "api/beers/index"
  end

end
