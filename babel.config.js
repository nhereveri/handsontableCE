module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          browsers: [
            'chrome >= 94',
            'edge >= 94',
            'firefox >= 93',
            'ios_saf >= 14.5',
            'safari >= 14.1',
            'android >= 10',
            'firefox esr'
          ]
        },
        exclude: [
          'transform-regenerator',
          'es6.typed.array-buffer',
          'es6.typed.data-view',
          'es6.typed.int8-array',
          'es6.typed.uint8-array',
          'es6.typed.uint8-clamped-array',
          'es6.typed.int16-array',
          'es6.typed.uint16-array',
          'es6.typed.int32-array',
          'es6.typed.uint32-array',
          'es6.typed.float32-array',
          'es6.typed.float64-array',
          'es6.reflect.apply',
          'es6.reflect.construct',
          'es6.reflect.define-property',
          'es6.reflect.delete-property',
          'es6.reflect.get',
          'es6.reflect.get-own-property-descriptor',
          'es6.reflect.get-prototype-of',
          'es6.reflect.has',
          'es6.reflect.is-extensible',
          'es6.reflect.own-keys',
          'es6.reflect.prevent-extensions',
          'es6.reflect.set',
          'es6.reflect.set-prototype-of',
          'es6.math.acosh',
          'es6.math.acosh',
          'es6.math.asinh',
          'es6.math.atanh',
          'es6.math.cbrt',
          'es6.math.clz32',
          'es6.math.cosh',
          'es6.math.expm1',
          'es6.math.fround',
          'es6.math.hypot',
          'es6.math.imul',
          'es6.math.log1p',
          'es6.math.log10',
          'es6.math.log2',
          'es6.math.sign',
          'es6.math.sinh',
          'es6.math.tanh',
          'es6.math.tanh',
          'es6.math.trunc',
          'web.timers'
        ],
        modules: false,
        debug: false,
        useBuiltIns: 'entry'
      }]
  ],
  plugins: [
    ['@babel/plugin-proposal-object-rest-spread', {useBuiltIns: true}],
    ['transform-inline-environment-variables']
  ],
  env: {
    commonjs: {
      plugins: [
        ['@babel/plugin-transform-modules-commonjs', {loose: true}]
      ]
    },
    commonjs_dist: {
      plugins: [
        ['@babel/plugin-transform-modules-commonjs', {loose: true}],
        ['babel-plugin-transform-require-ignore', {extensions: ['.css']}]
      ]
    },
    commonjs_e2e: {
      presets: [
        [
          '@babel/preset-env', {
            targets: {
              chrome: '41',
              firefox: '34',
              ie: '9',
              safari: '9',
              browsers: ['last 3 versions']
            },
            exclude: [
              'transform-regenerator',
              'es6.typed.array-buffer',
              'es6.typed.data-view',
              'es6.typed.int8-array',
              'es6.typed.uint8-array',
              'es6.typed.uint8-clamped-array',
              'es6.typed.int16-array',
              'es6.typed.uint16-array',
              'es6.typed.int32-array',
              'es6.typed.uint32-array',
              'es6.typed.float32-array',
              'es6.typed.float64-array',
              'es6.reflect.apply',
              'es6.reflect.construct',
              'es6.reflect.define-property',
              'es6.reflect.delete-property',
              'es6.reflect.get',
              'es6.reflect.get-own-property-descriptor',
              'es6.reflect.get-prototype-of',
              'es6.reflect.has',
              'es6.reflect.is-extensible',
              'es6.reflect.own-keys',
              'es6.reflect.prevent-extensions',
              'es6.reflect.set',
              'es6.reflect.set-prototype-of',
              'es6.math.acosh',
              'es6.math.acosh',
              'es6.math.asinh',
              'es6.math.atanh',
              'es6.math.cbrt',
              'es6.math.clz32',
              'es6.math.cosh',
              'es6.math.expm1',
              'es6.math.fround',
              'es6.math.hypot',
              'es6.math.imul',
              'es6.math.log1p',
              'es6.math.log10',
              'es6.math.log2',
              'es6.math.sign',
              'es6.math.sinh',
              'es6.math.tanh',
              'es6.math.tanh',
              'es6.math.trunc',
              'web.timers'
            ],
            modules: false,
            debug: false,
            useBuiltIns: 'entry'
          }]
      ],
      plugins: [
        ['@babel/plugin-transform-modules-commonjs', {loose: true}],
        [
          'babel-plugin-forbidden-imports', {
            allowedModules: [
              '@babel/polyfill/*',
              'window',
              'jasmine-co',
              'core-js/*',
              'regenerator-runtime/runtime',
              './common',
              './../bootstrap',
              './helpers/custom-matchers',
              './asciiTable',
              './MemoryLeakTest',
              '../MemoryLeakTest'
            ]
          }]
      ]
    },
    es: {
      plugins: [
        ['babel-plugin-transform-require-ignore', {extensions: ['.css']}]
      ]
    }
  },

  ignore: [
    'src/3rdparty/walkontable/dist/*',
    'src/3rdparty/walkontable/test/dist/*'
  ]
};
