import postcssPresetEnv from 'postcss-preset-env'
import postcssPxToRem from 'postcss-pxtorem'

export default {
  plugins: [
    postcssPxToRem({
      propList: ['*'],
      mediaQuery: true,
      rootValue: 16,
    }),
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
  ],
}
