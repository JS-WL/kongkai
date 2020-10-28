<template>
	<view class="connect_device_wrap">
		<view class="connect_device">
			<view class="device_ds">
				<text class="online_device">已连接设备：</text>
				<view class="num_clrcle">
					<text class="online_device_num">1</text>
				</view>
			</view>
		</view>
		<view class="device_list-wrap" v-if="false">
			<!-- 手风琴效果 -->
			<uni-collapse>
				<block v-for="(devices, index) of device_list" :key="index">
					<uni-collapse-item :title=" '网关地址:'+ devices.net " thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" @handleAddDevice="handleAddDevice" @handleDelNet="handleDelNet">
						<view class="device-item" v-for="(device, i) of devices.children" :key="i">
						   <view class="device_innter-wrap">
							   <view class="innter">
									<view class="img-wrap">
										<image :src="device.url" mode="widthFix"></image>
									</view>
									<view class="state_wrap">
										<text class="device_title">{{device.device_title}}</text>
										<view class="des_wrap">
											<text>状态</text>
											<text class="un_t">|</text>
											<text class="un_t_b">{{device.state? '已开启' : '未开启'}}</text>
										</view>
									</view>
									<view class="d_btn" @click="handleDeleteDevice">
										删除设备
									</view>
							   </view>
							   <view class="switch_btn_wrap" @click="handleDeviceDetail(index, i)">
								<!-- <image src="../../static/imgs/power.png" mode="widthFix"></image> -->
								<view class="iconfont icon-dianyuan-">
									
								</view>
							   </view>
						   </view>
						</view>
					</uni-collapse-item>
				</block>
			</uni-collapse>
		</view>
		<view class="no_devices" v-else>
			<text>暂无设备</text>
		</view>
	</view>
</template>

<script>
	import uniCollapse from '../../component/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '../../component/uni-collapse-item/uni-collapse-item.vue'
	export default {
		data() {
			return {
				device_list: [
					{
						net: '3BH12497HDC',//网关设备
						children: [ // 子设备列表
							{
								id: '1', // 子设备id
								url: '../../static/imgs/bathroom_switch.png', //子设备图片
								state: 1, // 开启 还是停用 状态
								device_title: '卫生间', //设备名
								info:  [ // 子设备 设备详情
									{
										//电压
										name: '电压/V',
										num: '12.4',
										borderClass: '',
									},
									{
										//电流
										name: '电流/A',
										num: '0',
										borderClass: '',
									},
									{
										//leakage 漏电流
										name: '漏电流/mA',
										num: '0',
										borderClass: ''
									},
									{
										name: '机内温度/℃',
										num: '27.2',
										borderClass: ''
									},
									{
										name: '有功功率/kw',
										num: '0',
										borderClass: ''
									},
									{
										name: '有功电量/kw/h',
										num: '0',
										borderClass: ''
									},
									{
										name: '功率因数',
										num: '0.021',
										borderClass: ''
									},
									{
										name: '电网频率/Hz',
										num: '49.69',
										borderClass: ''
									}
								]
							},
							{
								id: '2',
								url: '../../static/imgs/bathroom_switch.png',
								state: 0,
								device_title: '厨房'
							}
						]
					},
					{
						net: '2GD13145DC',
						children: [
							{
								url: '../../static/imgs/bathroom_switch.png',
								state: 1,
								device_title: '客厅'
							},
							{
								url: '../../static/imgs/bathroom_switch.png',
								state: 0,
								device_title: '后鼎'
							}
						]
					},
				]
			};
		},
	    components: {uniCollapse,uniCollapseItem},
		methods: {
			handleDeviceDetail(index, i) {
				console.log(index, i)
				let item = JSON.stringify(this.device_list[index]['children'][i])
				uni.navigateTo({
					url: '/component/device-detail/device-detail?item=' + item
				})
			},
			handleAddDevice() {
				console.log('添加设备')
			},
			handleDeleteDevice() {
				console.log('删除设备')
			},
			handleDelNet() {
				console.log('删除网关')
			}
		}
	}
</script>

<style lang="scss" scope>
	.connect_device_wrap{
		width: 100%;
		height: 100%;
		position: relative;
		.no_devices{
			width: 100%;
			position: absolute;
			top: 116upx;
			left: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #ccc;
			height: 100%;
		}
		.device_list-wrap{
			.device-item{
				padding: 20upx;
				width: 100%;
				box-sizing: border-box;
				height: 188upx;
				.device_innter-wrap {
					background-color: #fff;
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					.innter{
						flex: 1;
						display: flex;
						align-items: center;
						flex-wrap: no-wrap;
						.d_btn{
							font-size: 30upx;
							height: 60upx;
							line-height: 60upx;
							padding: 0 30upx;
							background-color: #FEAE1B;
							border-color: #FEAE1B;
							color: #fff;
							border-radius: 200upx;
							margin-left: 50upx;
							
						}
						.img-wrap{
							width: 124upx;
							height: 124upx;
							margin-left: 20upx;
							border-radius: 6upx;
							border: 1upx #ccc solid;
							display: flex;
							align-items: center;
							justify-content: center;
							image{
								width: 80upx;
								
							}
						}
						.state_wrap{
							padding-left: 40upx;
							.device_title {
								font-size: 26upx;
								color: #666
							}
							.des_wrap{
								color: #999;
								display: flex;
								font-size: 24upx;
								.un_t{
									padding: 0 6upx
								}
							}
							
						}

					}
					.switch_btn_wrap{
						width: 90upx;
						height: 90upx;
						border: 1upx solid #eaeaea;
						background: #fff;
						box-shadow: 0 0 5px 0 hsla(0,0%,74.1%,.75);
						border-radius: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-right: 20upx;
						.iconfont {
							color: #F70938;
							font-size: 60upx;
						}
					}
				}
				
			}
		}
		.connect_device{
			height: 116upx;
			background: #1160b7;
			font-size: 28upx;
			overflow: hidden;
			.device_ds{
				width: 340upx;
				height: 72upx;
				line-height: 72upx;
				text-align: center;
				margin: 22upx auto;
				border-radius: 36upx;
				background: #fff;
				padding: 0 16upx;
				box-sizing: border-box;
				font-size: 28upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.online_device{
					color: #999;
				}
				.num_clrcle {
					width: 48upx;
					height: 48upx;
					line-height: 48upx;
					padding: 0;
					font-size: 28upx;
					background-color: rgb(17, 96, 183);
					color: rgb(255, 255, 255);
					border-radius: 50%;
					.online_device_num{
						
					}
				}				
			}
		}
	}

</style>
