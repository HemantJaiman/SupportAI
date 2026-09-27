# SupportAI

## A Complete Beginner → Software / AI Engineer Training Project

---

# 1. What are we building?

We are building a local customer-support web application called:

# SupportAI

It is a small customer-support platform used by two types of users:

### Customer

A customer can:

* Sign in
* See their support tickets
* Create a new support ticket
* Open a ticket
* Send messages to the support team
* See ticket status
* Close a ticket

### Support Agent

A support agent can:

* Sign in
* See all customer tickets
* See open/pending/resolved ticket counts
* Search and filter tickets
* Open a ticket
* Reply to customers
* Change ticket status
* Assign tickets
* See ticket priority/category
* Eventually use AI to classify tickets
* Eventually ask an AI knowledge assistant
* Eventually use an AI agent to help resolve tickets

---

# 2. The most important idea

The application will start extremely simple.

### Version 0.1

```text
Login
  ↓
Customer Dashboard
  ↓
Create Ticket
  ↓
View Ticket
```

No AI.

No cloud.

No complex database.

No Docker.

No agents.

---

Then we progressively add:

```text
v0.1  Basic website
  ↓
v0.2  Python backend
  ↓
v0.3  Database
  ↓
v0.4  Authentication + roles
  ↓
v0.5  Testing + Docker
  ↓
v0.6  ML classification
  ↓
v0.7  RAG knowledge assistant
  ↓
v0.8  AI agent
  ↓
v1.0  Production-style local system
```

The final system should feel like a genuine small SaaS product.

---

# 3. Final product — what it will eventually look like

## Customer side

```text
                    LOGIN
                      │
                      ↓
            CUSTOMER DASHBOARD
                  /        \
                 /          \
                ↓            ↓
        CREATE TICKET    MY TICKETS
                              │
                              ↓
                         TICKET DETAIL
                              │
                              ↓
                           MESSAGES
```

## Agent side

```text
                     LOGIN
                       │
                       ↓
                 AGENT DASHBOARD
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
       OPEN         PENDING      RESOLVED
       TICKETS      TICKETS      TICKETS
          │
          ↓
       TICKET QUEUE
          │
          ↓
     AGENT TICKET DETAIL
          │
    ┌─────┼──────────────┐
    ↓     ↓              ↓
 Reply  Assign       Change Status
                         │
                         ↓
                      AI HELP
                     /       \
                    ↓         ↓
                 RAG        Agent
```

---

# 4. Final screens

We will eventually have approximately **8 screens**.

## Screen 1 — Login

Common login page.

Fields:

```text
Email
Password
[Sign In]
```

The backend determines whether the user is:

```text
CUSTOMER
SUPPORT_AGENT
```

and redirects to the correct dashboard.

---

## Screen 2 — Customer Dashboard

Example:

```text
------------------------------------------
SupportAI

Hello, Rahul

My Tickets

Open       2
Pending    1
Resolved   5

------------------------------------------

#1023  Payment charged twice     OPEN
#1019  Password reset             RESOLVED
#1008  Refund request             PENDING

[ + Create New Ticket ]
------------------------------------------
```

---

## Screen 3 — Create Ticket

Fields:

```text
Subject
Description
Category
Priority
```

Initially the customer selects everything manually.

Later:

```text
Customer submits ticket
        ↓
ML model predicts category
        ↓
AI suggests priority
```

---

## Screen 4 — Customer Ticket Detail

Example:

```text
Ticket #1023

Payment charged twice

Status: OPEN
Priority: HIGH
Category: BILLING

------------------------------------------

Customer:
I was charged twice for the same transaction.

------------------------------------------
Support Agent:
We are investigating this issue.

------------------------------------------

[Write message...]

[Send]
[Close Ticket]
```

---

# 5. Agent screens

## Screen 5 — Agent Dashboard

Example:

```text
------------------------------------------
SupportAI — Agent Dashboard

Open Tickets       28
Unassigned          7
High Priority       5
Resolved Today     16
------------------------------------------

Recent Activity

#1023 Payment issue       HIGH
#1022 Login problem      MEDIUM
#1021 Refund request      LOW
------------------------------------------
```

