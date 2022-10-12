# zstock0holics

1. Building the project
```
npm install
npm run start
mvnw clean install
```

2. Dockerization
```
cd portfolio
docker build -t portfolio:latest .
cd ..
cd stock
docker build -t stock:latest .
```
Run localhost:4200 in the browser to access the URL
