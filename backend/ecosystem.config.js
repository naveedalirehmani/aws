module.exports = {
    apps: [
      {
        name: 'bookings-backend',
        script: 'node_modules/.bin/ts-node',
        args: 'index.ts',
        // watch: true,
        ignore_watch: ['node_modules', 'logs', 'public', 'other-directories-to-ignore'],
        exec_mode: 'fork',
        instances: 1,
        autorestart: true,
        max_memory_restart: '512M',
      },
    ],
    };
  