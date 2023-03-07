export const environment = {
    production: true,
    locales: [
      'en'
    ],
    localeDefault: 'en',
    apiServer: {
      ssl: true,
      host: 'api.coingecko.com/api/v3/',
      port: '',
      url: 'https://api.coingecko.com/api/v3/',
      paths: {
        home: {
          list: 'test'
        }
      }
    }
  };