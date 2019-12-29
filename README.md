usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|


### Association
- has_many :groups_users
- has_many :users, through: :groups_users


groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, foreign_key: true|

### Association
- has_many :groups_users
- has_many :users, through: :groups_users

groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|name,role,users_id,groups_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


messageテーブル

|Column|Type|Options|
|------|----|-------|
|body,images、comments|text,string,integer|null|

### Association
- has_many :comments
