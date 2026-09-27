# SupportAI

**SupportAI** is a customer-support platform built as a hands-on software engineering and AI engineering project.

The project starts as a simple local web application where customers and support agents can sign in and manage support tickets. It will gradually evolve into a full AI-powered support platform with:

* Python backend
* REST APIs
* Relational database
* Authentication and role-based authorization
* Automated testing
* Docker
* Machine-learning ticket classification
* RAG-based knowledge search
* LLM-powered assistance
* AI agents with controlled tools
* CI/CD
* Cloud deployment

The project is being developed incrementally, starting from a simple working application and adding complexity only when the previous layer is understood and stable.

---

# Project Goal

The goal of SupportAI is to build a complete software product from the ground up while developing practical skills in:

* Software engineering
* Python backend development
* API development
* Databases
* Frontend development
* Testing
* Git and GitHub
* Docker
* Machine learning
* Generative AI
* RAG
* AI agents
* Cloud engineering
* System design

The project is intentionally built in phases.

We do **not** start with the final architecture.

We start with the simplest useful product and evolve it step by step.

---

# Product Overview

SupportAI has two primary user types:

## Customer

A customer can:

* Sign in
* View their support tickets
* Create a support ticket
* View ticket details
* Send messages
* View ticket status
* Close a ticket

## Support Agent

A support agent can:

* Sign in
* View the support dashboard
* View all customer tickets
* Search and filter tickets
* Open a ticket
* Reply to customers
* Assign tickets
* Change ticket status
* Resolve tickets
* Use AI-assisted features

Later, AI will help agents with:

* Automatic ticket classification
* Priority suggestions
* Knowledge-base search
* Suggested responses
* RAG-based answers
* Agentic workflows

---

# Product Evolution

SupportAI is developed through multiple versions.

```text
v0.1
Basic Frontend
        ↓
v0.2
Python + FastAPI Backend
        ↓
v0.3
Database
        ↓
v0.4
Authentication + Roles
        ↓
v0.5
Testing + Docker
        ↓
v0.6
Machine Learning Classification
        ↓
v0.7
RAG Knowledge Assistant
        ↓
v0.8
AI Agent
        ↓
v1.0
Complete Local AI Support Platform
        ↓
Future
Cloud + CI/CD + Production Hardening
```

Each version builds on the previous one.

---

# Initial User Flow

## Customer

```text
Login
  ↓
Customer Dashboard
  ↓
My Tickets
  ↓
Ticket Details
  ↓
Send Message / Close Ticket
```

## Support Agent

```text
Login
  ↓
Agent Dashboard
  ↓
Ticket Queue
  ↓
Ticket Details
  ↓
Reply / Assign / Change Status / Resolve
```

Later:

```text
Ticket
  ↓
ML Classification
  ↓
RAG Knowledge Search
  ↓
AI Assistance
  ↓
AI Agent
```

---

# Planned Screens

The final application will contain approximately eight major screens.

### 1. Login

Common sign-in page for customers and support agents.

### 2. Customer Dashboard

Shows:

* Open tickets
* Pending tickets
* Resolved tickets
* Recent tickets

### 3. Create Ticket

Allows customers to create a new support request.

### 4. Customer Ticket Detail

Shows:

* Ticket information
* Conversation
* Status
* Priority
* Messages

### 5. Agent Dashboard

Shows:

* Open tickets
* Pending tickets
* Unassigned tickets
* High-priority tickets
* Resolved tickets

### 6. Agent Ticket Queue

Allows support agents to:

* Search
* Filter
* Sort
* Open tickets

### 7. Agent Ticket Detail

Allows agents to:

* Reply
* Assign
* Change status
* Resolve tickets
* Use AI assistance

### 8. AI Knowledge Assistant

Allows agents to ask questions about company support documentation.

---

# Planned Architecture

The architecture will evolve gradually.

## Initial architecture

```text
Browser
   ↓
Frontend
```

## Backend architecture

```text
Browser
   ↓
REST API
   ↓
FastAPI
   ↓
Database
```

## AI architecture

```text
FastAPI
   │
   ├── ML Classifier
   │
   ├── RAG
   │    ├── Embeddings
   │    ├── Vector Database
   │    └── LLM
   │
   └── AI Agent
        └── Tools
```

## Final direction

```text
                    SupportAI
                        │
              ┌─────────┴─────────┐
              │                   │
           Frontend            FastAPI
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
                PostgreSQL       ML            RAG
                                                │
                                          Vector DB
                                                │
                                               LLM
                                                │
                                              Agent
                                                │
                                               Tools
                                  │
                                Docker
                                  │
                            CI/CD + Cloud
```

This is the target architecture, not the Day 1 implementation.

---

# Planned Database

The database will grow as product requirements grow.

Initial tables:

```text
users
tickets
messages
```

Later:

```text
knowledge_documents
knowledge_chunks
ml_predictions
agent_actions
audit_logs
```

The final database design will be documented in:

```text
docs/DATABASE.md
```

---

# Planned API

The backend will eventually expose APIs for:

### Authentication

```text
POST /api/auth/login
GET  /api/auth/me
POST /api/auth/logout
```

### Customer

```text
GET  /api/tickets
POST /api/tickets
GET  /api/tickets/{id}
POST /api/tickets/{id}/messages
POST /api/tickets/{id}/close
```

### Agent

```text
GET   /api/agent/tickets
GET   /api/agent/tickets/{id}
PATCH /api/agent/tickets/{id}
POST  /api/agent/tickets/{id}/assign
POST  /api/agent/tickets/{id}/messages
POST  /api/agent/tickets/{id}/resolve
```

