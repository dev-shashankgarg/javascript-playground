## About Boilerplate

1. Setup module by npm init (use defaults) (Goal is to create package.json file)
```
npm init
```

2. Add module specific dependency for babel
```
npm install babel-preset-env
```

3. Modify package.json file to add build and serve scripts
```
  "scripts": {
    "build": "babel src/index.js -o public/scripts/bundle.js --presets env --watch",
    "serve": "live-server public/"
  }
```

4. To Install modules from package.json
```
npm install
```

5. To Automatically update bundle.js
```
npm run build
```

6. To run live-server
```
npm run serve
```