export default {

  install(app, options) {
    app.config.globalProperties.$reverse = (str) => {
        return str.split('').reverse().join('')
      }
  }
};