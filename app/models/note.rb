class Note < ApplicationRecord
    validates :author_id, presence: true 
    validates :title, presence: true 
    validates :content, presence: true 
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    
end
