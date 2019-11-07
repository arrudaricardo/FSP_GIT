class Api::RepositoriesController < ApplicationController

  def create 
    @repo = Repository.new(repo_params)
    @repo.owner_id = current_user.id

    # create git init folder /repositories/:@repo.user.username/:@repo.name

    if @repo.save
      render :show
    else 
      render json: @repo.errors.full_messages, status: 404
    end

  end

  def destroy
    @repo = Repository.find( params[:id] )
    if @repo.destroy
      render json: "Repository delete with sucesss"
    else
      render json: "Unable to delete respository", status: 422
    end
  end

  def updated
    @repo = Repository.find( params[:id] )
    if @repo.update(repo_params)
      render :show
    else
      render json: @repo.errors.full_messages, status: 404
    end
  end

  def index 
    Repositories.find_by(owner_id: current_user.id)
    @repos = Repository.all
  end

  def show
    @repo = Repository.find( params[:id] )
    if !@repo
        @repo.find_by_username_reponame(params[:user_id], params[:id])
    end
    if @repo
      render :show
    else
      render json: @repo.errors.full_messages, status: 404
    end
  end

  def reponame
    username = params[:username]
    repo_name = params[:repo_name]

    user = User.find_by_username(username)
    @repo = user.repositories.find_by(name: repo_name)
    return :show
  end

  def repo_params
    params.require(:repository).permit(:name,:description)
  end

end

  # def self.find_by_username_reponame(username, repo_name)
  #   # User.where("username = ? AND repo")
  #   user = User.find_by(username: username).includes(:repositories)
  #   ret =  user.repositories.select do |repo| 
  #       repo.name == repo_name
  #   end

  #   return ret 

  # end
