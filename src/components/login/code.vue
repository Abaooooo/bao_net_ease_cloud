<template>
  <div class="login_code_box">
    <div class="header">
      <h3>请输入验证码</h3>
      <p>
        已发送至+{{ $store.state.loginModule.userPhone.ctcode }}
        {{ $store.state.loginModule.userPhone.phone }}
        <van-icon name="edit" @click="back" />
        <span class="time" @click="resent" ref="code">{{
          time > 0 ? time / 1000 + "s" : "重新发送"
        }}</span>
      </p>
    </div>
    <div class="content">
      <van-password-input
        length="4"
        :value="code"
        v-model="code"
        :error-info="errorInfo.length > 0 ? errorInfo : ''"
        :mask="false"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />
      <van-number-keyboard
        v-model="code"
        :show="showKeyboard"
        @blur="showKeyboard = false"
      />
    </div>
    <a href="javascript:;" class="unuse">手机号已停用 ></a>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "login_code",
  data() {
    return {
      code: "",
      errorInfo: "",
      showKeyboard: true,
      flag: false,
    };
  },
  props: ["time"],
  methods: {
    back() {
      this.$router.back();
    },
    async resent() {
      if (this.$refs.code.textContent === "重新发送") {
        let res = await this.$api.sentCode(
          this.$store.state.loginModule.userPhone
        );
        if (res.data) {
          if (this.flag) return;
          this.flag = true;
          this.$emit("changeTime");
        }
      }
    },
    async checkCode() {
      let codeMsg = {
        phone: this.$store.state.loginModule.userPhone,
        code: this.code,
      };
      let res = await this.$api.checkCode(codeMsg);
      console.log(res);
      if (parseInt(res.code) === 400) {
        this.errorInfo = "code error, please check the code !";
        return;
      }
      this.checkPhone();
    },
    async checkPhone() {
      let phoneMsg = {
        phone: this.loginModule.userPhone.phone,
        captcha: this.code,
      };
      let res = await this.$api.checkPhone(phoneMsg);
      console.log(res);
    },
  },
  computed: {
    ...mapState(["loginModule"]),
  },
  watch: {
    time(val) {
      if (val <= 0) {
        this.flag = false;
      }
    },
    code(val) {
      if (val.length >= 4) {
        this.checkCode();
      }
    },
  },
  created() {
    if (!this.$store.state.loginModule.userPhone.phone) {
      this.$router.replace("/login");
    }
  },
};
</script>

<style lang="less">
.login_code_box {
  .van-password-input {
    margin-top: 20px;
    width: 320px;
  }
  .time {
    position: absolute;
    right: 28px;
  }
  .unuse {
    display: inline-block;
    margin-top: 20px;
  }
}
</style>