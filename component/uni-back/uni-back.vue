<template>
	<view>
		<view class="back" @tap.stop="handleGoback">
			<text>返回</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			// goback() {
			// 	this.$emit('handleGoback')
			// }
			handleGoback(e) {
				e.preventDefault()
				e.stopPropagation()
				uni.navigateBack({
				    delta: 1
				});
			},
		}
	}
</script>

<style lang="scss" scope>
		.back{
			position: absolute;
			right: 20rpx;
			top: 20rpx;
			width: 96rpx;
			height: 96rpx;
			border-radius: 50%;
			background-color: rgba(0,0,0,0.2);
			text-align: center;
			line-height: 90rpx;
			font-size: 30rpx;
			color: #eee;
			z-index: 1000;
		}
</style>
