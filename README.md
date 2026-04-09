# 🔍 Searchify

**Searchify** is a production-grade AI-powered search engine that combines **hybrid search (keyword + semantic)** with **RAG (Retrieval-Augmented Generation)** and a unique **Critical Insight layer** to surface not just answers — but also their limitations.

---

## 🚀 Features

* 🔎 **Hybrid Search**

  * Combines BM25 (keyword search) + vector similarity
  * Powered by Elasticsearch

* 🤖 **RAG (AI Answers)**

  * Generates answers using retrieved context
  * Grounded responses with source attribution

* ⚠ **Critical Insight Layer (Unique)**

  * Highlights assumptions, limitations, or missing perspectives
  * Improves trust and reasoning

* 🌐 **Custom Web Crawler**

  * URL seeding, crawling, and indexing pipeline
  * Content cleaning + intelligent chunking

* ⚡ **Fast Retrieval Pipeline**

  * Redis caching
  * Efficient chunk-based indexing

* 📊 **Monitoring & Observability**

  * Prometheus for metrics collection
  * Grafana dashboards for visualization

* 🎨 **Minimal Frontend**

  * Google-like UX + AI answer layer
  * Built with React + Tailwind CSS

---

## 🧠 Architecture

```
Crawler → Indexer → Elasticsearch
                ↓
            Hybrid Search
                ↓
        Top Relevant Chunks
                ↓
        RAG (LLM Answer)
        + Critical Insight
                ↓
            Frontend UI
```

---

## 🛠 Tech Stack

### Backend

* Node.js + TypeScript
* Express.js
* BullMQ (workers)
* Redis

### Search & Storage

* Elasticsearch (hybrid retrieval)
* PostgreSQL (metadata)

### AI

* Embeddings (vector search)
* LLM (RAG answer generation)

### Frontend

* React (Vite)
* Tailwind CSS

### Monitoring

* Prometheus
* Grafana

---

## 📦 Project Structure

```
searchify/
├── src/                # Backend
├── client/             # Frontend 
├── docker-compose.yml
├── prometheus.yml
└── README.md
```

---

## ⚙️ Setup

### 1. Clone Repository

```bash
git clone https://github.com/mayhemking007/searchify.git
cd searchify
```

---

### 2. Install Dependencies

#### Backend

```bash
npm install
```

#### Frontend

```bash
cd client
npm install
```

---

### 3. Start Services (Elasticsearch + Monitoring)

```bash
docker-compose up -d
```

---

### 4. Run Backend

```bash
npm run dev
```

---

### 5. Run Frontend

```bash
cd client
npm run dev
```

---

## 🔍 API Endpoints

### Search + AI Answer

```
GET /ask?q=your_query
```

Response:

```json
{
  "answer": "...",
  "critique": "...",
  "sources": [...]
}
```

---

### Metrics (Monitoring)

```
GET /metrics
```

---

## 📊 Monitoring

* Prometheus → `http://localhost:9090`
* Grafana → `http://localhost:3001`

Track:

* API latency
* Search latency
* RAG latency
* Request rate

---

## 🧪 Example Query

```
What is Kafka?
```

Output:

* AI-generated answer
* ⚠ Critical insight
* Source links

---

## 💡 Key Learnings

* Hybrid search (BM25 + vector)
* RAG system design
* Data quality impact on AI
* Observability with Prometheus & Grafana
* Distributed worker pipelines

---

## 📌 Inspiration

Inspired by modern AI search systems like Perplexity — but with an added focus on **critical thinking and epistemic awareness**.

---
