module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:8989/api',
                ws:true,
                changeOrigin: true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}