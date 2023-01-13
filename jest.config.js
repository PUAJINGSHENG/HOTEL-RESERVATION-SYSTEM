module.exports = {
    clearMocks: true,
    moduleFileExtensions: ['js', 'file'],
    testMatch: ['**/*.js'],
    transform: {
      '^.+\\.js$': 'file-js'
    },
    verbose: true,
    modulePaths: [
      "<rootDir>/src/"
    ],
  }
