//百分之九十都是webpack的配置
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'networks': '@/networks',
                'views':'@/views',
            }
            }
        }
          

    }

