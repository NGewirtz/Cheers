# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171102132427) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "beers", force: :cascade do |t|
    t.string "name", null: false
    t.integer "brewery_id", null: false
    t.integer "abv"
    t.integer "ibu"
    t.string "beer_type", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "avg_rating"
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.index ["brewery_id"], name: "index_beers_on_brewery_id"
  end

  create_table "breweries", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.float "avg_rating"
  end

  create_table "checkins", force: :cascade do |t|
    t.integer "beer_id"
    t.integer "user_id"
    t.text "body"
    t.integer "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["beer_id", "user_id"], name: "index_checkins_on_beer_id_and_user_id", unique: true
    t.index ["beer_id"], name: "index_checkins_on_beer_id"
    t.index ["user_id"], name: "index_checkins_on_user_id"
  end

  create_table "cheers", force: :cascade do |t|
    t.integer "checkin_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["checkin_id", "user_id"], name: "index_cheers_on_checkin_id_and_user_id", unique: true
    t.index ["checkin_id"], name: "index_cheers_on_checkin_id"
    t.index ["user_id"], name: "index_cheers_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.integer "checkin_id", null: false
    t.integer "user_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["checkin_id"], name: "index_comments_on_checkin_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "img_url", default: "http://www.pathcenter.co.il/wp-content/uploads/2014/03/user_icon.png"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "wishlist_items", force: :cascade do |t|
    t.integer "beer_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["beer_id", "user_id"], name: "index_wishlist_items_on_beer_id_and_user_id", unique: true
    t.index ["beer_id"], name: "index_wishlist_items_on_beer_id"
    t.index ["user_id"], name: "index_wishlist_items_on_user_id"
  end

end
