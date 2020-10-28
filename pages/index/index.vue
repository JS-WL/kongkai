<template>
	<view class="content">
		<view class="b_view_config" v-if="wiffInfo.isOk">
			<button type="primary" @click="handleWiff" class="btnWiff">获取wiff信息</button>
			<view class="ipt_c">
				<view class="ipt_wrap">
					<text>BSSID:</text>
					<input type="text" :value="wiffInfo.BSSID"/>
				</view>
				<view class="ipt_wrap">
					<text>SSID:</text>
					<input type="text" :value="wiffInfo.SSID" />
				</view>
				<view class="ipt_wrap">
					<text>PASSWORD:</text>
					<input type="password" :value="wiffInfo.PASSWORD" />
				</view>
			</view>
			<button type="primary" @click="handleConfigWiff(true)" class="btnWiff btnConfirm">配网</button>
		</view>
		<view class="b_view_ok" v-else>
			<image src="../../static/imgs/wiff_selected.png" mode="widthFix"></image>
			<text class="txt">wiff配置成功</text>
		</view>
	</view>
	
</template>

<script >
	export default {
		data() {
			return {
				wiffInfo: {
					BSSID: '',
					SSID: '',
					PASSWORD: '',
					isOk: true
				}
			}
		},
		onLoad(option) {
			uni.$on('changeMsg', (val) => {
				this.$store.dispatch('a_getCity')
			})
			
		},
		methods: {
			getMessage(obj) {
				this.msg = obj
			},
			handleWiff() {
				let _this = this
				wx.getConnectedWifi(
					{
						success(res) {
							console.log(res)
						},
						fail(err) {
							uni.showToast({
								title: '请先链接wiff',
								icon: 'none'
							})			
						}
					}
				)
			},
			handleConfigWiff(flag) {
				if(flag) {
					uni.showToast({
						title: '配网成功',
						icon: 'none'
					})
						console.log(this.wiffInfo)
					this.wiffInfo.isOk = false
				} else {
					uni.showToast({
						title: '配网失败，请重新获取wiff信息，输入密码',
						icon: 'none'
					})	
					this.wiffInfo.SSID = ''
					this.wiffInfo.BSSID = ''
					this.wiffInfo.PASSWORD = ''
				}
			}
		}
	}
</script>

<style lang="scss" scope>
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		.b_view_ok{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			height: 100%;
			.txt {
				font-size: 46upx
			}
		}
		.b_view_config{
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			.btnWiff{
				margin-top: 15upx;
				width: 50%
			}
			.btnConfirm{
				margin-top: 60upx;
			}
			.ipt_c{
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				height:400upx;
				align-items: center;
				justify-content: space-around;
				.ipt_wrap{
					width: 100%;
					display: flex;
					padding-top: 40upx
					text{
						padding-left: 10upx;
						font-size: 36upx;
						height: 60upx;
						line-height: 60upx;
					}
					input{
						box-sizing: border-box;
						padding: 8upx;
						padding-left: 10upx;
						border: 1upx #ccc solid;
						height: 60upx;
						flex: 1
					}
				}
			}
	
		}
	}
</style>
