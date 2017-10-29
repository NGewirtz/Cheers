Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    get '/beers/sidebar', to: 'beers#sidebar'
    post '/beers/:id/wishlist_items', to: 'beers#wishlist_create'
    post '/checkins/:id/cheers', to: 'checkins#cheers_create'
    resources :beers, only: [:index, :show, :create, :update] do
      resources :checkins, only: [:create]
    end
    resources :breweries, only: [:index, :show]
    resources :checkins, only: [:index, :show] do
      resources :comments, only: [:index]
      resources :cheers, only: [:index, :create]
    end
    resources :cheers, only: [:destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
