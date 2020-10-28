<template>
	<view class="device_detail-wrap">
		<uniBack></uniBack>
		<view class="detail_t">
			<view class="img_wrap">
				<image src="../../static/imgs/bathroom_switch.png" mode="widthFix"></image>
			</view>
			<text class="title">卫生间</text>
			<view class="state_wrap">
				<text>状态：</text>
				<text>开启</text>
			</view>
			<view class="device_edit" @click="handleGoEdit">
				编辑
			</view>
		</view>
		<view class="device_m">
			<view class="b_innter_txt">
				实时监控
			</view>
			<view class="show_device_data_wrap">
				<view :class="item.borderClass" v-for = "(item, index) of device_detail" :key="index">
					<text class="d_num">{{item.num}}</text>
					<text class="d_name">{{item.name}}</text>
				</view>
			</view>
			<view class="icons_wrap">
				<view class="icon_item" v-for="(item, index) of operator_list" :key="index">
					<view :class="'iconfont ' + item.icon" >
						
					</view>
					<text class="txt">{{item.name}}</text>
				</view>
			</view>
		</view>
		<view class="device_b">
			<view class="b_item" @click="openSwitchDialog">
				<view class="b_item_img">
					<view class="iconfont icon-dianyuan-">
						
					</view>
				</view>
				<text class="icon_txt">
					开关
				</text>
			</view>
			<view class="b_item" @click="openCheck">
				<view class="b_item_img">
					<view class="iconfont icon-loudianbaohu">
						
					</view>
				</view>
				<text class="icon_txt">
					漏电自检
				</text>
			</view>
			<view class="b_item" @click="openWarningTable">
				<view class="b_item_img">
					<view class="iconfont icon-baojingjingbao-">
						
					</view>
				</view>
				<text class="icon_txt">
					报警
				</text>
			</view>
			<view class="b_item" @click="openShowDataChart">
				<view class="b_item_img">
					<view class="iconfont icon-data-one">
					</view>
				</view>
				<text class="icon_txt">
					数据
				</text>
			</view>
		</view>
		<uni-popup ref="dialogInput" type="dialog" @change="change" :animation="true">
			<uni-popup-dialog mode="input" title="远程控制密码" :value="password" placeholder="请输入远程控制密码" @confirm="dialogInputConfirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/component/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/component/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/component/uni-popup/uni-popup-dialog.vue'
	import uniBack from '@/component/uni-back/uni-back.vue'
	export default {
		data() {
			return {
				password: '',
				deviece_id: '',
				operator_list: [
					{
						name: '过温保护',
						icon: 'icon-guowenbaohu'
					},
					{
						name: '过流保护',
						icon: 'icon-guoliu'
					},
					{
						name: '欠压保护',
						icon: 'icon-loudiankaobei'
					},
					{
						name: '过压保护',
						icon: 'icon-guoliubaohu'
					},
					{
						name: '漏电保护',
						icon: 'icon-ziyuan'
					},
					{
						name: '过流保护',
						icon: 'icon-qianya'
					},
					{
						name: '漏电保护',
						icon: 'icon-loudianbaohu'
					}
				],
				device_detail:[]
			};
		},
		components: {
			uniPopup,
			uniPopupMessage,
			uniPopupDialog,
			uniBack
		},
		props:{
			msg: String,
			
		},
		onLoad(option) {
			let op = undefined;
			if(option && option.item) {
				op = JSON.parse(option.item)
				this.deviece_id = op.id
				console.log(op)
			}
			
			if(op && op.info) {
				this.device_detail = op.info
			}
			this.set_class()
		},
		methods:{
			set_class() {
				this.device_detail.map((item, index) => {
					if((index + 1) % 4 === 0 && index <= (this.device_detail.length - 5)) {
						item.borderClass = 'data_item r_class'
					} else if( index < (this.device_detail.length - 1) && index > (this.device_detail.length - 5)){
						item.borderClass = 'data_item b_class'
					} else if(index === this.device_detail.length - 1){
						item.borderClass = 'data_item b_none'
					} else {
						item.borderClass = 'data_item'
					}
					return item
				})
			},
			dialogInputConfirm(done) {
				uni.showLoading({
					title: '3秒后会关闭'
				})
				setTimeout(() => {
					uni.hideLoading()
					// 关闭窗口后，恢复默认内容
					done()
				}, 3000)
			},
			change() {
				// uni.$emit('changeMsg', 'I love you')
			},
		   /**
			 * 点击取消按钮触发
			 * @param {Object} done
			 */
			close(done){
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			openSwitchDialog(){
				this.$refs.dialogInput.open()
			},
			 handleGoEdit() {
				 uni.navigateTo({
					 url: '/component/device-edit/device-edit?id=' + this.deviece_id
				 })
			},
			 openWarningTable() {
				uni.navigateTo({
					url: '/component/warnning-table/warnning-table?id=' + this.deviece_id
				})
			 },
			 openShowDataChart() {
				uni.navigateTo({
					url: '/component/device-data/device-data?id=' + this.deviece_id
				})
			},
			 openCheck() {
				uni.navigateTo({
					url: '/component/device-check/device-check?id=' + this.deviece_id
				})
			}
		}
	}
</script>

<style lang="scss" scope>
	.device_detail-wrap{
		width: 100%;
		height: 100%;
		background: linear-gradient(#f13b5d 50%,#ffaf7d);
		position: relative;
		overflow: hidden;
		.detail_t{
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-bottom: 86rpx;
			.img_wrap {
				height: 280rpx;
				width: 280rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background:#F94B6D;
				border-radius: 50%;
				margin-top: 48rpx;
				image{
					width: 140rpx;
				}
			}
			.title{
				margin-top: 16rpx;
				font-size: 36rpx;
				color: #fff;
			}
			.state_wrap{
				margin-top: 16rpx;
				font-size: 30rpx;
				color: #fff;
			}
			.device_edit{
				margin-top: 16rpx;
				min-width: 120rpx;
				hegiht: 60rpx;
				border: 1px solid #ebedf0;
				text-align: center;
				line-height: 60rpx;
				color: #fff;
			}
		
		}
		.device_m{
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
			padding: 40rpx;
			padding-top: 0rpx;
			width: 100%;
			.b_innter_txt{
				font-size: 24rpx;
				color: #fff;
				margin: 20rpx 0;
			}
			.show_device_data_wrap{
				background: rgba(124,1,36,.3);
				width: 100%;
				margin-bottom: 20rpx;
				display: flex;
				flex-wrap: wrap;
				.data_item{
					width: 25%;
					height: 108rpx;
					display:flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					box-sizing: border-box;
					border-right: 0.5rpx #ebedf0 solid;
					border-bottom: 0.5rpx #ebedf0 solid;
					&.r_class{
						border-right:none;
						border-bottom: 0.5rpx #ebedf0 solid;
					}
					&.b_class{
						border-bottom: none;
					}
					&.b_none {
						border-right:none;
						border-bottom: none;
					}
					.d_num{
						font-size: 30rpx;
						color: #fff;
					}
					.d_name{
						color: hsla(0,0%,100%,.5);
						font-size: 20rpx;
					}
				}
			}
			.icons_wrap{
				width: 100%;
				display: flex;
				background: rgba(124,1,36,.3);
				.icon_item{
					flex: 1;
					width: 14.28%;
					height: 134rpx;
					display: flex;
					// flex-direction: column;
					font-size: 26rpx;
					color: #fff;
					align-items: center;
					justify-content: center; 
					flex-wrap: wrap;
					.iconfont{
						font-size: 62rpx;
					}
					.txt{
						font-size: 20rpx;
					}
				}
				
			}
		}
		.device_b{
			height: 116rpx;
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
			background-color: #fff;
			padding: 20rpx 0;
			display: flex;
			.b_item{
				flex: 1;
				height: 116rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				.b_item_img{
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					line-height: 72rpx;
					height: 72rpx;
					width: 72rpx;
					text-align: center;
					border: 1rpx solid #eaeaea;
					background: #fff;
					-webkit-box-shadow: 0 0 5rpx 0 hsla(0,0%,74.1%,.75);
					box-shadow: 0 0 5rpx 0 hsla(0,0%,74.1%,.75);
					border-radius: 100%;
					margin-bottom: 5rpx;
					.iconfont{
						color:rgb(253, 156, 120);
						font-size: 42rpx;
					}
				}
				.icon_txt{
					font-size: 24rpx;
					color: #999;
				}
			}
		}
	}

</style>
