import postcssPxToRem from "postcss-pxtorem";
import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    postcssPxToRem({
      propList: ["*"],
      mediaQuery: true,
      rootValue: 16,
    }),
    postcssPresetEnv({
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};
