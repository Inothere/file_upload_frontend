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
        var self = this,
          jwt = JWTStorage.JWT;
        if (!jwt) {
          self.login()
          return
        }
        self.axios({
          method: 'POST',
          url: 'http://127.0.0.1:5000/api/v1/check_auth',
          headers: {
            'Authorization': JWTStorage.prefix + ' ' + JWTStorage.JWT
          }
        }).then(function(resp){
          console.log('ok')
          self.$router.push({
            path: '/'
          })
        }, function(resp) {
          console.log('error')
          self.login()
        })
      }
    },
    created: function() {
      this.checkAuth();
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