---

## Screen 6 — Agent Ticket Queue

The agent can:

```text
Search
Filter by status
Filter by priority
Filter by category
Filter by assigned agent
```

Example:

```text
Ticket   Customer     Category       Priority     Status
-----------------------------------------------------------
1023     Rahul        BILLING        HIGH         OPEN
1022     Amit         LOGIN          MEDIUM       OPEN
1021     John         REFUND         LOW          PENDING
```

---

## Screen 7 — Agent Ticket Detail

This becomes the most important screen.

Example:

```text
------------------------------------------------
Ticket #1023

Payment charged twice

Customer: Rahul
Category: BILLING
Priority: HIGH
Status: IN PROGRESS
Assigned: Sarah

------------------------------------------------

Conversation

Customer:
I was charged twice.

Agent:
We are checking your transaction.

------------------------------------------------

Actions

[Assign]
[Change Status]
[Reply]
[Resolve]
------------------------------------------------

AI Assistance

Predicted Category: BILLING
Confidence: 92%

[Search Knowledge Base]

[Generate Reply]

------------------------------------------------
```

Later this screen becomes the center of the AI functionality.

---

## Screen 8 — Knowledge / AI Assistant

Initially this screen doesn't exist.

We add it later.

Example:

```text
------------------------------------------
SupportAI Knowledge Assistant

Ask a question:

"Can a customer get a refund after 30 days?"

[Ask AI]

------------------------------------------

Answer:

According to the Refund Policy...

Sources:
refund_policy.md
refund_terms.md
------------------------------------------
```

Later the AI agent functionality will live here and inside the ticket detail screen.

---

# 6. Final backend architecture

Eventually:

```text
                 Browser
                    │
             HTTP / REST API
                    │
                    ↓
                FastAPI
                    │
       ┌────────────┼────────────┐
       │            │            │
       ↓            ↓            ↓
    Users        Tickets        AI
       │            │            │
       └────────────┼────────────┘
                    ↓
                PostgreSQL
```

AI later becomes:

```text
                    FastAPI
                       │
              ┌────────┴────────┐
              │                 │
             ML                RAG
              │                 │
       Ticket Classifier   Vector Database
                                │
                               LLM
                                │
                              Agent
```

---

# 7. Final database

We intentionally start with only a few tables and add them as requirements appear.

## Initial database

### users

```text
id
name
email
password_hash
role
created_at
```

### tickets

```text
id
customer_id
assigned_agent_id
subject
description
category
priority
status
created_at
updated_at
```

### messages

```text
id
ticket_id
sender_id
message
created_at
```

---

## Later tables

### knowledge_documents

```text
id
title
filename
content
created_at
```

### knowledge_chunks

```text
id
document_id
chunk_text
embedding_id
metadata
```

### ml_predictions

```text
id
ticket_id
model_name
predicted_category
confidence
created_at
```

### agent_actions

```text
id
ticket_id
action
tool_name
input
output
created_at
```

### audit_logs

```text
id
user_id
action
resource
resource_id
created_at
```

So the final system has roughly:

**8 tables**

but he does NOT need to learn all eight at the beginning.

---

# 8. Final API design

Again, these APIs are the destination, not Day 1 requirements.

## Authentication

```text
POST /api/auth/login
GET  /api/auth/me
POST /api/auth/logout
```

## Customer

```text
GET  /api/tickets
POST /api/tickets
GET  /api/tickets/{id}
POST /api/tickets/{id}/messages
POST /api/tickets/{id}/close
```

## Agent

```text
GET   /api/agent/tickets
GET   /api/agent/tickets/{id}
PATCH /api/agent/tickets/{id}
POST  /api/agent/tickets/{id}/assign
POST  /api/agent/tickets/{id}/messages
POST  /api/agent/tickets/{id}/resolve
```

## AI classification

```text
POST /api/ai/classify-ticket
```

## Knowledge base

```text
GET  /api/knowledge/documents
POST /api/knowledge/documents
DELETE /api/knowledge/documents/{id}
POST /api/knowledge/search
```

## RAG

```text
POST /api/ai/ask
```

## AI agent

