<script setup lang="ts">
  import { vMaska } from "maska/vue"
  import { GENDERS } from "~/constants/fields"
  import { useSignUpForm } from "~/composables/auth/useSignUpForm";

  const { image, imageRef, form, changeFile, signUp } = useSignUpForm()

  const { t } = useI18n()

  definePageMeta({ layout: 'empty' })
</script>

<template>
  <div class="signup">
    <img class="signup-image" src="~/public/images/signup.webp" />
    <div class="signup--card card">
      <div class="signup--card-header">
        <p style="color: black">
          {{ t('page.auth.already_have_account') }} <NuxtLinkLocale class="text-link" to="/auth/login">{{ t('page.auth.already_have_account_link') }}</NuxtLinkLocale>
        </p>
      </div>
      <form @submit.prevent="signUp" class="signup--card-form">
        <BaseFieldContainer :label="t('field.avatar')">
          <input type="file" ref="imageRef" style="display: none" @change="changeFile" accept="image/*" />
          <div class="form-avatar">
            <div class="form-avatar-image">
              <img v-if="image.url" :src="image.url" />
              <img v-else src="~/public/images/avatar.png" />
            </div>
            <button type="button" class="button outlined-variant" @click="imageRef?.click()">
              {{ t('site.download') }}
            </button>
          </div>
        </BaseFieldContainer>
        <BaseFieldContainer :label="t('field.name')" >
          <input v-model="form.username" class="input" type="text" :placeholder="`${t('site.example')}: John Doe`" />
        </BaseFieldContainer>
        <BaseFieldContainer :label="t('field.email')">
          <input v-model="form.email" class="input" type="email" :placeholder="`${t('site.example')}: mail@mail.com`" />
        </BaseFieldContainer>
        <BaseFieldContainer :label="t('field.phone')">
          <input v-model="form.phone" class="input" type="tel" :placeholder="`${t('site.example')}: +380123456789`" v-maska="'+380 (##) ###-##-##'" />
        </BaseFieldContainer>
        <BaseFieldContainer :label="t('field.dob')">
          <input v-model="form.dob" class="input" type="text" v-maska="'####-##-##'" :placeholder="`${t('site.example')}: 2000-01-01`" />
        </BaseFieldContainer>
        <BaseFieldContainer :label="t('field.sex')">
          <BaseUiRadioButtons :options="GENDERS" v-model="form.sex" name="gender" />
        </BaseFieldContainer>
        <BaseFieldContainer :label="t('field.password')">
          <input v-model="form.password" class="input" type="password" placeholder="********" />
        </BaseFieldContainer>
        <button class="button filled-variant" type="submit">
          {{ t('page.auth.sign_up') }}
        </button>
      </form>
    </div>
  </div>
</template>


<style src="~/assets/style/page/signup.css"></style>