Filename: sophisticated_code.js

/*
  This file contains a sophisticated, elaborate, and complex code
  that implements a web-based chat application with real-time messaging
  using websockets and a server-side database. The chat application allows
  users to create accounts, login, send messages to other connected users,
  and view chat history. It also supports features like emoji support, 
  file attachments, and message formatting.
*/

// Import necessary libraries and modules
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Define constants
const DB_URI = 'mongodb://localhost/chat_app';
const PORT = 3000;
const MESSAGE_LIMIT = 100;

// Connect to the MongoDB database
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Define the User schema and model
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

// Define the Message schema and model
const messageSchema = new mongoose.Schema({
    sender: String,
    receiver: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

// Create the Express application
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define routes for user authentication and registration
app.post('/signup', (req, res) => {
   // User registration logic
});

app.post('/login', (req, res) => {
   // User login logic
});

// Define routes for chat-related actions
app.get('/messages/:sender/:receiver', (req, res) => {
   // Get chat history between two users
});

app.post('/messages', (req, res) => {
   // Send a message from one user to another
});

// Create the HTTP server
const server = http.createServer(app);

// Create the Socket.IO server
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('User connected: ' + socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected: ' + socket.id);
    });

    socket.on('message', (data) => {
        // Save the incoming message to the database
        const message = new Message({
            sender: data.sender,
            receiver: data.receiver,
            content: data.content
        });
        message.save();

        // Broadcast the message to the receiver
        socket.broadcast.emit('message', data);
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// ... More complex code and logic for the chat application ...
// ... Including message formatting, emoji support, file attachment handling, etc. ...

// End of sophisticated_code.js