```text
POST /api/ai/agent
```

That's roughly **20–25 API operations** in the eventual product.

But in Week 1 he sees almost none of them.

---

# 9. Technology progression

We deliberately introduce technologies one at a time.

| Phase | Technology              |
| ----- | ----------------------- |
| 1     | HTML/CSS/JavaScript     |
| 2     | Python                  |
| 3     | FastAPI                 |
| 4     | SQLite + SQL            |
| 5     | SQLAlchemy + PostgreSQL |
| 6     | Authentication          |
| 7     | pytest                  |
| 8     | Docker                  |
| 9     | scikit-learn            |
| 10    | Embeddings              |
| 11    | Qdrant                  |
| 12    | Local LLM               |
| 13    | AI agents               |
| 14    | GitHub Actions          |
| 15    | AWS                     |

For the first eight weeks, **AWS remains secondary**. We build the entire application locally first.

That is much healthier for a beginner.

---

# 10. Development workflow

From the very beginning:

```text
GitHub Issue
     ↓
Create branch
     ↓
Learn required concept
     ↓
Implement
     ↓
Test manually
     ↓
Write automated tests where applicable
     ↓
Commit
     ↓
Push
     ↓
Pull Request
     ↓
Tech Lead review
     ↓
Fix review comments
     ↓
Merge
```

You are the Tech Lead.

He is the primary developer.

---

# 11. Week 1 — Product foundation

## Objective

Build the website visually and understand what the product does.

### Days 1–2

Learn:

```text
HTML
CSS basics
JavaScript basics
Git basics
```

Build:

* Login screen
* Customer dashboard
* Agent dashboard

At this point authentication is fake/static.

Example:

```text
customer@example.com

agent@example.com
```

Selecting the appropriate account shows a different interface.

---

### Day 3

Build Customer screens:

* dashboard
* ticket list
* create ticket

Use sample JavaScript data.

---

### Day 4

Build:

* customer ticket detail
* messages
* ticket status display

---

### Day 5

Build Agent screens:

* dashboard
* ticket queue
* ticket detail

Add:

* filtering
* status changing
* assignment UI

---

### Day 6

Connect everything on the frontend.

Test the complete user journey:

### Customer

```text
Login
→ Dashboard
→ Create Ticket
→ View Ticket
```

### Agent

```text
Login
→ Dashboard
→ Ticket Queue
→ Open Ticket
→ Reply
→ Change Status
```

### Week 1 result

He has a visible product.

It doesn't have a real backend yet.

That's okay.

---

# 12. Week 2 — Python + backend

## Objective

Teach him what a backend actually is.

### Day 1

Python:

```text
variables
conditions
loops
functions
lists
dictionaries
```

### Day 2

Python:

```text
classes
objects
modules
exceptions
JSON
files
```

### Day 3

FastAPI:

```text
application
route
request
response
GET
POST
```

Build:

```text
GET /health
GET /tickets
```

### Day 4

Build:

```text
GET /tickets/{id}
POST /tickets
```

### Day 5

Build:

```text
PATCH /tickets/{id}
POST /tickets/{id}/messages
```

### Day 6

Connect frontend to backend.

Remove hardcoded ticket data.

Now:

```text
Browser
 ↓
FastAPI
 ↓
Python
 ↓
Response
 ↓
Browser
```

### Week 2 result

He understands the frontend/backend relationship.

---

# 13. Week 3 — Database

## Objective

Make information persistent.

### Day 1

Learn:

```text
database
table
row
column
primary key
foreign key
CRUD
```

Start with SQLite.

---

### Day 2

Create:

```text
users
tickets
messages
```

---

### Day 3

Connect Python to database.

Learn basic SQL.

---

### Day 4

Convert ticket APIs to database-backed APIs.

---

### Day 5

Convert messages to database-backed operations.

---

### Day 6

Seed realistic data:

```text
10 users
30 tickets
50 messages
```

Test complete journeys.

### Week 3 result

Restarting the application no longer destroys the data.

---

# 14. Week 4 — Authentication and roles

## Objective

Make customer and agent accounts genuinely different.

### Day 1

Learn:

