# Microservices Containerization with Docker & Compose

## Setup Instructions
1. Clone the repository.
2. Navigate to the `Skill-Test/` directory.
3. Run `docker-compose up --build`.

## Testing
- User Service: http://localhost:3000
- Product Service: http://localhost:3001
- Gateway Service: http://localhost:3003

## Troubleshooting
- Run `docker-compose down -v` to remove containers and volumes.
- Ensure ports 3000, 3001, 3003 are not in use.
- Use `docker-compose logs` to debug errors.

## Screenshots
Include screenshots of:
- `docker ps` showing running containers
- Browser access to each service
