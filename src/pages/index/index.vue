<template>
  <tm-app>
    <tm-sheet _class="header" class="py-n25" :margin="[0, 0]" color="light-blue">
      <tm-input prefix="tmicon-search" :placeholder="placeholder" :margin="[32, 32]" :inputPadding="[24, 8]"
        prefix-color="grey-darken-1" :round="25" />
      <home-head-info />
    </tm-sheet>
    <tm-sheet _class="content mt--n18" :margin="[32, 0]" :padding="[0, 0]" transprent>
      <home-top-notice />
      <home-top-icons />
    </tm-sheet>
    <tm-float-button :position="positionType.bc" :offset="[32, 76]" :btn="{ icon: 'tmicon-plus', color: 'light-blue' }" />
  </tm-app>
</template>

<script lang="ts" setup>
import { positionType } from '@/tmui/components/tm-float-button/interface'

const placeholder = '下午好！需要做什么？'
</script>

<style lang='scss' scoped>

</style>
