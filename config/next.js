module.exports.next = {
  // Sails integration options
  api: {
    // Prefix for all Sails API routes
    prefix: '/api',
    // Controller used for Next.js SSR
    controller: 'NextController.index'
  },

  // Next.js instance options. Passed to `next()`.
  server: {
    // Next.js root directory
    dir: '.',
    // Dev mode. Is overridden by `process.env.NODE_ENV !== 'production'`
    dev: false,
    // Hide error messages
    quiet: false
  },
}