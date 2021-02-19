<template>
  <div class="login_phone_box">
    <div class="header">
      <h3>登录体验更多精彩</h3>
      <p>未注册手机号登录后讲自动创建账号</p>
    </div>
    <div class="phone">
      <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="地区"
        placeholder="请选择所在地区"
        @click="show = true"
      />
      <van-popup v-model="show" round position="bottom">
        <van-cascader
          v-model="cascaderValue"
          title="请选择所在地区"
          :options="options"
          @close="show = false"
          @finish="onFinish"
        />
      </van-popup>
      <van-field v-model="phone" type="tel" placeholder="请输入手机号" />
      <van-button class="next" @click="sentCode">下一步</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login_phone",
  data() {
    return {
      phone: "",
      flag: false,
      show: false,
      fieldValue: "+86",
      cascaderValue: "86",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "中国",
          value: "86",
        },
        {
          text: "中国香港",
          value: "852",
        },
        {
          text: "中国澳门",
          value: "853",
        },
        {
          text: "中国台湾",
          value: "886",
        },
      ],
    };
  },
  props: ["time"],
  methods: {
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = "+" + this.cascaderValue;
    },
    async sentCode() {
      let userPhone = {
        phone: this.phone,
        ctcode: this.cascaderValue,
      };
      let res = await this.$api.sentCode(userPhone);
      if (res.data) {
        if (this.flag) return;
        this.flag = true;
        this.$emit("changeTime");
        this.$store.commit("loginModule/CHANGE_USERPHONE", userPhone);
        this.$router.push("/loginPhone/code");
        return;
      }
      alert("please check your number");
    },
  },
  watch: {
    time(val) {
      if (val <= 0) {
        this.flag = false;
      }
    },
  },
};
</script>

<style lang="less">
.login_phone_box {
  width: 100%;
  text-align-last: left;

  .phone {
    width: 100%;
    .van-field {
      width: 350px;
    }
  }
  .next {
    margin-top: 28px;
    width: 350px;
    height: 40px;
    border-radius: 20px;
    border: none;
    background: #da2d1f;
    color: #fff;
  }
}
</style>