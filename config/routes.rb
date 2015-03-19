Rails.application.routes.draw do
  namespace :api do
    resources :posts, only: [:index, :show, :create]

    post "inbound/twilio", to: "inbound#twilio"
  end

  root to: "pages#index"
end