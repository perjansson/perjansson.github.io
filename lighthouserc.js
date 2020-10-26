module.exports = {
  ci: {
    collect: {
      staticDistDir: './build',
      url: ['http://localhost:5000'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