```text
authentication
authorization
password hashing
```

---

### Day 2

Create login API.

```text
POST /api/auth/login
```

---

### Day 3

Implement authentication tokens/session handling.

---

### Day 4

Implement role authorization.

Customer:

```text
can see own tickets
```

Agent:

```text
can see support tickets
```

Customer must NOT be able to call agent functionality.

---

### Day 5

Connect the real login screen.

Now:

```text
customer login
      ↓
customer dashboard
```

and

```text
agent login
      ↓
agent dashboard
```

---

### Day 6

Security testing.

Try:

```text
Customer accessing agent page
Customer accessing another customer's ticket
Unauthenticated API calls
Invalid login
```

### Week 4 result

This is now a real multi-user application rather than a demo UI.

---

# 15. Week 5 — Testing + Docker

## Objective

Teach professional engineering habits.

### Day 1

Learn testing concepts.

Write tests for:

* ticket creation
* ticket retrieval
* invalid ticket
* status update

---

### Day 2

Authentication tests.

---

### Day 3

API integration tests.

---

### Day 4

Learn Docker.

Create backend Dockerfile.

---

### Day 5

Add database container.

Eventually:

```text
Docker Compose
   ↓
Backend
   ↓
Database
```

---

### Day 6

Write:

```text
README.md
SETUP.md
```

A new developer should be able to run:

```bash
docker compose up
```

and understand what happens.

### Week 5 result

The project begins to resemble professional software.

---

# 16. Week 6 — Machine learning classification

## Objective

Add the first real AI feature.

The problem:

> Support agents receive hundreds of tickets and need them categorized automatically.

Example:

```text
"My card was charged twice."

↓
BILLING
```

---

### Day 1

Learn:

```text
dataset
feature
label
training
testing
classification
```

---

### Day 2

Prepare ticket dataset.

---

### Day 3

Implement:

```text
TF-IDF
```

Understand why text must be converted into numerical representations.

---

### Day 4

Train:

```text
Logistic Regression
```

---

### Day 5

Evaluate:

```text
precision
recall
F1
confusion matrix
```

---

### Day 6

Connect model to SupportAI.

When a ticket is created:

```text
Ticket
 ↓
Classifier
 ↓
Category
 ↓
Database
```

### Week 6 result

The application now has its first intelligent feature.

---

# 17. Week 7 — RAG Knowledge Assistant

## Objective

Teach him how modern AI applications actually use company knowledge.

Create documents:

```text
Refund Policy
Payment Policy
Password Reset
Shipping Policy
Account Security
```

---

### Day 1

Learn:

```text
LLM
embeddings
vector
semantic search
```

---

### Day 2

Create document ingestion pipeline.

```text
Document
 ↓
Text
 ↓
Chunks
```

---

### Day 3

Generate embeddings.

---

### Day 4

Store them in local vector database.

```text
Qdrant
```

---

### Day 5

Build retrieval:

```text
Question
 ↓
Vector search
 ↓
Top relevant chunks
```

---

### Day 6

Connect an LLM.

Final flow:

```text
Question
 ↓
Retrieve relevant documents
 ↓
Context
 ↓
LLM
 ↓
Answer
 ↓
Sources
```

### Week 7 result

Agent can ask:

> "Can a customer receive a refund after 30 days?"

and SupportAI answers using the company's documents.

---

# 18. Week 8 — AI agent + final hardening

## Objective

Turn the AI from a question-answering assistant into a controlled assistant that can use tools.

Possible tools:

```text
get_ticket()
search_knowledge()
get_customer()
draft_response()
update_ticket()
create_escalation()
```

---

### Day 1

Understand tool calling.

---

### Day 2

Implement:

```text
get_ticket()
search_knowledge()
```

---

### Day 3

Implement:

```text
draft_response()
update_ticket()
```

---

### Day 4

Create the agent workflow.

Example:

```text
User:
"Help me resolve ticket #1023."

        ↓

Agent
        ↓
get_ticket(1023)
        ↓
search_knowledge()
        ↓
reason
        ↓
draft_response()
        ↓
present result
```

---

### Day 5

Add safety controls:

