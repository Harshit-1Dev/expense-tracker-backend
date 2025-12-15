# 💰 Expense Tracker Backend

A production-style backend API for tracking personal income and expenses, built using **Node.js**, **Express**, **Sequelize**, **MySQL**, and **JWT authentication**.

This project focuses on **clean architecture**, **secure authentication**, and **proper request lifecycle handling**, not just CRUD.

---

## 🚀 Features

- ✅ User Registration & Login (JWT-based authentication)
- 🔒 Secure password hashing using bcrypt
- 🛡️ Protected APIs using JWT middleware
- 💸 Add and fetch income/expense transactions
- 📊 Monthly income/expense summary (server-side aggregation)
- 👤 Proper ownership enforcement (users only see their data)
- 🏗️ Clean separation of routes, controllers, models, and middleware

---

## 🧠 Architecture Overview
```
Request
 → Middleware (CORS, JSON, Auth)
 → Routes
 → Controllers
 → Sequelize Models
 → MySQL
 → Response
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Backend** | Node.js, Express |
| **Database** | MySQL |
| **ORM** | Sequelize |
| **Auth** | JWT, bcrypt |
| **Tools** | Postman, Nodemon |

---

## 📂 Project Structure
```
src/
 ├── app.js
 ├── config/
 │   └── database.js
 ├── models/
 │   ├── User.js
 │   └── Transaction.js
 ├── controllers/
 │   ├── authController.js
 │   ├── transactionController.js
 │   └── summaryController.js
 ├── routes/
 │   ├── authRoutes.js
 │   ├── transactionRoutes.js
 │   └── summaryRoutes.js
 └── middleware/
     └── authMiddleware.js
```

---

## 🔐 Authentication Flow

1. Users authenticate using **email & password**
2. **JWT token** is issued on login
3. Token is required in `Authorization` header for protected routes

---

## 📌 API Endpoints

### Auth
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and receive JWT token

### Transactions (Protected)
- `POST /transactions` - Add a new transaction
- `GET /transactions` - Fetch all transactions for logged-in user

### Monthly Summary (Protected)
- `GET /summary?month=YYYY-MM` - Get income/expense summary for a month

---

## ▶️ How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/expense-tracker-backend.git
cd expense-tracker-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file
```env
PORT=5000
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=expense_tracker
JWT_SECRET=your_secret
```

### 4. Run the server
```bash
npm run dev
```

The API will be available at `http://localhost:5000`

---

## ✅ Learning Outcomes

- 🎯 Deep understanding of Express request lifecycle
- 🔄 Middleware ordering and execution
- 🔐 Secure authentication & authorization
- 🐛 Real-world backend debugging
- 👥 Database ownership enforcement

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@HarshitDev](https://github.com/Harshit-1Dev)

---

⭐ **If you found this helpful, give it a star!** ⭐
