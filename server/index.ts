import express = require("express");
import cors = require("cors");
import Routes from "../server/routers/routers";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(Routes);

app.listen(PORT, () => {
  console.log("Sever has started!!!");
});
