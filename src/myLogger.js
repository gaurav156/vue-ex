export default {

    install(Vue, options) {
       function log(type, title, text) {
         console.log(`[${type}] ${title} - ${text}`);
       }
  
       Vue.prototype.$log = {
         error(title, text) { log('danger', title, text) },
         success(title, text) { log('success', title, text) },
         log
       }
    }
  }