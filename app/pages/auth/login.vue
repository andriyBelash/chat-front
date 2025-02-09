<script setup lang="ts">
  const { t } = useI18n()
</script>

<template>
  <div :class="$style.page">
    <div :class="$style['page-content']">
      <h1>{{ t('page.auth.login_title') }}</h1>
      <div class="card" :class="$style['form-card']">
        <form :class="$style.form">
          <input class="input" type="email" :placeholder="t('field.email')" />
          <input class="input" type="password" :placeholder="t('field.password')" />
          <button class="button light-variant" type="submit">
            {{ t('page.auth.sign_in') }}
          </button>
        </form>
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
</style>