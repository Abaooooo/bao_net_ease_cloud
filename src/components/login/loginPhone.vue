<template>
  <div class="loginPhone_box">
    <h3 class="header"><van-icon name="cross" @click="cancel" />手机号登录</h3>
    <keep-alive>
      <router-view :time="time" @changeTime="changeTime"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "loginPhone_box",
  data() {
    return {
      time: 0,
      timer: null,
    };
  },
  methods: {
    cancel() {
      this.$router.replace("/login");
    },
    changeTime() {
      this.time = 60000;
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.time > 0) {
          this.time -= 1000;
          return;
        }
        clearInterval(this.timer);
        this.timer = null;
        this.time = 0;
      }, 1000);
    },
  },
};
</script>

<style lang="less">
.loginPhone_box {
  width: 100%;
  margin: 16px;
  p ,a{
    font-size: 14px;
    font-weight: 100;
    color: #999;
  }
  .header {
    margin-bottom: 50px;
    height: 30px;
    line-height: 30px;
    text-align-last: left;
    font-size: 20px;
    font-weight: 600;
    .van-icon-cross {
      margin-right: 6px;
    }
    h3 {
      font-size: 20px;
      font-weight: 400;
    }
  }
}
</style>