# **BrewQuest**

### Your Personalized Coffee Adventure ☕️

BrewQuest is a web application designed to bring coffee enthusiasts closer to their perfect cup and help them explore Berlin's vibrant coffee scene. Whether you’re searching for a personalized coffee recommendation or want to discover featured coffee shops, BrewQuest has you covered.

---

## **Features**

### **1. Coffee Finder**

- Take a quiz to get personalized coffee recommendations based on:
  - Tasting preferences (fruity, nutty, chocolatey).
  - Roast levels (light, medium, dark).
  - Brewing preferences (espresso, filter, pour-over, etc.).

### **2. Shop Featured**

- Explore featured coffee shops in Berlin.
- View shop details like location, description, and specialties.
- Discover 10 curated coffee shops with exclusive selections.

### **3. Berlin Coffee Map**

- Interactive map to locate coffee bars in Berlin.
- Visualize coffee shop details like their offerings and proximity.

### **4. General Information**

- Learn about coffee brewing methods, bean origins, and roastery profiles.

---

## **Tech Stack**

### **Frontend**

- **React** (with TypeScript) for a scalable user interface.
- **React Router** for client-side routing.
- **TailwindCSS** for modern, responsive styling.

### **Backend**

- **Node.js** with **Express** for the REST API.
- **TypeScript** for robust type checking and maintainable code.

### **Database**

- **Supabase**:
  - Serves as the backend-as-a-service for database management.
  - Handles authentication and API integration.

---

## **Project Structure**

```
BrewQuest/
├── client/           # React frontend
│   ├── src/          # Frontend source code
│   └── public/       # Static assets
├── server/           # Node.js backend
│   ├── src/          # Backend source code
│   ├── routes/       # Express routes
│   └── .env          # Backend environment variables
└── package.json      # Root scripts for concurrent development
```

---

## **Getting Started**

### **Prerequisites**

- **Node.js** (v14 or later)
- **npm** (v6 or later)

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/brewquest.git
   cd brewquest
   ```

2. Install dependencies for both client and server:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

---

### **Running the App**

1. **Start the Server**:
   Navigate to the `server` directory and start the backend:

   ```bash
   npm run dev
   ```

2. **Start the Client**:
   Navigate to the `client` directory and start the React frontend:

   ```bash
   npm start
   ```

3. **Start Both Simultaneously**:
   From the root directory:
   ```bash
   npm start
   ```
   This will concurrently run the client on `http://localhost:3000` and the server on `http://localhost:5858`.

---

## **Environment Variables**

### **Frontend (`client/.env`)**

Add the API URL to connect to the backend:

```
REACT_APP_API_URL=http://localhost:5858
```

### **Backend (`server/.env`)**

Add the following variables:

```
PORT=5858
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-service-role-key
```

---

## **API Endpoints**

### **Coffee Shops**

- **GET /api/coffee-shops**: Fetch all coffee shops.
- **GET /api/coffee-shops/:id** (optional for future): Fetch a specific coffee shop.

---

## **Features in Development**

- **Coffee Finder Quiz**: Dynamically filter coffee recommendations based on user preferences.
- **Coffee Map Integration**: Use map services to provide location-based features.
- **User Accounts**: Allow users to save preferences and favorite shops.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
