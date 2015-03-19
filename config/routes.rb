Rails.application.routes.draw do
  namespace :api do
    resources :posts, only: [:index, :show, :create]
  end

  root to: "pages#index"
end