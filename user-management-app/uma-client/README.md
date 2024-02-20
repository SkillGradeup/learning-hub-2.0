### user-management-app

### app directory architecture

    user-management-app
        |-uma-client [react js front-end folder]
            |-public
            |-src
                |-App.js
                |-index.js
        |-uma-server [node js backend service]
            |-config
                |-swaggerConfig.js
            |-routes
                |-userRouter.js
            |-server.js

### React.js app setup command

- mkdir uma-client

- cd uma-client

- npx create-react-app .

### Tailwind CSS config

- npm install -D tailwindcss

- npx tailwindcss init

- add [input.css] in [src/input.css]

- npx tailwindcss -i ./src/input.css -o ./src/tailwind.css --watch

### Antd Design

- npm install antd@4.21.1

- npm install antd --save (latest version)

### remove package-lock.json

- git rm --cached package-lock.json

- git commit -m "ignore package-lock.json in github commit"
