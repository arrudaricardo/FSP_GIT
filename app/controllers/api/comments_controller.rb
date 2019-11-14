class Api::CommentsController < ApplicationController
  def create 
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.repository_id = params[:repoId]
    @comment.issue_id = params[:issueId]

    if @comment.save
      redirect_to api_repository_issue_comments_url
    else 
      render json: @comment.errors.full_messages, status: 404
    end

  end

  def destroy
    @comment = Comment.find( params[:id] )
    if @comment.destroy
      render json: "Comment delete with sucesss"
    else
      render json: "Unable to delete Comment", status: 422
    end
  end

  def updated
    @comment = Comment.find( params[:id] )
    if @comment.update(comment_params)
      redirect_to api_repository_issue_comments_url
    else
      render json: @comment.errors.full_messages, status: 404
    end
  end

# /api/repositories/:repository_id/issues/:issue_id/comments(.:format)  
  def index 
    # @comments = Comment.find_by(issue_id: params[:issue_id])
    @comments = Comment.where(issue_id: params[:issue_id])
    if @comments
      render :index
    else
      render json: 'no comments', status: 404
    end
  end

  def comment_params
    params.require(:comment).permit(:body, :issue_id, :repository_id)
  end


end
