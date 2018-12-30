module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/sass/main.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.module.rules.delete("eslint");
  }
};
