<script>
import lazyLoad from './lazyLoad.vue';

export default {
  data() {
    return {
      ad: {}
    }
  },
  created() {
    lazyLoad.getAd().then(ad => {
      this.ad = ad;
    });
  }
}
</script>
