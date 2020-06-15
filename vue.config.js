
module.exports = {
    configureWebpack: {
        optimization: {
            minimize: false
        },
        resolve: {
            alias: {
                'cldr$': 'cldrjs',
                'cldr': 'cldrjs/dist/cldr',
                'globalize': 'globalize/dist/globalize',
                'globalize/currency': 'globalize/dist/globalize/currency.js',
                'globalize/date': 'globalize/dist/globalize/date.js',
                'globalize/message': 'globalize/dist/globalize/message.js',
                'globalize/number': 'globalize/dist/globalize/number.js'
            },
            //enforceExtension: true, 
            extensions: ['.wasm', '.mjs', '.js','.vue', '.json']
        },

    },
    publicPath: './'

}   
