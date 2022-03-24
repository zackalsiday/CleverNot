class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string "title"
      t.string "content"
      t.integer "author_id", null: false
      t.integer "notebook_id", default: 0, null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false 
      
      t.timestamps
    end
  end
end
