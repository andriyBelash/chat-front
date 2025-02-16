<script setup lang="ts">
  import { useLoginForm } from "~/composables/auth/useLoginForm";

  const { t } = useI18n()

  const { form, login } = useLoginForm()

  definePageMeta({ layout: 'empty' })
  
</script>

<template>
  <div :class="$style.page">
    <div :class="$style['page-content']">
      <h1>{{ t('page.auth.login_title') }}</h1>
      <div class="card" :class="$style['form-card']">
        <form @submit.prevent="login" :class="$style.form">
          <BaseFieldContainer :label="t('field.email')" >
            <input v-model="form.email" class="input" type="email" :placeholder="`${t('site.example')}: mail@mail.com`" />
          </BaseFieldContainer>
          <BaseFieldContainer :label="t('field.password')">
            <input v-model="form.password" class="input" type="password" placeholder="********" />
          </BaseFieldContainer>
          <button class="button light-variant" type="submit">
            {{ t('page.auth.sign_in') }}
          </button>
        </form>
        <p :class="$style['form-disclaimer']">{{ t('page.auth.dont_have_account') }} 
          <NuxtLinkLocale :class="$style['form-disclaimer-link']" to="/auth/signup">{{ t('page.auth.to_register') }}</NuxtLinkLocale>
        </p>
      </div>
    </div>
  </div>
</template>

<style module>
  .page{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 530px;
    width: 100%;
    align-items: center;
  }

  .form-card {
    padding: 24px;
    width: 100%;
  }

  .form{
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .form-disclaimer{
    text-align: center;
    margin-top: 12px;
  }

  .form-disclaimer-link {
    color: color-mix(in srgb, var(--light-button) 50%, transparent);
  }

  .form-disclaimer-link:hover{
    text-decoration: underline;
  }
</style>