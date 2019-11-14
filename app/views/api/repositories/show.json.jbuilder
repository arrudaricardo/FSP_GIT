  json.extract! @repo, :id, :name, :description
  json.owner @repo.user.username


  json.issues do 
  @repo.issues.each do |issue|
    json.set! issue.id do 
        json.extract! issue, :id, :title, :body
        json.owner @repo.user.username
        json.owner_id @repo.user.id
        json.repository @repo.name
        json.repository_id @repo.id
    end
  end
  end


  # json.issues @repo.issues do |issue|
  #   json.extract! issue, :id, :title, :open, 
  # end




