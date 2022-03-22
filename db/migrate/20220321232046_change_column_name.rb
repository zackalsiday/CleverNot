class ChangeColumnName < ActiveRecord::Migration[5.2]
  def up
    rename_column :users, :sesstion_token, :session_token
  end
  def down 
    rename_column :users, :session_token, :sesstion_token
  end
end
