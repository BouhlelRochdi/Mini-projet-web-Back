export const environment = {
    production: false,
    baseUrl: 'http://localhost:4200/',
    apiPort: 3333,
    apiUrl: 'https://localhost:3333/',

    // DB
    mongoUri: 'mongodb://localhost/mini_prj_web',

    // JWT
    jwtSecret: 'miniprj-nest-local-secretKey-001',

    //mailer module config -- by app GR-G-2
    MAILER_SENDER_MAIL: 'rochdi.bouhlel@tomorrow-soft.com',
    MAILER_SENDER_PASS: 'Badalni1234',
    MAILER_HOST_SERVER: 'ssl0.ovh.net',
    MAILER_PORT: 587,
    MAILER_TLS_CIPHERS: 'SSLv3'
  };
  