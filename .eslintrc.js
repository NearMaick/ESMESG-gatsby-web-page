module.exports = {
  env: {
    es6: true
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    __PATH_PREFIX__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "jsx-a11y", "import", "react-hooks", "prettier"],
    rules: {
    "strict": 0,
    "react/jsx-props-no-spreading": "off",
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
  },
}
