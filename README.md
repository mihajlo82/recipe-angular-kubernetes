# Recipe App

A modern **Recipe Web Application** built with **Angular**, containerized with **Docker**, and deployed locally on **Kubernetes (Minikube)**. The project demonstrates building Angular app, containerization, and CI/CD workflow simulation.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Run Locally](#run-locally)
- [Docker Setup](#docker-setup)
- [Kubernetes Deployment](#kubernetes-deployment)
- [Simulated CI/CD](#simulated-cicd)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## Project Overview

This project is a **Recipe Web App** built with **Angular**. Users can browse recipes, filter by categories, search by name, and view recipe details. The app is **containerized with Docker** and deployed to a local **Minikube Kubernetes cluster**. Additionally, a **CI/CD workflow** is simulated to automate builds and deployments.

---

## Features

- Browse a grid of recipe cards
- Filter recipes by category
- Search recipes by name
- View detailed recipe information on a separate page
- Responsive UI with SCSS styling
- Containerized for easy deployment
- CI/CD workflow simulation

---

## Technologies Used

| Layer | Technology |
|-------|------------|
| Frontend | Angular 17 |
| Styling | SCSS |
| Containerization | Docker |
| Local Kubernetes | Minikube |
| CI/CD Simulation | GitHub Actions |
| Deployment | Kubernetes Deployment & Service |
| Version Control | Git + GitHub |

---

## Project Structure
```
recipe-app-client/
├─ src/
│ ├─ app/
│ │ ├─ components/
│ │ │ ├─ recipe-card/
│ │ │ └─ filter-bar/
│ │ ├─ pages/
│ │ │ └─ home/
│ │ └─ app.module.ts / app.component.ts
├─ k8s/
│ ├─ deployment.yaml
│ └─ service.yaml
├─ Dockerfile
├─ package.json
└─ README.md
```
