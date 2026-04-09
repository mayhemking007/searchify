import express from "express";
import { searchrouter } from "./searchRouter.js";
import cors from "cors";
import { metricRouter } from "./metricRouter.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use('/metrics', metricRouter);
app.use('/search', searchrouter);
app.listen(3000, () => console.log("Server started on port 3000"));