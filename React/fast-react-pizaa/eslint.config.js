import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
module.exports = {
  // ... other config options ...
  rules: {
    "no-unused-vars": "warn",
    "react/no-unescaped-entities": "off",
  },
};