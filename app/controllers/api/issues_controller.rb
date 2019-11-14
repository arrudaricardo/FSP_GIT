class Api::IssuesController < ApplicationController

  def create 
    @issue = Issue.new(issue_params)
    @issue.repo_id = params[ :repository_id ]
    @issue.author_id = 1 #current_user.id
    if @issue.save
      render :show
    else 
      render json: @issue.errors.full_messages, status: 404
    end
  end

  def destroy
    @issue = Issue.find( params[:id] )
    if @issue.destroy
      render json: "Repository delete with sucesss"
    else
      render json: "Unable to delete Issue", status: 422
    end
  end

  def update
    @issue = Issue.find( params[:id] )
    if @issue.update(issue_params)
      render :show
    else
      render json: @issue.errors.full_messages, status: 404
    end
  end

  def index 
    @repo = Repository.find(params[:repository_id])
    # @repo = Repository.find_by_username_reponame(params[:user_id], params[:id])
    @issues = @repo.issues
    if @issues
      render :index
    else
      render json: @issues.errors.full_messages, status: 404
    end
  end

  def show
    @issue = Issue.find(params[:id])
    if @issue
      render :show
    else
      render json: @issue.errors.full_messages, status: 404
    end
  end

  def issue_params
    params.require(:issue).permit(:body, :title)
  end

end

  # create_table "issues", force: :cascade do |t|
  #   t.integer "repo_id", null: false
  #   t.integer "author_id", null: false
  #   t.text "title", null: false
  #   t.text "body", null: false
  #   t.boolean "open", default: true
  #   t.datetime "created_at", precision: 6, null: false
  #   t.datetime "updated_at", precision: 6, null: false
  #   t.index ["author_id"], name: "index_issues_on_author_id"
  #   t.index ["repo_id"], name: "index_issues_on_repo_id"
  #   t.index ["title", "repo_id"], name: "index_issues_on_title_and_repo_id", unique: true
  # end
