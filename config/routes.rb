Rails.application.routes.draw do
  root 'home#index'
  get 'episodes', to: 'home#episodes'
end
