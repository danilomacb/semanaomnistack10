const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const routes = require("./routes");
const { setupWebSocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect("mongodb://localhost:27017/semanaomnistack10", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
