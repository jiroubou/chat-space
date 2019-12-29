usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index true|
|email|string|null: false|
|password|string|null: false|


### Association
- has_many :messages
- has_many :members
- has_many :groups,though: :members


groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :users, through: :groups_users

groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id,|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


messageテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
|image|text||

### Association
- belongs_to :user
- belongs_to :group

