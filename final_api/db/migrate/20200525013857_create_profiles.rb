class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :age
      t.string :diagnosis
      t.string :behaviors
      t.string :motivators
      t.string :communication

      t.timestamps
    end
  end
end
