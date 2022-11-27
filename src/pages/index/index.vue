<template>
  <view class="home">
    <view class="header">
      <!--todo 搜索 -->
      <uni-search-bar :placeholder="searchTip" radius="25" cancelButton="none" />
      <view class="house-info">
        <uni-row>
          <!--todo 房屋简讯 -->
          <uni-col :span="8" class="house-info-item" v-for="(item, i) in houseInfo" :key="i">
            <navigator class="nav" target="" url="/pages/list/renter" hover-class="navigator-hover"
              open-type="navigate">
              <text class="house-info-item__value" selectable="false" space="false" decode="false">
                {{ i }}
              </text>
              <text class="house-info-item__text" selectable="false" space="false" decode="false">
                {{ item }}
              </text>
            </navigator>
          </uni-col>
        </uni-row>
      </view>
    </view>
    <view class="main">
      <!--todo 未交付提醒 -->
      <view class="unpaid-notice">
        <uni-row>
          <uni-col :span="12" class="unpaid-notice-item" v-for="(item, i) in unpaidNotices" :key="i">
            <text class="unpaid-notice-item__value" selectable="false" space="false" decode="false">
              {{ i }}
            </text>
            <text class="unpaid-notice-item__text" selectable="false" space="false" decode="false">
              {{ item }}
            </text>
          </uni-col>
        </uni-row>
      </view>
      <!--todo 功能图标 -->
      <view class="icons">
        <view class="icons-item" v-for="(item, i) in icons" hover-class="none" :hover-stop-propagation="false" :key="i">
          <navigator class="icon-link" target="" :url="item.url" hover-class="none" open-type="navigate"
            :animation-duration="50">
            <image class="w-12 icons-item__icon" :src="item.icon" mode="widthFix" lazy-load="false" binderror=""
              bindload="" />
            <text class="icons-item__text" selectable="false" space="false" decode="false">
              {{ item.text }}
            </text>
          </navigator>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const searchTip = '下午好！搜索租客？'

const houseInfo = [
  '现有租客',
  '空闲房间',
  '历史租客'
]

const unpaidNotices = [
  '本月未收',
  '逾期未付'
]

const icons = [
  {
    icon: '/static/icons/renters@2x.png',
    text: '租客',
    url: '/pages/list/renter',
  },
  {
    icon: '/static/icons/bill@2x.png',
    text: '账单',
    url: '/pages/list/bill'
  },
  {
    icon: '/static/icons/water&electricity@2x.png',
    text: '抄表',
    url: ''
  },
  {
    icon: '/static/icons/feature@2x.png',
    text: '更多',
    url: ''
  }
]
</script>

<style lang="scss" scoped>
.header {
  @apply pt-10 pb-17 px-5 bg-blue-500;

  // 房屋信息
  .house-info {
    @apply mt-3;

    &-item {
      .nav {
        @apply flex flex-col text-center text-white;
      }

      &__value {
        @apply pb-1;
      }
    }
  }
}

.main {
  @apply mx-4;

  // 未付通知
  .unpaid-notice {
    @apply home-card -mt-10 text-center font-bold;

    &-item {
      &__value {
        @apply mr-2 text-2xl text-red-500;
      }

      &__text,
      &__value {
        @apply align-middle
      }

      &:first-child {
        @apply border-r-1 border-gray-200;

        & .unpaid-notice-item__value {
          @apply text-green-500;
        }
      }
    }
  }

  .icons {
    @apply home-card mt-2.5 flex justify-evenly;

    &-item {
      .icon-link {
        @apply flex flex-col text-center;
      }

      &__icon {
        @apply mb-2;
      }
    }
  }
}
</style>
