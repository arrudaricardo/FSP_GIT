class Api::RootController < ApplicationController


  # params, 
  def api
    repo_name = params[:repo_name]
    username = params[:username]

    if repo_name && username
    user = User.find_by_username(username)
      @repo = user.repositories.find_by(name: repo_name)
      render 'api/repositories/show'
    elsif username 
      @user = User.find_by_username(username)
      render 'api/users/show'
    elsif repo_name
      @repo = Repository.find_by_name(repo_name)
      render 'api/repositories/show'
    end
  end


  # TODO: redirect to page with data
  def repo_name
    repo_name = params[:repo_name]
    username = params[:username]
    if repo_name && username
    user = User.find_by_username(username)
      @repo = user.repositories.find_by(name: repo_name)
      render 'api/repositories/show'
    else
      render json: "Repository not found"
    end

  end

  def username
    username = params[:username]
    if username 
      @user = User.find_by_username(username)
      render 'api/users/show'
    else
      render json: "User not found", status: 301
    end
  end

end
