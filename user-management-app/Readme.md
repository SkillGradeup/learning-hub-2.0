### user-management-app

### app directory architecture
    user-management-app
        |-uma-client [react js front-end app]
        |-uma-server [node js backend service]

### Node.js app setup command

npm init -y
npm install --save-dev standard-version  (CHANGELOG.md)
npm install express



### How to start node.js app
node server.js


### Git command to ignore package-lock.json

git reset HEAD package-lock.json

git rm --cached package-lock.json

git add .gitignore

git commit -m "Stop tracking package-lock.json"

git commit -m "Stop tracking package-lock.json"

git push origin <branch-name>
