# Searchify

Built a search engine from scratch to understand how one actually works.

Custom crawler seeds and indexes URLs into Elasticsearch. Retrieval is hybrid —
BM25 + vector similarity — so you get keyword precision and semantic understanding
together. Retrieved chunks go into a RAG pipeline that generates a grounded answer
with source attribution.

The interesting part: since I could only crawl a limited set of links, the answers
had blind spots. So I added a **critical insight layer** — the model tells you what's
probably missing or assumed in its own answer. Constraint became a feature.

---

## Stack

**Backend:** Node.js + TypeScript · Express · BullMQ · Redis  
**Search:** Elasticsearch · PostgreSQL  
**AI:** Embeddings + LLM (RAG)  
**Frontend:** React + Tailwind  
**Monitoring:** Prometheus · Grafana  

---

## Run it

```bash
git clone https://github.com/mayhemking007/searchify.git
cd searchify
docker-compose up -d   # Elasticsearch + monitoring

npm install && npm run dev

cd client && npm install && npm run dev
```

Query the API directly:
```
POST /search
```
```json
{ "query": "what is kafka" }
```

Response:
```json
{
  "answer": "...",
  "critique": "...",
  "sources": [...]
}
```

Metrics at `localhost:9090` (Prometheus) and `localhost:3001` (Grafana).
