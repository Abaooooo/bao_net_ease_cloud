<template>
  <div class="login_box">
    <div class="logo">
      <img src="@/assets/logo.jpeg" alt="" />
    </div>
    <div class="handle">
      <van-button @click="handleLogin">手机号登录</van-button>
      <div class="other">
        <i class="iconfont icon-weixin"></i>
        <i class="iconfont icon-qq"></i>
        <i class="iconfont icon-weibo"></i>
        <i class="iconfont icon-bili"></i>
      </div>
    </div>
    <div class="accept">
      <input type="checkbox" v-model="checked" />
      <span>同意</span>
      <a href="javascript:;">《用户协议》</a>
      <a href="javascript:;">《隐私政策》</a>
      <a href="javascript:;">《儿童隐私政策》</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    handleLogin() {
      if (this.checked) {
        this.$router.push("/loginPhone");
        return;
      }
      alert("please check the list");
    },
  },
};
</script>

<style lang="less">
@themeColor: #da2d1f;
.login_box {
  width: 100%;
  height: 667px;
  overflow: hidden;
  background-color: @themeColor;
  .logo {
    margin-bottom: 218px;
    img {
      width: 100%;
      display: block;
    }
  }
  .handle {
    width: 100%;
    margin-top: 88px;
    padding: 0 28px;
    color: @themeColor;
    button {
      height: 40px;
      width: 100%;
      border-radius: 20px;
      line-height: 40px;
      color: @themeColor;
    }
    .other {
      width: 100%;
      padding: 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      i {
        color: #fff;
        font-size: 20px;
        &:nth-child(4) {
          font-size: 22px;
        }
      }
    }
  }
  .accept {
    height: 30px;
    line-height: 20px;
    font-size: 8px;
    input {
      border: 1px solid pink;
      margin-right: 2px;
    }
    span {
      color: pink;
    }
    a {
      color: #fff;
    }
  }
}
</style>