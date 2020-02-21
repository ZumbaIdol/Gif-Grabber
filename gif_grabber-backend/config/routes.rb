Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/test', to: 'application#test'
  get '/users', to: 'users#index'
  get 'gifs/', to: 'gifs#index'
  post '/gifs', to: 'gifs#create'
end
