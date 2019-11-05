Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :destroy, :show]
    resources :respositories, only: [:show, :index, :create, :update, :destroy] do 
      resources :issues, only: [:show, :index, :update, :create, :destroy] do
        resources :comments, only: [:show, :index, :update, :create, :destroy ]
      end
    end
  end

end

 # root GET    /                                                                                        static_pages#root
 #                    api_session_index POST   /api/session(.:format)                                                                   api/session#create {:format=>:json}
 #                          api_session DELETE /api/session/:id(.:format)                                                               api/session#destroy {:format=>:json}
 #                            api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
 #                             api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
 #                                      DELETE /api/users/:id(.:format)                                                                 api/users#destroy {:format=>:json}
 #       api_respository_issue_comments GET    /api/respositories/:respository_id/issues/:issue_id/comments(.:format)                   api/comments#index {:format=>:json}
 #                                      POST   /api/respositories/:respository_id/issues/:issue_id/comments(.:format)                   api/comments#create {:format=>:json}
 #        api_respository_issue_comment GET    /api/respositories/:respository_id/issues/:issue_id/comments/:id(.:format)               api/comments#show {:format=>:json}
 #                                      PATCH  /api/respositories/:respository_id/issues/:issue_id/comments/:id(.:format)               api/comments#update {:format=>:json}
 #                                      PUT    /api/respositories/:respository_id/issues/:issue_id/comments/:id(.:format)               api/comments#update {:format=>:json}
 #                                      DELETE /api/respositories/:respository_id/issues/:issue_id/comments/:id(.:format)               api/comments#destroy {:format=>:json}
 #               api_respository_issues GET    /api/respositories/:respository_id/issues(.:format)                                      api/issues#index {:format=>:json}
 #                                      POST   /api/respositories/:respository_id/issues(.:format)                                      api/issues#create {:format=>:json}
 #                api_respository_issue GET    /api/respositories/:respository_id/issues/:id(.:format)                                  api/issues#show {:format=>:json}
 #                                      PATCH  /api/respositories/:respository_id/issues/:id(.:format)                                  api/issues#update {:format=>:json}
 #                                      PUT    /api/respositories/:respository_id/issues/:id(.:format)                                  api/issues#update {:format=>:json}
 #                                      DELETE /api/respositories/:respository_id/issues/:id(.:format)                                  api/issues#destroy {:format=>:json}
 #                    api_respositories GET    /api/respositories(.:format)                                                             api/respositories#index {:format=>:json}
 #                                      POST   /api/respositories(.:format)                                                             api/respositories#create {:format=>:json}
 #                      api_respository GET    /api/respositories/:id(.:format)                                                         api/respositories#show {:format=>:json}
 #                                      PATCH  /api/respositories/:id(.:format)                                                         api/respositories#update {:format=>:json}
 #                                      PUT    /api/respositories/:id(.:format)                                                         api/respositories#update {:format=>:json}
 #                                      DELETE /api/respositories/:id(.:format)                                                         api/respositories#destroy {:format=>:json}
