module.exports = {
  apps: [{
    name: 'sffrilt',
    script: '.output/server/index.mjs',
    cwd: '/var/www/sffrilt.ru/repo',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
  }],
};
