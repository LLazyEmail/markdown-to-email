// import serve from "rollup-plugin-serve";
// import livereload from "rollup-plugin-livereload";

import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
// import notify from "rollup-plugin-notify";
import pkg from "./package.json";


// not all files you want to resolve are .js files
const extensions = [
  ".js",
  //".json"
];

const name = "newsletterMiscComponents";

// or  [...Object.keys(pkg.dependencies), 'fs', 'path', 'os', 'util', 'url']
const external = [
    // "fs", "path", "uuid"
];

// list of plugins used during building process
const plugins = () => [

      nodeResolve({
        extensions,

        // the fields to scan in a package.json to determine the entry point
        // if this list contains "browser", overrides specified in "pkg.browser"
        // will be used
        // mainFields: ["module", "main", "browser"] // Default: ['module', 'main']
    }),

    // replace({
    //   'process.env.NODE_ENV': JSON.stringify( 'development' )
    // }),

    //When using @rollup/plugin-babel with 
    //@rollup/plugin-commonjs in the same 
    //Rollup configuration, it's important to note that @rollup/plugin-commonjs must be placed before this plugin in the plugins array for the two to work together properly.
    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs({
        // ignore: ["conditional-runtime-dependency"]
    }),
     babel({
      presets: ["@babel/preset-react"],
    }),
    // serve({
    //   open: true,
    //   verbose: true,
    //   contentBase: ["", "public"],
    //   host: "localhost",
    //   port: 3000,
    // }),
    // livereload({ watch: "dist" }),
    // notify(),
    // globals(),
    // builtins()
]

export default {
  // source file / entrypoint
  input: "src/index.js",

  //   external,
  plugins: plugins(),
  // output configuration
  output: {
    // output file location
    file: pkg.browser,  
    // file: "dist/bundle.js",
    // format of generated JS file, also: esm, and others are available 
    format: "iife",
    // name visible for other scripts
    name,
    sourcemap: true,
  },

};