import { environment } from "src/environment/environment";

export default () => ({
    production: process.env.production || environment.production,
    baseUrl: process.env.baseUrl || environment.baseUrl,
    apiPort: parseInt(process.env.PORT, 10) || environment.apiPort,
    apiUrl: process.env.apiUrl || environment.apiUrl,
    
    // DB
    mongoUri: process.env.mongoUri || environment.mongoUri,
    
    // JWT
    jwtSecret: process.env.jwtSecret || environment.jwtSecret,
    
    // Mailer config
    MAILER_SENDER_MAIL: process.env.MAILER_SENDER_MAIL || environment.MAILER_SENDER_MAIL,
    MAILER_SENDER_PASS: process.env.MAILER_SENDER_PASS || environment.MAILER_SENDER_PASS,
    MAILER_HOST_SERVER: process.env.MAILER_HOST_SERVER || environment.MAILER_HOST_SERVER,
    MAILER_PORT: process.env.MAILER_PORT || environment.MAILER_PORT,
    MAILER_TLS_CIPHERS: process.env.MAILER_TLS_CIPHERS || environment.MAILER_TLS_CIPHERS,
});
