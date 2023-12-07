const config = {
    api: process.env.NEXT_PUBLIC_API,
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    loginMode: process.env.NEXT_PUBLIC_LOGIN_MODE,
    // currencyRequired: process.env.NEXT_PUBLIC_CURRENCY_REQUIRED,
    dateISO: process.env.NEXT_PUBLIC_DATE_ISO,
    baseDomainJava: process.env.NEXT_PUBLIC_BASE_DOMAIN_JAVA,
    remoteAssetsHost: process.env.NEXT_PUBLIC_REMOTE_ASSETS_HOST,
    staticAssetsHost: process.env.NEXT_PUBLIC_STATIC_ASSETS_HOST,
    demo: {
      username: process.env.NEXT_PUBLIC_DEMO_USERNAME,
      password: process.env.NEXT_PUBLIC_DEMO_PASSWORD
    }
  }
  
  const generateApiUrlBasedOnEnvironment = () => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV == 'production') {
      const { protocol, hostname } = window.location
  
      if (config.api?.startsWith('*.')) { // 使用范域名 API
        const api = config.api.slice(2)
        if (config.baseDomainJava && hostname.includes(config.baseDomainJava)) { // 使用通用域名
          const siteName = hostname.split('.')[0]
          config.api = siteName ? `${protocol}//${siteName}.api.${api}/api` : ''
        } else { // 使用自定义域名
          const parts = hostname.split('.')
          if (parts.length >= 3) parts.shift()
        
          config.api = `${protocol}//${parts.join('-')}.api.${api}/api`    
        }  
      }
    }
  }
  
  generateApiUrlBasedOnEnvironment()
  
  export default config