### AI

```text
POST /api/ai/classify-ticket
POST /api/ai/ask
POST /api/ai/agent
```

The API will grow incrementally as new features are introduced.

---

# Technology Stack

The exact stack will evolve, but the planned technologies are:

## Frontend

* HTML
* CSS
* JavaScript

A frontend framework may be introduced later if it provides a clear engineering benefit.

## Backend

* Python
* FastAPI
* Pydantic

## Database

* SQLite initially
* PostgreSQL later
* SQLAlchemy

## Testing

* pytest

## Version Control

* Git
* GitHub

## Containerization

* Docker
* Docker Compose

## Machine Learning

* Python
* scikit-learn

## Generative AI

* Embeddings
* Vector search
* Local/open-source LLMs
* RAG
* AI agents

## Vector Database

* Qdrant

## CI/CD

* GitHub Actions

## Cloud

* AWS in a later phase

---

# Development Philosophy

SupportAI is developed using a real software-engineering workflow.

Every feature follows approximately:

```text
Requirement
    ↓
GitHub Issue
    ↓
Create Branch
    ↓
Learn Required Concepts
    ↓
Implement
    ↓
Test
    ↓
Commit
    ↓
Pull Request
    ↓
Code Review
    ↓
Fix Review Comments
    ↓
Merge
```

The project is intentionally designed around incremental learning.

We do not introduce a technology simply because it is popular.

We introduce it when the product has a problem that the technology can solve.

---

# Repository Structure

The repository will gradually evolve toward:

```text
support-ai-platform/
│
├── frontend/
│
├── backend/
│
├── ai/
│
├── tests/
│
├── docs/
│
├── infra/
│
├── scripts/
│
├── .github/
│   └── workflows/
│
├── README.md
├── planning.md
├── .gitignore
└── docker-compose.yml
```

The actual structure may change as the application grows.

---

# Documentation

Important project documentation will be maintained in `docs/`.

Planned documents include:

```text
docs/
├── ARCHITECTURE.md
├── DATABASE.md
├── API.md
├── AI_ARCHITECTURE.md
├── DEPLOYMENT.md
├── SECURITY.md
├── TESTING.md
└── DECISIONS.md
```

The detailed eight-week implementation plan is maintained separately in:

```text
planning.md
```

---

# Development Phases

| Phase    | Main Objective          | Status  |
| -------- | ----------------------- | ------- |
| Phase 1  | Basic frontend          | Planned |
| Phase 2  | Python + FastAPI        | Planned |
| Phase 3  | Database                | Planned |
| Phase 4  | Authentication + Roles  | Planned |
| Phase 5  | Testing + Docker        | Planned |
| Phase 6  | ML Classification       | Planned |
| Phase 7  | RAG Knowledge Assistant | Planned |
| Phase 8  | AI Agent                | Planned |
| Phase 9  | CI/CD + Cloud           | Future  |
| Phase 10 | Production hardening    | Future  |

---

# Local Development

During the initial development stages, SupportAI will run entirely on a local machine.

The goal is to avoid unnecessary cloud costs while learning the fundamentals.

The application will eventually be runnable locally with Docker:

```bash
docker compose up
```

Detailed setup instructions will be added as the application reaches the Docker phase.

---

# Current Status

## Project Status

**Planning / Phase 0**

The product architecture, roadmap and development plan are being defined.

Implementation begins with **Phase 1: Basic Frontend**.

---

# How This Project Is Different

SupportAI is not intended to be a collection of disconnected tutorials.

The entire project is one evolving product.

For example:

```text
Simple Ticket Website
        ↓
Real Backend
        ↓
Real Database
        ↓
Authentication
        ↓
Testing
        ↓
Docker
        ↓
Machine Learning
        ↓
RAG
        ↓
AI Agent
        ↓
Cloud
```

Every new technology is introduced because the application needs it.

This allows the developer to understand not only **how** something works, but also:

* Why it exists
* Where it belongs
* What problem it solves
* What alternatives exist
* What trade-offs were made

---

# Learning Objectives

By completing the project, the developer should gain practical experience in:

### Software Engineering

* Writing maintainable code
* Debugging
* Refactoring
* Code review
* Git workflows
* API development
* Database design
* Testing

### Python

* Core Python
* Object-oriented programming
* Exceptions
* Modules
* Async programming
* Backend development

### AI Engineering

* Machine learning
* Text classification
* Embeddings
* Vector search
* RAG
* LLM integration
* Tool calling
* AI agents
* AI evaluation

### Cloud Engineering

* Docker
* CI/CD
* AWS fundamentals
* Logging
* Monitoring
* Deployment
* Security fundamentals

---

# Project Success Criteria

The project is successful when the developer can:

1. Run the application locally.
2. Explain the complete architecture.
3. Explain the database design.
4. Explain the API design.
5. Explain the authentication flow.
6. Explain the ML classifier.
7. Explain the RAG pipeline.
8. Explain the AI agent.
9. Debug common application failures.
10. Make changes to the codebase independently.
11. Create and review GitHub pull requests.
12. Explain technical decisions during an interview.

The final goal is not simply to have working code.

The goal is to **understand the system well enough to build, modify, debug and explain it independently.**

---

# Roadmap

For the detailed implementation schedule, see:

```text
planning.md
```

For development tasks, see the GitHub Issues and weekly milestones.

---

# License

This project is intended for learning and portfolio development.

A project-specific open-source license can be added later if the repository will be published publicly.
