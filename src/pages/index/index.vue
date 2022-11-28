<template>
  <view class="home">
    <view class="heaedr pt-10 px-6 pb-16 bg-blue-600">
      <!--todo 搜索 -->
      <uni-search-bar class="mb-3"
                      :placeholder="searchTip"
                      radius="25"
                      cancelButton="none" />
      <!--todo 房屋信息 -->
      <view class="house-info flex flex-row justify-between px-4">
        <view class="flex flex-col justify-center items-center text-white"
              v-for="(item, i) in houseInfo"
              :key="i">
          <text class="mb-1">
            {{ i }}
          </text>
          <text class="">
            {{ item }}
          </text>
        </view>
      </view>
    </view>
    <!-- 内容 -->
    <view class="main px-4">
      <!--todo 通知 -->
      <view class="notice flex flex-row -mt-10 mb-3 p-4 bg-white rounded-lg m-shadow">
        <view class="flex-1 text-center text-lg"
              :class="i < 1 ? 'text-green-500 border-r-1 border-gray-200' : 'text-red-500'"
              v-for="(item, i) in notices"
              :hover-stop-propagation="false"
              :key="i">
          <text class="mr-2 text-2xl font-bold">
            {{ i }}
          </text>
          <text class="text-dark-100">
            {{ item }}
          </text>
        </view>
      </view>
      <!--todo 导航图标 -->
      <view class="icons flex flex-row justify-evenly py-4 bg-white rounded-lg m-shadow">
        <view class="flex flex-col text-center"
              v-for="item in icons"
              @click="handleClick(item.url)"
              :key="item.text">
          <image class="mb-3 w-12 h-12"
                 :src="item.icon"
                 mode="aspectFill">
          </image>
          <text class="">
            {{ item.text }}
          </text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
//#region 头部
// 搜索
const searchTip = '下午好！搜索租客？'
// 房屋信息
const houseInfo = [
  '现有租客',
  '空闲房间',
  '历史租客'
]
//#endregion

//#region 主要内容
// 通知
const notices = [
  '本月未收',
  '逾期未交'
]

// 导航
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
    icon: '/static/icons/meter@2x.png',
    text: '抄表',
    url: ''
  },
  {
    icon: '/static/icons/feature@2x.png',
    text: '更多',
    url: ''
  }
]

const handleClick = (url: string) => {
  uni.navigateTo({
    url
  })
}
//#endregion
</script>


