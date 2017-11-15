<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import TaskBar from '@/components/TaskBar'
  import JWTStorage from '@/utils/auth'
  export default {
    name: 'file-uploader',
    methods: {
      login: function() {
        this.$router.push({
          path: '/login'
        })
      },
      checkAuth: function() {
        if (!this.isLogin) {
          this.login();
        }
      }
    },
    created: function() {
      this.checkAuth();
    },
    computed: {
      isLogin() {
        return this.$store.getters.isLogin;
      }
    },
    components: {TaskBar}
  }
</script>

<style>
  /* CSS */
  html {
    min-height: 100%;
    height: 100%;
  }
  body{
    min-height: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  #app {
    height: 100%;
    position: relative;
  }
</style>
