import express from 'express';
// import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import router from './routes';
// importing the package that we will use for the webpack
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

// we will connect our app to mongodb in this file.
// example of connection - we are using mongoose package.
// mongoose.connect(process.env.DB_HOST, () => {
//     console.log('Connecting to the mongodb database!');
// });

// creating our express app.
const app = express();


// --------------------- WEBPACK CONFIGURATION ------------------ //
// middleware used for webpack
const compiler = webpack(webpackConfig);
// webpackMiddleware takes a webpack compiler - we use here our webpackConfig
// this will connect our webpack into the instance running server.
app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));


// --------------------- EXPRESS CONFIGURAION ------------------ //
// this will parse all the json that comes in to an javascript object.
app.use(bodyParser.json());
// middleware for our routes
app.use('/api', router);

// if the client will request a page, we want our server will send the index.html for a response
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

export default app;
