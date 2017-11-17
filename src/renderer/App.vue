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
  @import '~@/assets/css/main.css' /* ~ 符号告诉webpack, @ 符号代表一个模块（即 alias）, 不加的话，将会作为普通css语句处理，导致错误*/
</style>
