  json.extract! @repo, :id, :name, :description
  json.owner @repo.user.username


  # json.issues @repo.issues do |issue|
  #   json.extract! issue, :id, :title, :open, 
  # end




