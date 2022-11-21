# zstock0holics

1. Building the project

    | Files| Purpose|
    | ------------- | ------------- |
    | build-all.cmd | Builds all services of multiple modules together  |
    | build.cmd     | Builds each services of all modules one by one    |

2. Dockerization

    > Use the `create-images.cmd` to create the docker images.

3. Running the images
    - The script `run-images.cmd` will run the docker images in a modular fashion. 
  
    ***or***
    - Run the script `docker-compose-up.cmd` to deploy the docker images using compose locally.
  
4. Building frontend
    - Navigate to frontend folder and run `npm run build`
    

Run localhost:4200 in the browser to access the URL
