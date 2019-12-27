usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id,name,mail|string|null: false, foreign_key: true|


### Association
- has_many :comments


groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id,name,mail|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :comments


groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id,name,mail|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :comments


messageテーブル

|Column|Type|Options|
|------|----|-------|
|body,image,group_id,user_id|text,string,integer,integer|null|

### Association
- has_many :comments
