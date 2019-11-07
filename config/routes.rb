Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :destroy, :show]

    resources :repositories, only: [:show, :index, :create, :update, :destroy] do 
      resources :issues, only: [:show, :index, :update, :create, :destroy] do
        resources :comments, only: [:show, :index, :update, :create, :destroy ]
      end
    end



    # post 'getUserByUsername' to: 'user#showByUsername'
    # post ":username" => "root#api", :as => :api_root

    get ':username/', to: 'root#username'
    get ':username/:repo_name', to: 'root#repo_name'
    
  # Rediret to / if not routers match
  # get '*path' => redirect('/')

  end

  # get '*path' => redirect('/')

  # TODO:redirect to page
  # get ':username/', to: 'api/root#username'
  # get ':username/:repo_name', to: 'api/root#repo_name'

end
