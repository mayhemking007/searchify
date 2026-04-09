import client from "prom-client";

export const register = new client.Registry();

client.collectDefaultMetrics({register});

export const httpRequestDuration = new client.Histogram({
    name : "http_request_duration_seconds",
    help : "Duration of HTTP requests",
    buckets : [0.1, 0.3, 0.5, 1, 2, 5]
});

export const searchLatency = new client.Histogram({
    name : "search_latency_seconds",
    help : "Time taken for search"
});

export const ragLatency = new client.Histogram({
    name : "rag_latency_seconds",
    help : "Time taken for RAG"
});

register.registerMetric(httpRequestDuration);
register.registerMetric(searchLatency);
register.registerMetric(ragLatency);