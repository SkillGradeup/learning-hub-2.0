### user-management-app

### app directory architecture
    user-management-app
        |-uma-client [react js front-end app]
        |-uma-server [node js backend service]
            |-config
                |-swaggerConfig.js
            |-routes
                |-userRouter.js
            |-server.js        

### Node.js app setup command

npm init -y

npm install --save-dev standard-version  (CHANGELOG.md)

npm install express

npm install mssql 

npm install body-parser

npm install dotenv

npm install cors

npm install swagger-jsdoc swagger-ui-express glob
or
npm install glob


## nodemon for server changes

npm install -g nodemon

npm install --save-dev nodemon

### How to start node.js app
node server.js

## How to start sever with nodemon

npm start
    or
npm run dev


### Git command to ignore package-lock.json

git reset HEAD package-lock.json

git rm --cached package-lock.json

git add .gitignore

git commit -m "Stop tracking package-lock.json"

git push origin <branch-name>




## Swagger configuration

npm install swagger-jsdoc swagger-ui-express glob

or

npm install glob

api-doc [link](http://localhost:5000/api-docs/)
