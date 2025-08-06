# 🔗 URL Shortener API

A lightweight URL shortener built with **Node.js**, **Express**, **MongoDB**, and **NanoID**. Tested using **Postman**.

---

## 📌 Features

- Generate a short URL from a long URL
- Redirect from a short URL to the original
- Stores data in MongoDB
- Tested via Postman
- Uses `dotenv` for environment config

---

## 🧱 Tech Stack

- **Express** – API handling
- **MongoDB + Mongoose** – Database
- **NanoID** – Unique short codes
- **Dotenv** – Environment variables
- **Nodemon** – Dev auto-reload

---

## 🧪 API Endpoints (Tested on Postman)

### ➕ POST `/api/url/shorten`

## ENTITY-RELATIONSHIP DIAGRAM
+-----------------------------+
|           url              |
+-----------------------------+
| _id : ObjectId              |
| original_url : String       |
| short_url : String (unique)|
| createdAt : Date            |
+-----------------------------+

