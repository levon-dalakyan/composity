import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: {
        index: "src/index.js",
        fp: "src/fp/index.js",
        methods: "src/fp/methods/index.js",
        containers: "src/fp/containers/index.js",
        iterators: "src/iterators/index.js",
        sync: "src/iterators/sync/index.js",
        async: "src/iterators/async/index.js",
        lens: "src/lens/index.js",
    },
    output: [
        {
            dir: "dist",
            format: "es",
            preserveModules: true,
            preserveModulesRoot: "src",
            entryFileNames: "[name].js",
        },
        {
            dir: "dist",
            format: "cjs",
            preserveModules: true,
            preserveModulesRoot: "src",
            entryFileNames: "[name].cjs",
        },
    ],
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
};
