# **BrewQuest**

### Your Personalized Coffee Adventure ☕️

BrewQuest is a modern web application that combines the art of coffee brewing with the joy of discovering local coffee shops. The app offers personalized brewing recommendations and an interactive map to explore sustainable coffee shops near you.

---

## **Features**

- **Personalized Brewing Recommendations**:
  - Input your taste preferences and brewing equipment.
  - Get tailored brewing methods and recipes for the best coffee experience.
- **Coffee Shop Explorer**:
  - Find local coffee shops based on your location.
  - Filter by features like sustainability, vegan options, and Wi-Fi.
- **Coffee Bean Explorer**:
  - Learn about coffee bean origins, tasting notes, and roast levels.
  - Discover recommended brewing techniques for each bean.

---

## **Tech Stack**

### **Frontend**

- **React** (with TypeScript) for building the user interface.
- **React Router** for navigation (if applicable).
- **CSS** or a framework like **TailwindCSS** (optional) for styling.

### **Backend**

- **Node.js** with **Express** for the server.
- **TypeScript** for type safety and development efficiency.

### **Database**

- **Supabase** as the backend-as-a-service (database, authentication, etc.).

---

## **Getting Started**

### **Prerequisites**

- **Node.js** (v14+)
- **npm** (v6+)

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
   In the `server` directory:

   ```bash
   npm run dev
   ```

2. **Start the Client**:
   In the `client` directory:

   ```bash
   npm start
   ```

3. **Start Both Simultaneously**:
   From the root directory:

   ```bash
   npm start
   ```

   The client will run on `http://localhost:3000`, and the server on `http://localhost:5000`.

---

## **Environment Variables**

### **Frontend**

In `client/.env`:

```
REACT_APP_API_URL=http://localhost:5000
```

### **Backend**

In `server/.env`:

```
PORT=5000
DATABASE_URL=your-supabase-database-url
SUPABASE_API_KEY=your-supabase-api-key
```

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
