comments = @comments.order(:created_at)
# comments = @comments

comments.each do |comment|
  json.meta do 
      json.repository_id comment.repository.id
      json.repository_name comment.repository.name
      json.issue_id comment.issue_id
  end
  json.comments do 
    json.set! comment.id do
      json.extract! comment, :id, :body, :user_id, :created_at
      json.username comment.user.username
    end
  end
end

