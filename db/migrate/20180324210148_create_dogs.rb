class CreateDogs < ActiveRecord::Migration[5.1]
  def change
    create_table :dogs do |t|
      t.integer :user_id, null: false
      t.text :photo_url, null: false
      t.text :breed, null: false
      t.text :name, null: false
      t.timestamps
    end
  end
end