* allowed tools
* input validation
* tool-call limits
* timeouts
* failure handling

---

### Day 6

Final system test.

Run:

```text
Customer login
→ create ticket
→ ML classification
→ agent login
→ view ticket
→ RAG search
→ AI response
→ agent action
```

Then document everything.

### Week 8 result

SupportAI v1.0 exists locally.

---

# 19. What happens after Week 8?

Only then do we expand into:

## Phase 2 — Cloud Engineering

```text
Docker
 ↓
AWS
 ↓
EC2 / ECS
 ↓
RDS
 ↓
S3
 ↓
CloudWatch
 ↓
IAM
 ↓
CI/CD
```

Then:

## Phase 3 — Advanced Engineering

```text
Redis
background jobs
queues
caching
rate limiting
observability
performance
load testing
```

Then potentially:

```text
Terraform
Kubernetes
microservices
event-driven architecture
```

But **none of that should interrupt the first 8 weeks.**

---

# 20. The daily structure

He has 4–5 hours.

Use this approximate schedule:

```text
45 min
Learn today's concept

2 hr 30 min
Build the current project feature

30 min
Debug / test / experiment

30 min
DSA

15 min
Git commit + engineering journal
```

You spend only **30 minutes** with him.

---

# 21. Your 30-minute Tech Lead routine

Every day:

### 5 minutes — Standup

He answers:

```text
Yesterday:
Today:
Blocker:
```

### 15 minutes — Review

Look at:

* code
* PR
* architecture
* bugs

Ask questions rather than immediately fixing things.

### 10 minutes — Plan

Agree on:

* today's ticket
* next ticket
* blocker resolution

---

# 22. What he should NEVER do

He should not spend five hours watching tutorials.

The ratio should roughly be:

```text
20% learning
60% building
10% debugging/testing
10% interview/DSA
```

And whenever possible:

> **Learn → immediately implement.**

---

# 23. The final learning journey

At the beginning:

```text
HTML
```

Then:

```text
HTML/CSS/JS
    ↓
Python
    ↓
FastAPI
    ↓
SQL
    ↓
Database
    ↓
Authentication
    ↓
Testing
    ↓
Docker
    ↓
ML
    ↓
Embeddings
    ↓
RAG
    ↓
LLM
    ↓
Agents
```

This is exactly the sequence I want.

Not:

```text
AWS
Kubernetes
LangChain
PyTorch
Terraform
React
Kafka
ML
```

all at the same time.

---

# 24. The final project story

By the end, his story is:

> "I started with a simple local support-ticket website. I built the customer and agent workflows, then created the Python API and database. I added authentication and role-based access, automated tests and Docker. After understanding the conventional system, I added ML-based ticket classification, then built a RAG knowledge assistant and finally an AI agent with controlled tools. I documented and tested each stage."

That is a **much more believable and much stronger technical story** than:

> "I completed a Python course, an AWS course and an AI course."

---

# 25. One final design principle

We should intentionally keep **customer and agent behavior separate from the beginning**.

The application should always answer:

> **Who is logged in?**

Then:

```text
CUSTOMER
   ↓
Customer UI
   ↓
Customer APIs
   ↓
Only their own tickets

SUPPORT_AGENT
   ↓
Agent UI
   ↓
Agent APIs
   ↓
Support tickets
```

This gives us a natural way to teach:

* authentication
* authorization
* API security
* database relationships
* role-based access
* frontend routing
* backend middleware

without creating artificial exercises.

---

# Final target

After the 8-week core:

**Screens:** ~8

**Core database tables:** 8

**Final API surface:** ~20–25 endpoints

**Major backend services:** 4–5

**AI components:** 3

```text
ML classifier
RAG
AI agent
```

**Users:** 2 roles

```text
Customer
Support Agent
```

**Deployment:** Local Docker first

**Cloud:** Phase 2 after the core project

**Interview:** DSA + Python + backend + database + AI + project discussion throughout the 8 weeks

---

# Most important rule

We will never ask:

> "What technology should we learn this week?"

Instead ask:

> **"What problem does the product have now, and what technology do we need to solve that problem?"**

That one change will make his learning much more natural.
