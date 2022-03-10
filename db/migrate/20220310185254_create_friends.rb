class CreateFriends < ActiveRecord::Migration[7.0]
  def change
    create_table :friends do |t|
      t.string :user1
      t.string :user2

      t.timestamps
    end
  end
end
