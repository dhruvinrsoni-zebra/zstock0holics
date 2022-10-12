# zstock0holics

1. Building the project
  mvnw clean install

2. Dockerization
  cd portfolio
  docker build -t portfolio:latest .
  cd ..
  cd stock
  docker build -t stock:latest .
