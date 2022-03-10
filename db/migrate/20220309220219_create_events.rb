class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :image_url
      t.datetime :start
      t.datetime :end
      t.string :description
      t.boolean :private

      t.timestamps
    end
  end
end
