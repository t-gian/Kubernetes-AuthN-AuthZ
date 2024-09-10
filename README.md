# Authentication and Authorization in Kubernetes

This repository contains all the necessary resources and documentation for the project `Authentication and Authorization in Kubernetes`. The main goal of this project is to showcase how authentication (AuthN) and authorization (AuthZ) mechanisms can be implemented within a Kubernetes cluster, using a real-world case microservice scenario.

## Project Structure

The project is structured into the following directories:

### 1. `doc/`

This folder contains the report for the project and lab activity. The report is available in PDF format and provides a detailed explanation of the strategies and techniques used for implementing authentication and authorization in Kubernetes.

**File:**
- `report.pdf` - Detailed report explaining the approach, lab results, and observations.

### 2. `demo-app/`

This folder contains the source code for a two-tier web application, designed to simulate a real-world microservice scenario. The web application consists of:
- **Frontend**: A React.js application served by NGINX.
- **Backend**: A Node.js application.

Both the frontend and backend services will be deployed as separate pods in a Kubernetes cluster, demonstrating the use of Kubernetes in a microservice architecture.

**Key Files:**
- `Dockerfiles` - Docker files configuration for building container images of both the frontend and backend.
- `frontend-deployment.yaml` - Kubernetes deployment manifest for the frontend React.js service.
- `backend-deployment.yaml` - Kubernetes deployment manifest for the backend Node.js service.

### 3. `authN-authZ/`

This folder contains the Kubernetes manifest files that implement authentication and authorization policies. These YAML files configure how different users are authenticated and authorized within the Kubernetes cluster. The detailed explanation of each file and the respective configuration strategies are explained as part of the laboratory activity in the `doc/report.pdf` report file.

