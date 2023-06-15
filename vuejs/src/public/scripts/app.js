import loginIn from "../../components/loginIn.vue";
import lazyLoad from "../../components/lazyLoad.vue";

export default {
  name: "App",
  components: {
    loginIn,
    lazyLoad,
  },
  data() {
    return {
      showComponent: false,
    };
  },
  methods: {
    loginIn() {
      this.showComponent = true;
    },
  },
};