import typescript from "@rollup/plugin-typescript";

export default [
    {
        input: "src/striptags.ts",
        output: [
            {
                format: "es",
                dir: "dist/es6",
            },
        ],
        plugins: [
            typescript({ declaration: true, declarationDir: "dist/es6", outDir: "dist/es6" }),
        ],
    },
    {
        input: "src/striptags.ts",
        output: [
            {
                format: "cjs",
                dir: "dist/cjs",
                entryFileNames: "[name].cjs",
                exports: "auto", // Allow default & named exports in CommonJS
            },
        ],
        plugins: [typescript()],
    },
];
