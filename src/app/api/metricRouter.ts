import { Router } from "express";
import { register } from "../../infra/monitoring/metrics.js";

export const metricRouter = Router();

metricRouter.get('/', async(req, res) => {
    res.set("Content-type", register.contentType);
    res.end(await register.metrics());
})