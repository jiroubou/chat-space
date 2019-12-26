
groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id,name,mail|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :comments

massegesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id,body,image|integer,string|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
