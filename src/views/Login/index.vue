<template>
  <div class="main" :style="{ '--bg-color': color.bg, '--form-color': color.form }">
    <div class="login-form">
      <p class="title" :style="{ color: theme.primaryColor }">Simple Admin</p>
      <div class="form-content">
        <n-form :model="loginForm" ref="formRef" :rules="formRules" label-placement="left">
          <n-form-item path="account">
            <n-input v-model:value="loginForm.account" size="large" placeholder="请输入登录账号/邮箱"
              @keyup.enter="checkLogin" />
          </n-form-item>
          <n-form-item path="password">
            <n-input v-model:value="loginForm.password" placeholder="请输入密码" type="password" size="large"
              show-password-on="mousedown" @keyup.enter="checkLogin" />
          </n-form-item>
          <n-form-item>
            <n-button :disabled="disableLogin" block type="primary" @click="checkLogin" :loading="buttonLoading">登录
            </n-button>
          </n-form-item>
          <n-form-item>
          </n-form-item>
        </n-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "@/storages"
import { computed, reactive, ref } from "vue";
import {
  useMessage, FormInst
} from "naive-ui";
import { useRouter } from "vue-router";


const theme = useTheme()
const router = useRouter();
const formRef = ref<FormInst | null>(null)
//根据主题调整颜色背景颜色
const color = computed(() => {
  if (theme.darkTheme) {
    return {
      bg: '#101014',
      form: '#18181c'
    }
  } else {
    return {
      bg: '#fff',
      form: '#fff'
    }
  }
})
// 登录
const loginForm = reactive({
  account: "",
  password: "",
});
// 校验规则
const formRules = {
  account: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入账号'
  },
  password: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入密码'
  },
}
const disableLogin = computed(() => {
  return loginForm.account === "" || loginForm.password === "";
});
const buttonLoading = ref(false);
const checkLogin = async () => {
  buttonLoading.value = true;
  router.push('/')
  // buttonLoading.value = false;
};


</script>

<style scoped lang="scss">
.main {
  position: relative;
  height: 100vh;
  background: url("src/assets/imgs/login.png");
  background-size: 100% 100%;
  background-color: var(--bg-color);

  .login-form {
    width: 400px;
    height: auto;
    transition: all 0.3s;
    position: absolute;
    left: 65%;
    top: 25%;
    background-color: var(--form-color);
    border-radius: 10px;
    padding: 20px 0 0;
    box-shadow: 0px 0.9px 3.6px rgba(0, 0, 0, 0.024),
      0px 2.5px 10px rgba(0, 0, 0, 0.028), 0px 6px 24.1px rgba(0, 0, 0, 0.032),
      0px 20px 80px rgba(0, 0, 0, 0.05);

    .title {
      padding: 16px 0;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }

    .form-content {
      width: 300px;
      // height: 200px;
      margin: 20px auto 0;
    }
  }
}
</style>
