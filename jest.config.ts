import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // Diğer jest yapılandırma ayarlarınızı buraya ekleyin
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.p?css$',
    '\\.png$' // PNG dosyalarını işlemeyin
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/fileMock.js',
  }
};

export default config;