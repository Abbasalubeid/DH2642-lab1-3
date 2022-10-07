# npm-tutorial
tutorial version 5

1. install node, recent version (e.g. 17)

2. after checkout execute
```
npm install
```
3. to start your development server
```
npm run dev
```

In case of problems with npm, see (6) Docker below

4. Point your browser to HTML addresses corresponding to different steps of the tutorial, such as:

http://localhost:8080/tw1.1.html

http://localhost:8080/tw1.1-react.html

http://localhost:8080/tw1.2.html

http://localhost:8080/tw1.2-react.html

http://localhost:8080/tw1.2.1.html

The tutorial will point you to other such URLs. Each file under `tw/tw*.js` has a HTML counterpart

5. Unit tests should be run after each tutorial step. We recommend to load unit tests in an Incognito browser window.
http://localhost:8080/test.html

6. In case you have problems with node, npm, webpack, you can use Docker to make a clean little "machine"

https://docs.docker.com/get-docker/

To build your Docker image (see the file `Dockerfile`), run once:
```
docker build . -t dh2642
```

Also it is a good idea to remove the `node_modules` directory before starting the server for the first time.

Then every time you want to run the development server:

```
docker-compose up
```
(see the file `docker-compose.yml`) 

## Test Tracking 
Your test results are saved in a secured KTH database. We use this for three main purposes:

1) to identify students who struggle in the early stages of the course
2) to identify concepts that many students struggle with.
3) to conduct learning analytics research. For such purposes, all data is stored anonymoyusly.

### How to Opt Out
1) Locate the file "telemetry.config.json" in the root directory
2) Change "full" to one of the following:
- Track me: "full"  
- Track me but without username: "anonymous"  
- Don't track me: "none"  

