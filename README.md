# Restaurant List
Fast & Simple的餐廳美食網
![restaurant final cover](https://github.com/enchichen1107/restaurant_list/blob/main/restaurant-final.png)

## Features
1. 使用者可以在首頁查看所有餐廳的簡易資料
2. 使用者可以點擊有興趣的餐廳，並獲得更詳細的資訊
3. 使用者可以透過搜尋餐廳名稱、分類來找到特定的餐廳
4. 使用者可以新增一家餐廳
5. 使用者可以修改一家餐廳的資訊
6. 使用者可以刪除一家餐廳
7. 使用者可以註冊帳號或用臉書帳號登入
8. 密碼經過bcrypt加密

## Prerequisites
- node.js: 16.17.0
- express: 4.17.1
- express-handlebars: 5.3.2
- express-session: 1.17.1
- mongoose: 5.12.12
- bcryptjs: 2.4.3
- connect-flash: 0.1.1
- passport: 0.4.1
- passport-facebook: 3.0.0
- passport-local: 1.0.0
- bootstrap: 4.2.1

## Installation and Execution
0. 確認已安裝node.js和npm
1. 打開terminal，clone此專案至本機
```
git clone https://github.com/enchichen1107/restaurant_list.git
```
2. 進入存放此專案的資料夾，terminal輸入
```
cd `專案資料夾路徑`
```
3. npm 安裝套件，terminal輸入
```
npm install 
```
4. 安裝 nodemon 套件，terminal輸入
```
npm install -g nodemon
```
5. 參考 .env.example，建立 .env檔案
6. 匯入種子資料，terminal輸入
```
npm run seed
```
7. 執行檔案，terminal輸入
```
npm run dev
```
當 terminal 出現以下字樣，表示伺服器已啟動並成功連結
mongodb connected!
Express is listening on http://localhost:3000
8. 登入可用下列預設帳密
```
email: user1@example.com
password: 12345678
email: user2@example.com
password: 12345678
email: root@example.com
password: root
```


