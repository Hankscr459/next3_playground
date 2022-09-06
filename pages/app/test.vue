<template lang="pug">
div(style="background-color: var(--el-text-color-primary); width: 100%; height: 100%; min-height: 100vh;")
  .u-margin-top-big
  .flex.justify-center
    el-card.u-margin-small(style="width: 100%; min-width: 15rem; max-width: 25rem; boxShadow: --el-box-shadow-dark;",
    )
      .flex.justify-center
        h1 Login
      el-form(
        :rules="rules",
        :model="user",
        status-icon,
        size="large",
        ref="ruleFormRef",
      )
        el-form-item(prop="account")
          el-input(v-model="user.account")
            template(#prepend)
              el-button(:icon="UserFilled")
        el-form-item(prop="password")
          el-input(v-model="user.password", type="password")
            template(#prepend)
              el-button(:icon="Key")
        el-button(type="info", style="width: 100%", @click="submitForm(ruleFormRef)") 登入
        pre {{signinRef}}
  </template>
  
  <script lang="ts" setup>
  import { UserFilled, Key } from '@element-plus/icons-vue';
  import type { FormInstance, FormRules } from 'element-plus'
  // Head
  useHead({ title: '登入 | My App' });
  
  // state
  const user = reactive({
    account: '',
    password: '',
  });
  const signinRef = useState('signinRef', () => null);
  const ruleFormRef = ref<FormInstance>();
  const rules = reactive<FormRules>({
    account: [
      {
        required: true, // min: 8, max: 10
        message: '帳號欄位必填',
        trigger: 'blur',
      },
      {
        min: 8, max: 16,
        message: '帳號欄位必需 8 ~ 16 字元',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: '密碼欄位必填',
        trigger: 'blur',
      },
    ],
  });
  
  // Method
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return ;
    await formEl.validate((valid) => {
      if (valid) {
        console.log('valid: ', valid);
      } 
    });
  };
  
  definePageMeta({
    layout: false,
  });
  </script>