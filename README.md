# zstock0holics
---
---
## Welcome to zStocks 

### Steps to run the application locally

> Checkout [https://github.com/dhruvinrsoni-zebra/zstock0holics.git](https://github.com/dhruvinrsoni-zebra/zstock0holics.git) repository with the switch **` --branch v1 `**

1. Building the project 

    | Files| Purpose|
    | ------------- | ------------- |
    | build-all.cmd | Builds all services of multiple modules together  |
    | build.cmd     | Builds each services of all modules one by one    |

2. Dockerization 

    > Use the **`create-images.cmd`** to create the docker images.

3. Running the images 
    - The script **`run-images.cmd`** will run the docker images in a modular fashion. 
  
    ***or***
    - Run the script **`docker-compose-up.cmd`** to deploy the docker images using compose locally. and use **`docker-compose-down.cmd`** to take it down.

Navigate to the [http://localhost:9081](http://localhost:9081)
