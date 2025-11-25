Simple server created using typescript and express js

Steps:

Creating a package.json
`npm init`

Installing **express js**
`npm install express`

Installing typescript with its types for node and express and automatic server hot-reloading tool
`npm install -D typescript @types/express @types/node ts-node-dev`

Creating a tsconfig.json
`npx tsc --init`

Scripts to add to **package.json** to build/compile/run the server
```js
    "scripts": {
        "dev": "nodemon --exec ts-node src/index.ts",
        "build": "tsc",
        "start": "node dist/index.js"
    },
```

More **package.json** updates
`"type": "module"`
`"main": "dist/index.ts",`

To run the server in development with hot reloading, run
`npm run dev`

To build and run the compiled javascript code from typescript, run
`
    npm run build
    npm start
`