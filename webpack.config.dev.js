import path from 'path';
import webpack from 'webpack';

export default {
    // we can use source map for debugging.
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js')],
    output: {
        // middleware will serve this file in memory instead of creating the actual bundle file.
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(), // to display the error in nice information.
        new webpack.optimize.OccurrenceOrderPlugin(), // for consistent build hashes
        new webpack.HotModuleReplacementPlugin() // to use the hot reloading features.
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: ['react-hot-loader', 'babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
    },
};

