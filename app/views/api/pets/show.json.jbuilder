# json.extract! @pet, :id, :name, :category
# json.(@pet, :id, :name, :category)
json.partial! 'pet', pet: @pet
