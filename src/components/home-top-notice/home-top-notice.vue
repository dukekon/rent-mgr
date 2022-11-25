<template>
  <tm-sheet _class="flex-row flex-between" :margin="[0, 0]" :padding="[0, 32]" :round="4" :shadow="2">
    <view class="flex flex-1 flex-row flex-row-bottom-center text-weight-b" :class="i === 1 && 'border-r-1'"
      v-for="i in 2" :key="i">
      <tm-text class="mr-8 relative t-4" :font-size="48" :color="i === 1 ? 'green' : 'red'" :label="num[i - 1]" />
      <tm-text :font-size="32" :label="text[i - 1]" />
    </view>
  </tm-sheet>
</template>

<script lang="ts" setup>
const num = [7, 5]
const text = ['本月未收', '逾期未交']
</script>

<style lang="scss" scoped>

</style>
    
      