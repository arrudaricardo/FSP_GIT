json.array! @repos do |repo| 
  json.extract! repo, :id, :name, :description
  json.owner repo.user.username


  json.issues do
    @repos.issues.each do |issue|
      json.set! issue.id do 
          json.extract! issue, :id, :title, :body
          json.owner issue.user.username
          json.owner_id issue.user.id
          json.repository issue.repository.name
          json.repository_id issue.repository.id
      end
    end
  end

end
