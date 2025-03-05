# EventFinder Backend

This is the backend for the EventFinder application, responsible for managing user authentication, event registrations, and data handling. The backend must be running alongside the frontend for the application to function properly.

## 🔧 Technologies Used
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT Authentication
- Render (for deployment)

## 🚀 Features
- User authentication (Signup, Login, JWT-based authentication)
- Event creation and management
- Registering and unregistering for events
- Fetching user-specific applied events
- Secure API endpoints

## 🛠 Setup Instructions

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) (or a local MongoDB setup)

### Steps to Run Locally
1. **Clone the repository**
   ```bash
   git clone <backend-repo-url>
   cd eventfinder-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   ```

4. **Start the server**
   ```bash
   npm start
   ```
   The backend should now be running on `http://localhost:3000/`

## 🌍 Deployment
The backend is deployed on Render. If it stops working, check the Render service status or redeploy.

## 🔑 Demo Credentials
Use the following credentials to test the backend API:
- **Email:** `max@gmail.com`
- **Password:** `max1234`

Ensure the frontend is running and connected to the backend for full functionality.

## 🤝 Contributing
If you wish to contribute, feel free to fork the repository and submit a pull request.

---

For any issues, contact the repository owner or create an issue in the GitHub repository.

