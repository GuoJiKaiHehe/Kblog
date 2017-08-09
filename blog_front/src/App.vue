<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view>
      </router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">

body{
  
}

.clear:after{
  clear:both;
  content:" ";
  display: block;
}
.clear{
  zoom:1;
}

ul{
  padding:0;
  margin:0;
  li{
    margin:0;
  }
}

html,body,#app{
  width: 100%;
  height:100%;
  padding:0;
  margin:0;
}

.fade-enter-active,.fade-leave-active{
  transition: all 0.2s ease-out;
  opacity: 1
}
.fade-enter,.fade.leave-to{
    opacity: 0;
}

.fl{
  float:left;
}
.fr{
  float:right;
}


/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 */
</style>
