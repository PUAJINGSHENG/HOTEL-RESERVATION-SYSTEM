module.exports = {
    clearMocks: true,
    moduleFileExtensions: ['php', 'file'],
    testMatch: ['**/*.php'],
    transform: {
      '^.+\\.php$': 'file-php'
    },
    verbose: true,
    modulePaths: [
      "<rootDir>/src/"
    ],
  }
