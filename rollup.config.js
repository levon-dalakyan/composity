import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: "src/index.js",
    output: {
        dir: "dist",
        format: "es",
        preserveModules: true,
        preserveModulesRoot: "src",
    },
    plugins: [
        resolve({
            extensions: [".js"],
            preferBuiltins: true,
        }),
        babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
        }),
        commonjs(),
    ],
    external: [],
};
