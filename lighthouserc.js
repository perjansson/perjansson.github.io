module.exports = {
  ci: {
    collect: {
      staticDistDir: './build',
      url: ['http://localhost:5000'],
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 1 }],
        'categories:accessibility': ['error', { minScore: 1 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
