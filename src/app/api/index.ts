import express from "express";
import { searchrouter } from "./searchRouter.js";

const app = express();

app.use(express.json());
app.use('/search', searchrouter);
app.listen(3000, () => console.log("Server started on port 3000"));