module.exports = {
    entry: {
        model: './dist/app/js/webpack/load_models.js',
        collection: './dist/app/js/webpack/load_collections.js',
        view: './dist/app/js/webpack/load_views.js',
        conn: './dist/app/js/webpack/load_connection.js'
    },
    output: {
        filename: 'app/js/webpack/[name].js',       
        library: "[name]"
    }
    
}