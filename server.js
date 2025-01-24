const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');
const {createUser,deleteUser} = require('./models/Resource.model'); // Import from utils

const server = http.createServer(app);
const port = 5000;

async function startServer() {
  // Connect to the database
  await connectDB();

  // Create a test user
  //const user=await createUser('Aadil', 'aadilharis812@gmail.com', 'Admin');
  //const user=await deleteUser('679254341e891c67fcc56768');
  //console.log('User deleted',user);
  // Start the server
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();
