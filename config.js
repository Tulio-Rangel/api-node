module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "notasecret!",
  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
  mysql: {
    host: process.env.MYSQL_HOST || "remotemysql.com",
    user: process.env.MYSQL_USER || "vyU7DCqzKX",
    password: process.env.MYSQL_PASS || "hQ8gtxIQ9o",
    database: process.env.MYSQL_DB || "vyU7DCqzKX",
  },
  mysqlService: {
    port: process.env.MYSQL_SRV_PORT || 3001,
    host: process.env.MYSQL_SRV_HOST || "localhost",
  },
};
