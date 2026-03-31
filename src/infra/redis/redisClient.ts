import{Redis} from "ioredis";
import { redisConnection } from "./redisConnection.js";

export const redisClient = new Redis(redisConnection);