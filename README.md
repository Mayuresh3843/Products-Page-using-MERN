<h1>🛍️ Products Page using MERN (MongoDB, Express.js, React.js, Node.js).</h1>

<h3>A simple products page built with the MERN stack (MongoDB, Express.js, React, Node.js).
The backend connects to MongoDB Atlas and provides REST APIs, while the frontend displays products in a clean UI.</h3>

<h2>🚀 Features</h2>
<h4>
1. Add, fetch, and display products from MongoDB
2. REST API built with Express + Mongoose
3. Frontend with React (Vite/CRA)
4. Fully responsive design
</h4>

<h2>📦 Tech Stack</h2>

1. Frontend: React, Axios, TailwindCSS (if you used it)
2. Backend: Node.js, Express.js, Mongoose
3. Database: MongoDB Atlas
4. Tools: Postman (for API testing)

<h2>⚙️ Installation & Setup</h2>

<h3>1. Setup Backend</h3>

    cd backend 
    npm install

  In server.js, replace Username, Password, and Databasename with yours   

<h3>📦 Install Prerequisites</h3>

    npm install express mongoose cors dotenv
    npm install --save-dev nodemon  
    

<h3> Start the backend: </h3>

    npm run dev

<h3>2. Setup Frontend</h3>

    cd frontend 
    npm install

<h3>📦 Install Prerequisites</h3>

    npm install react-router-dom axios react-image-gallery lucide-react


<h3> Start the Frontend: </h3>

    npm run dev

<h3>To add products in the MongoDB Database, use the Postman Api</h3>

In Postman, use the Post Command to post products to MongoDB
In my case, I have used http://localhost:5000/products (Replace products with your database collection name.

In Postman Body>Raw>select JSON and type the query to post Product.

For Sample postman query:-
Check the Postman Query file




