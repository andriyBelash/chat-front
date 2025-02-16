<script setup lang="ts">
  import { useUserStore } from '#imports';

  const { t } = useI18n()
  const { user } = storeToRefs(useUserStore())

</script>

<template>
  <header :class="$style.header">
    <div class="container" :class="$style.container">
      <NuxtLinkLocale class="text-link" to="/">
        <img style="width: 50px; height: 50px; object-fit: contain;" width="50" height="50" src="~/public/logo.svg" alt="logo"/>
      </NuxtLinkLocale>
      <div :class="$style['container--actions']">
        <template v-if="user">
          <NuxtLinkLocale to="/profile" :class="$style.user">
            <div :class="$style['user-avatar']">
              <img v-if="user?.avatar_url" :src="user?.avatar_url" :alt="user?.username">
              <img v-else src="~/public/images/avatar.png" :alt="user?.username">
            </div>
            <div :class="$style['user-info']">
              <span :class="$style.name">{{ user?.username }}</span>
              <span :class="$style.email">{{ user?.email }}</span>
            </div>
          </NuxtLinkLocale>
        </template>
        <template v-else>
          <NuxtLinkLocale class="button dark-variant" to="/auth/login">{{ t('page.auth.sign_in') }}</NuxtLinkLocale>
        </template>
        <LayoutLocaleSwitcher />
      </div>
    </div>
  </header>
</template>

<style module>
  .header{
    height: 80px;
    border-bottom: 1px solid var(--border);
  }

  .container{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .container--actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .user{
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--border);
  }

  .user-avatar img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .user-info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4px;
  }

  .user-info .name{
    font-weight: 500;
    color: black;
  }

  .user-info .email{
    font-size: 12px;
    color: var(--text-gray);
  }
</style>