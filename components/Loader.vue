<template>
  <div class="loader">
    loading
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.loader,
.loader:after {
  overflow:hidden;
  border-radius: 25%;
  width: 3em;
  height: 3em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid scotch-color($theme-light,'success');
  border-right: 1.1em solid scotch-color($theme-light,'success');
  border-bottom: 1.1em solid scotch-color($theme-light,'success');
  border-left: 1.1em solid scotch-color($theme-light,'success');
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 10s infinite linear;
  animation: load8 5s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
