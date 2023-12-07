/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * @param {{[key: string]: unknown}} config
   * @param {{isDev: boolean; isServer: boolean;}} options
   */

  webpack(config) {
    
    config.module.rules.push({
      test: /\.riv$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'static/media',
            publicPath: '/_next/static/media',
            esModule: false,
          },
        }
      ],
    })

    return config
  }
}

module.exports = nextConfig

const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
