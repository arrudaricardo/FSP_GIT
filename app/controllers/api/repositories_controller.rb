class Api::RepositoriesController < ApplicationController

  def create 
    @repo = Repository.new(repo_params)
    @repo.owner_id = current_user.id

    # create git init folder /repositories/:@repo.user.username/:@repo.name
    if @repo.save
      #create git folder as bare init
      stdout = Repository.git_init_bare(@repo.user.username, @repo.name)
      # stdout = Repository.git_init(@repo.user.username, @repo.name)

      if params[:readme]
       Repository.git_add_readme(@repo.user.username, @repo.name, params[:description])

      end 
      render :show

    else 
      render json: @repo.errors.full_messages, status: 404
    end

  end

  def destroy
    @repo = Repository.find( params[:id] )
    if @repo.destroy
      Repository.delete_repo(@repo.user.username, @repo.name)
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
    params.require(:repository).permit(:name, :description)
  end


def repo_files_tree
    @username = params[:username]
    @reponame = params[:reponame] 
    @user = User.find_by_username(@username)
    @repo = @user.repositories.find_by(name: @reponame)
    @ls = Repository.ls_files_tree(@username, @reponame)
    render :repols
end

end
