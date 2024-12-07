export default {
    displayName: 'event',
    preset: '../../../../jest.preset.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }]
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: '../../../../coverage/libs/backend/domain/event',
    passWithNoTests: true,
    setupFilesAfterEnv: ['jest-extended']
};
