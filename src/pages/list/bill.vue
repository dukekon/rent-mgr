<template>
  <view class="bill-list" hover-class="none">
    <!-- 导航 -->
    <view class="top">
      <uni-nav-bar left-icon="left" statusBar @clickLeft="navBack">
        <!-- @clickItem="fun" -->
        <uni-segmented-control class="segmented" :current="0" :values="segmenteds" styleType="text" />
      </uni-nav-bar>

      <view class="py-1 bg-blue-500 text-white text-center" hover-class="none" :hover-stop-propagation="false">
        <text class="" selectable="false" space="false" decode="false">
          总金额： 512.00元
        </text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const segmenteds = [
  '未完成',
  '已完成',
  '全部'
]

const navBack = () => {
  uni.navigateBack({
    delta: 1,
    animationDuration: 50
  })
}
</script>

<style lang="scss" scoped>
.bill-list {
  @apply flex flex-col h-screen;

  .top {
    @apply shadow-sm;

    .segmented {
      @apply w-full translate-y-2;
    }
  }

  .swiper {
    @apply flex-1;

    .swiper-item {
      @apply w-screen h-screen;

      .content-box {
        @apply px-2;
      }
    }
  }
}
</style>