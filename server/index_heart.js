// imports
import express from "express";
import path from 'path';
import bodyParser from 'body-parser';
// the server
const app = express();
const PORT = 8000;
app.use(express.static(path.resolve(__dirname, '../client/build'))); // make the server serve the build of the webpage
//routes
app.use(bodyParser.json()); // read through the data that comes in the requests
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.get('/', (request, response) => { response.send("welcome page"); });
//CRUD METHODS
app.get('/username', db.getUser);
app.post('/username', db.postUser);
app.put('/username/:id', db.updateUser);
app.delete('/username\:id', db.deleteUser);
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
