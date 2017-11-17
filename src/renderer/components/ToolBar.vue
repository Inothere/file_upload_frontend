<template>
  <div class="primary-bar">
    <div class="logo">
      CD
    </div>
    <div class="op-area">
      <div class="op-item">
        <Tooltip content="登出">
          <div class="icon-btn" @click="logout()"><i class="fa fa-sign-out"></i></div>
        </Tooltip>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ToolBar',
  methods: {
    logout() {
      this.$store.dispatch('logout').then(()=>{
        this.$router.push({path: '/login'});
      });
    }
  }
}
</script>
<style scoped>
  @import '~@/assets/css/main.css';
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
    background: linear-gradient(to top right, #333, #666);
    font-size: 16px;
    color: white;
    opacity: .5;
  }
  .op-area {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    font-size: 16px;
    height: 100%;
  }
  .op-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
  }
</style>
