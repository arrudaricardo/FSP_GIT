Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # Rediret to / if not routers match
  # get '*path' => redirect('/')

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :destroy, :show]
    resources :repositories, only: [:show, :index, :create, :update, :destroy] do 
      resources :issues, only: [:show, :index, :update, :create, :destroy] do
        resources :comments, only: [:show, :index, :update, :create, :destroy ]
      end
    end
  end

end
