class CreateAvailabilities < ActiveRecord::Migration[7.0]
  def change
    create_table :availabilities do |t|
      t.string :username
      t.datetime :start
      t.datetime :end
      t.boolean :show

      t.timestamps
    end
  end
end
