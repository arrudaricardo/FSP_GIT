json.array! @issues do |issue| 
  json.extract! issue, :id, :title, :body
  json.owner issue.user.username
  json.owner_id issue.user.id
  json.repository issue.repository.name
  json.repository_id issue.repository.id
end
