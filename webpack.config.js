module.exports = {
    entry: ["./src/App.jsx"], // Allow an entry point at `src/App.jsx`.
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // For any `.js` or `.jsx` file,
                exclude: /node_modules/, // Excluding the node_modules folder,
                use: {
                    loader: "babel-loader", // Use ES6/ES7 features.
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    output: {
        path: __dirname + "/static", // Bundle everything into `lets-lunch/static/`
        filename: "bundle.js" // Under a file called `lets-lunch/static/bundle.js`.
    }
};
