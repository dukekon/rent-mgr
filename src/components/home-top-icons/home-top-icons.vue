<template>
  <tm-sheet _class="flex-row flex-around" :margin="[0, 20]" :padding="[0, 32]" :round="4" :shadow="2">
    <view class=" flex-col flex-center" v-for="(item, index) in icons" :key="index">
      <tm-icon _class="mb-20" :name="item.icon" :font-size="96" />
      <tm-text :label="item.text" />
    </view>
  </tm-sheet>
</template>

<script lang="ts" setup>
const icons = [
  {
    icon: '../../static/icons/renters@2x.png',
    text: '租客'
  },
  {
    icon: '../../static/icons/bill@2x.png',
    text: '账单'
  },
  {
    icon: '../../static/icons/water&electricity@2x.png',
    text: '抄表'
  },
  {
    icon: '../../static/icons/feature@2x.png',
    text: '功能'
  }
]
</script>

<style lang="scss" scoped>

</style>
    
      