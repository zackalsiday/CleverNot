class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :sesstion_token

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :sesstion_token, unique: true 
  end
end
