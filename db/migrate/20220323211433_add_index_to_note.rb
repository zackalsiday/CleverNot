class AddIndexToNote < ActiveRecord::Migration[5.2]
  def change
    add_index :notes, :title
  end
end
