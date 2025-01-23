const http=require('http');
const app=require('./app');
const connectDB=require('./config/db');
const createUser=require('./models/Resource.model');
const server=http.createServer(app);
const port=5000;

async function   startServer() {
    await connectDB();
    await createUser('Aadil','aadilharis812@gmail.com','Admin');
    server.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    });
}

startServer();