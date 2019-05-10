module.exports = {
  rootDir: '.',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)sx?$',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(jpg|svg|jpeg|png|pdf|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test/fileMock.js',
  },
  collectCoverage: false,
  coverageReporters: ['lcov', 'json', 'clover'],
  coverageDirectory: '<rootDir>/coverage',
  verbose: true,
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/*.container.{js,jsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/src/actions/', '<rootDir>/node_modules/'],
};
