module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path:__dirname + "/dist"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extentions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules : [
            // All files with a '.ts' or '.tsx' estension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            // All output '.js' files will have any sourcemap re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }    
        ]   
    },

    /*
    externals: {
        "react" : "React",
        "react-dom": "ReactDOM"
    },
    */
}