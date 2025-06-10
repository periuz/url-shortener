# 🔗 URL Shortener

A simple URL shortening service built with **Node.js**, **Express**, **PostgreSQL**, and a **React + TailwindCSS** frontend. The backend provides a REST API for generating shortened URLs, and the frontend offers a user-friendly interface to interact with it.

---

## 📸 Live Demo

- **Frontend:** https://url-shortener-frontend.onrender.com  
- **Backend:** https://url-shortener-backend.onrender.com  

---

## ✨ Features

- 🔒 Enforces valid URLs with client-side validation.
- 🧠 Automatically generates short IDs (7 characters).
- 🔁 Redirects from shortened URL to the original URL.
- ☁️ Fully deployed using [Render](https://render.com/).
- 🎨 Responsive UI using TailwindCSS.

---

## 🧰 Tech Stack

### Backend
- Node.js
- Express.js
- PostgreSQL (via Sequelize ORM)
- Docker + Docker Compose (for local dev)
- Render (cloud hosting)
- CORS (to allow frontend communication)

### Frontend
- React.js
- Vite
- TailwindCSS
- Axios
- Render Static Site

---

## 🚀 How It Works

1. The user enters a **long URL** in the frontend.
2. The frontend sends a `POST` request to the API (`/api/shorten`).
3. The backend generates a short ID using `nanoid` and saves it in the database.
4. A shortened URL like this is returned:
   ```
   https://url-shortener-backend.onrender.com/7cs7LET
   ```
5. When someone accesses that URL, the backend looks up the original URL and **redirects** the user to it.

---

## ⚠️ About the Domain Length

> The generated URLs may **appear longer** than the original if you're shortening very short domains (e.g., `google.com`).  

That’s because this service is hosted on Render, which provides long default subdomains (like `url-shortener-backend.onrender.com`).  

For a production-level solution, it's recommended to:
- Use a **custom domain** (like `short.ly/abc123`)
- Configure CNAME or A records in DNS
- Bind that domain in Render's dashboard

---

## 🛠️ Local Development

### Requirements

- Node.js >= 18
- Docker & Docker Compose
- PostgreSQL (or use Docker)

### Clone and run:

```bash
git clone https://github.com/yourusername/url-shortener
cd url-shortener
```

#### Backend

```bash
cd api
npm install
npm run dev
```

Or with Docker:

```bash
docker-compose up --build
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

> Make sure the frontend is configured to call the correct backend URL in `VITE_API_URL`.

---

## 🧪 API Reference

### `POST /api/shorten`
**Request body:**
```json
{
  "originalUrl": "https://example.com"
}
```

**Response:**
```json
{
  "shortUrl": "https://url-shortener-backend.onrender.com/7cs7LET"
}
```

---

## 📂 Project Structure

```
url-shortener/
├── api/              # Backend (Express + Sequelize)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── server.js
├── frontend/         # Frontend (React + Tailwind)
│   ├── src/
│   ├── public/
│   └── index.html
```

---

## 📦 Deployment Notes

- Backend is deployed to **Render** as a Web Service
- Frontend is deployed to **Render** as a Static Site
- CORS is enabled on the backend to allow frontend requests
- Short IDs are stored in a hosted PostgreSQL database

---

Made with by Thiago Perius 

---

