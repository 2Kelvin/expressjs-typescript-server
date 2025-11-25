Simple server created using typescript and express js

Steps:

Creating a package.json
```js
npm init
```

Installing **express js**
```js
npm install express
```

Installing typescript with its types for node and express and automatic server hot-reloading tool
```js
npm install -D typescript @types/express @types/node ts-node-dev
```

Creating a tsconfig.json
```js
npx tsc --init
```

Scripts to add to **package.json** to build/compile/run the server
```js
    "scripts": {
        "dev": "nodemon --exec ts-node src/index.ts",
        "build": "tsc",
        "start": "node dist/index.js"
    },
```

More **package.json** updates
```js
"type": "module"
"main": "dist/index.ts"
```

Make your **tsconfig.json** as one above: uncomment *rootdir* and *outdir* and in types add *"node"*

To run the server in development with hot reloading, run
```js
npm run dev
```

To build and run the compiled javascript code from typescript, run
```js
    npm run build
    npm start
```