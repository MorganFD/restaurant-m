<template>
  <div class="loading">
    <div class="loading-pic">
      <img src="../../assets/imgs/loading.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.loading{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.loading-pic{
  width:.6rem;
  height:.6rem;
  position: absolute;
  top: 2rem;
  left: 45%;
  animation: scaleLoading 1s linear infinite;
}
.loading img{
    width:100%;
    height:100%;
    /* transform: translate(-50%, 0); */
    animation: bounceLoading 1s linear infinite;
}
@keyframes scaleLoading {
  0% {
    transform: scale(1,1);
  }
  50% {
    transform: scale(2,2);
  }
  100% {
    transform: scale(1,1);
  }
}
@keyframes bounceLoading {
  0% {
    transform: translateY(.6rem);
  }
  50% {
    transform: translateY(.3rem);
  }
  100% {
    transform: translateY(0rem);
  }
}
</style>
