
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    // le estoy diciendo de donde tomar el archivo que va a leer, a la vez index.js esta usando los demás archivos js
    // cuales son Store, UI, Weather
    entry: './src/app/index.js',
    // estoy creando una carpeta en el cual estara el archivo final ya
    // comprimido con los otros archivos que leyo y el archivo generado se guarda
    // en la carpeta generada dist y el nombre del archivo le pusimos bundle.js
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // configuro el puerto que va a tener mi server de desarrollo
    devServer: {
        port: 3000
    },
    // defino las reglas de mi webpack
    module: {
        // arreglo de multiples configuraciones
        rules: [
            {
                // me sirve para poder leer los css de mi proyecto
                test: /\.css$/,
                // me permite llamar el css en los js
                use: ['style-loader', 'css-loader']

            }
        ]
    },
    plugins: [
        // me permite copiar un html a otro directorio
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};