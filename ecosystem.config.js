module.exports = {
  apps: [
    {
      name: 'reverse-proxy',
      script: 'app.js',
      node_args: '-r dotenv/config',
      max_memory_restart: '256M',
      autorestart: true
    }
  ]
}