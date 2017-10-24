class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :img_url, default: "http://www.pathcenter.co.il/wp-content/uploads/2014/03/user_icon.png"

      t.timestamps
    end
  end
end
