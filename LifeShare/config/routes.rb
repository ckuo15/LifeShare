Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update] do
      resources :posts, only:[:index] # api/users/id/posts
    end 
    resource :session, only: [:create, :destroy]
    resources :posts, only:[:create, :update, :show, :destroy]
  end

  root to: 'static_pages#root'
end
