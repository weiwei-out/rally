class AddLatToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :lat, :decimal
    add_column :events, :lng, :decimal
  end
end
