Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :notes, only: [:index, :show, :create, :update, :destroy] do
    end
  end
    root "static_pages#root"
end
