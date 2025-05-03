module.exports = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/test-setup.js'],  // o el path relativo
    testTimeout: 30000  // por si necesitas más tiempo para conectar a Mongo
  };