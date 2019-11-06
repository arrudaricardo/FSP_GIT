json.array! @repos do |repo| 
  json.extract! repo, :id, :name, :description
  json.owner repo.user.username
end
