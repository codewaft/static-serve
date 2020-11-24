module.exports = {
  apps: [
    {
      name: 'static-serve',
      script: 'app.js',
      node_args: '-r dotenv/config',
      max_memory_restart: '256M',
      autorestart: true
    }
  ]
}