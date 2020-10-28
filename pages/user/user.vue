<template>
	<view class="user_wrap">
		<view class="attr_wrap" @click="handleClick">
			<image src="/static/imgs/user_defalut.png" ></image>
			<text v-if="true">登入/注册</text>
			<text v-else>已登入</text>
		</view>
		<uni-list>
			<uni-list-item title="昵称" :rightText="sign" />
			<uni-list-item title="账号" :rightText="account" />
		</uni-list>
	</view>
</template>

<script>
	import uniSection from '@/component/uni-section/uni-section.vue'
	import uniList from '@/component/uni-list/uni-list.vue'
	import uniListItem from '@/component/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniSection,
			uniList,
			uniListItem
		},
		data() {
			return {
				sign: '小黑',
				account: '121212'
			};
		},
		methods: {
			handleClick() {
				uni.redirectTo({
				   url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="scss" scope>
	.user_wrap{
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: #eee;
		.attr_wrap{
			width: 100%;
			height: 468upx;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin: 20upx 0;
			background-color: #fff;
			image{
				width: 200upx;
				height: 200upx;
			}
			text{
				padding: 20upx;
				font-size: 36upx;
			}
		}

		
	}
</style>
