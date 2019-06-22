import Vue from 'vue';

const yangenak = () => {
  console.log('Ini enak lhooo');
};

const Plugin = {
  install(Vue) {
    Vue.yangenak = yangenak;
    window.yangenak = yangenak;
    Object.defineProperties(Vue.prototype, {
      yangenak: {
        get() {
          return yangenak;
        }
      },
      $yangenak: {
        get() {
          return yangenak;
        }
      },
    });
  }
}

Vue.use(Plugin)

export default Plugin;
