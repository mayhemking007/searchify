import express from "express";
import { searchrouter } from "./searchRouter.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
app.use('/search', searchrouter);
app.listen(3000, () => console.log("Server started on port 3000"));