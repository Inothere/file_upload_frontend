<template>
  <div class="scrollable">
    <Row type="flex" justify="center" align="middle">
      <Card class="login-panel">
        <Form ref="loginForm" :model="account" :rules="rules"  label-position="top">
          <FormItem label="用户" prop="username">
            <Input v-model="account.username" placeholder="用户名"></Input>
          </FormItem>
          <FormItem label="密码" prop="password">
            <Input v-model="account.password" placeholder="密码" type="password"></Input>
          </FormItem>
          <FormItem label="所在域" prop="region">
            <Select v-model="account.region">
              <Option v-for="region in regions" :value="region" :key="region">{{ region }}</Option>
            </Select>
          </FormItem>
          <Row>
            <Button type="success" @click="handleSubmit('loginForm')" long>登录</Button>
          </Row>
          <div v-if="loginMsg" style="color:red;">{{loginMsg}}</div>
        </Form>
      </Card>
    </Row>
  </div>
</template>
<script>
  import JWTStorage from '@/utils/auth'
  export default {
    name: 'login',
    data () {
      return {
        account: {
          username: '',
          password: '',
          region: ''
        },
        loginMsg: '',
        regions: [
          'CN1',
          'CN2',
          'CN3'
        ],
        rules: {
          username: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }],
          region: [{
            required: true,
            message: '请选择所在域',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      login: function() {
        let self = this;
        this.axios({
          method: 'POST',
          url: 'http://127.0.0.1:5000/login',
          data: {
            username: self.account.username,
            password: self.account.password,
            region: self.account.region
          },
          headers: {
            'Content-type': 'application/json'
          }
        }).then((resp)=>{
          self.loginMsg = '';
          JWTStorage.setJWT(resp.data.access_token);
          self.$router.push({
            path: '/'
          })
        }, (resp)=>{
          self.loginMsg = '登录失败，用户名或密码错误'
        });
      },
      handleSubmit: function(name) {
        let self = this;
        this.$refs[name].validate((valid) => {
          if (valid) {
            self.login();
          }
        })
      }
    },
    created: function() {
      
    }
  }
</script>

<style>
  .scrollable {
    overflow: auto;
    height: 100%;
  }
  .login-panel {
    width: 40%;
    height: 50%;
    margin-top: 5em;
  }
</style>
