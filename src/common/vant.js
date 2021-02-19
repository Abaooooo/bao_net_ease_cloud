import Vue from "vue";
import {
  Button,
  Checkbox,
  Icon,
  Cascader,
  Popup,
  Field,
  PasswordInput,
  NumberKeyboard,
} from "vant";

[
  Button,
  Checkbox,
  Icon,
  Cascader,
  Popup,
  Field,
  PasswordInput,
  NumberKeyboard,
].forEach((item) => {
  Vue.use(item);
});
