module.exports = {
  type: "react-app",
  babel: {
    stage: 1,
    plugins: [["babel-plugin-root-import", { rootPathSuffix: "src" }]]
  }
};
