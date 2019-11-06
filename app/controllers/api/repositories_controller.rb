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
    @repos = Repository.all
  end

  def show
    @repo = Repository.find( params[:id] )
    if @repo
      render :show
    else
      render json: @repo.errors.full_messages, status: 404
    end

  end

  def repo_params
    params.require(:repository).permit(:name,:description)
  end

end
