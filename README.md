# Restaurant List
Fast & Simple的餐廳美食網

## Features
1. 使用者可以在首頁查看所有餐廳的簡易資料
2. 使用者可以點擊有興趣的餐廳，並獲得更詳細的資訊
3. 使用者可以透過搜尋餐廳名稱、分類來找到特定的餐廳
4. 使用者可以新增一家餐廳
5. 使用者可以修改一家餐廳的資訊
6. 使用者可以刪除一家餐廳

## Prerequisites
- Node.js: 10.24.0
- Express: 4.17.1
- Express-handlebars: 5.3.2
- Mongoose: 5.12.12

## Installation and Execution
1. 打開terminal，clone此專案至本機
```
git clone https://github.com/enchichen1107/restaurant_list.git

```
2. 進入存放此專案的資料夾，terminal輸入
```
cd `資料夾路徑`
```
3. 安裝 npm 套件，terminal輸入
```
npm install 
```
4. 安裝 nodemon 套件，terminal輸入
```
npm install -g nodemon
```
5. 在 Terminal 找到 Seeder.js 檔案
```
執行 node models/seeds/restaurantSeeder.js 匯入餐廳資料
```
6. 執行 app.js 檔案，terminal輸入
```
nodemon app.js
```
當 terminal 出現以下字樣，表示伺服器已啟動並成功連結
mongodb connected!
Express is listening on http://localhost:3000

