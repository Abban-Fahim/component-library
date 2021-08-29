import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import peerDependancies from "rollup-plugin-peer-deps-external";
import commonJS from "@rollup/plugin-commonjs";

const packageJson = require("./package.json");

export default {
  input: "./index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    peerDependancies(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    commonJS(),
    resolve(),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
  ],
};
