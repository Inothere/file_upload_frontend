<template>
  <div class="task-bar">
    <button @click="minimize()">
      <i class="fa fa-window-minimize"></i>
    </button>
    <button @click="maximize()">
      <i v-if="isMaximized" class="fa fa-window-restore"></i>
      <i v-if="!isMaximized" class="fa fa-window-maximize"></i>
    </button>
    <button @click="close()">
      <i class="fa fa-remove"></i>
    </button>
  </div>
</template>
<script>
import {remote} from 'electron'
export default {
  name: 'TaskBar',
  data: function () {
    return {
      isMaximized: false
    }
  },
  created: function () {
    let win = remote.getCurrentWindow();
    this.isMaximized = win.isMaximized;
    window.addEventListener('resize', this.onWindowResize);
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize: function() {
      let win = remote.getCurrentWindow();
      this.isMaximized = win.isMaximized();
    },
    close: function() {
      let win = remote.getCurrentWindow();
      win.close();
    },
    maximize: function() {
      let win = remote.getCurrentWindow();
      if (win.isMaximized()) {
        win.unmaximize();
      } else {
        win.maximize();
      }
    },
    minimize: function() {
      let win = remote.getCurrentWindow();
      win.minimize();
    }
  }
}
</script>

<style scoped>
  .task-bar {
    width: 100%;
    display: flex;
    padding: 0;
    justify-content: flex-end;
    -webkit-app-region: drag;
    -webkit-user-select: none;
    background: rgba(16, 16, 16, .8)
  }
  button {
    background: none;
    color: white;
    -webkit-app-region: no-drag;
    border: none;
    min-height: 24px;
    min-width: 24px;
  }
  button:focus {
    outline: none;
  }
  button:hover {
    background: rgba(16, 16, 16, .3)
  }
</style>
