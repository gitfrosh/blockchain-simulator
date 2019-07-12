# Blockchain simulator

## Whuuuaaat?
This small app provides a basic blockchain simulation.

The blockchain starts with the genesis block and can be continued by adding more blocks. Each block points to the block before through the previous block's hash. The newly created hash is the fingerprint of the summoned data, index, previous hash, timestamp and nonce. The mined nonce makes sure that the hash begins with four zeros and makes the block therefore "signed". 

Manipulating any data within any block of the blockchain (which can not be simulated (yet) in this demo) breaks the chain and results in invalid bloc

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.