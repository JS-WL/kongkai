<template>
	<view class="edit_container">
		<uniBack></uniBack>
		<view class="device_name_wrap">
			<view class="des_name">
				<text>设备名称</text>
			</view>
			<view class="name">
				<text>卫生间</text>
			</view>
		</view>
		<view class="pic_wrap">
			<view class="pic_selected_words">
				<text>
					图片选择
				</text>
			</view>
			<view class="pic_item_wrap">
				<view class="item_wrap" v-for="(item, index) of imgs_list" :key="index" @click="handleClick(index)">
					<view class="icon_wrap">
						<view :class="index === currentIndex ? item.url_a : item.url_c">
							
						</view>
					</view>
					<view :class="index === currentIndex ? 'icon_txt icon_txt_a' : 'icon_txt'" >
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
		 <button type="primary" class="save_btn" hover-class="hover_class">保存</button>
	</view>
</template>

<script>
	import uniBack from '@/component/uni-back/uni-back.vue'
	export default {
		components: {
			uniBack
		},
		data() {
			return {
				deviece_id: '',
				currentIndex: 0,
				imgs_list: [
					{
						url_c: 'iconfont icon-data-one',
						url_a: 'iconfont icon-data-one icon_a',
						name: '默认电器'
					},
					{
						url_c: 'iconfont icon-data-one',
						url_a: 'iconfont icon-data-one icon_a',
						name: '灯'
					},
					{
						url_c: 'iconfont icon-data-one',
						url_a: 'iconfont icon-data-one icon_a',
						name: '空凋'
					},
					{
						url_c: 'iconfont icon-data-one',
						url_a: 'iconfont icon-data-one icon_a',
						name: '插座'
					},
					{
						url_c: 'iconfont icon-data-one',
						url_a: 'iconfont icon-data-one icon_a',
						name: '热水器'
					}
					
				]
			};
		},
		onLoad(option) {
			let op = undefined;
			if(option && option.id) {
				this.deviece_id = option.id
				console.log(option)
			}			
		},
		
		methods: {
			handleClick(index) {
				this.currentIndex = index
			}
		}
	}
</script>

<style lang="scss" scope>
	.edit_container{
		height: 100%;
		width: 100%;
		background-color: #f8f8f8;
		.device_name_wrap{
			width: 100%;
			display: flex;
			flex-direction: column;
			.des_name{
				width: 100%;
				height: 72rpx;
				line-height: 72rpx;
				color: #999;
				font-size: 30rpx;
				font-weight: 400;
				background-color: #f8f8f8;
				text{
					display: inline-block;
					padding-left: 20rpx;
				}
			}
			.name{
				width: 100%;
				height: 88rpx;
				line-height: 88rpx;
				overflow: hidden;
				font-size: 28rpx;
				background-color: #fff;
				text{
					display: inline-block;
					padding-left: 40rpx;
					color: #323233;
				}
			}

		}
		.pic_wrap{
			width: 100%;
			display: flex;
			flex-direction: column;
			.pic_selected_words{
				width: 100%;
				height: 72rpx;
				line-height: 72rpx;
				color: #999;
				font-size: 30rpx;
				font-weight: 400;
				background-color: #f8f8f8;
				text{
					display: inline-block;
					padding-left: 20rpx;
				}
			}
			.pic_item_wrap{
				width: 100%;
				height: 220rpx;
				display: flex;
				background-color:  #fff;
				.item_wrap{
					width: 20%;
					height: 150rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;
					.icon_wrap{
						display: flex;
						align-items: center;
						justify-content: center;
						width: 124rpx;
						height: 124rpx;
						border: 1rpx solid #ccc;
						border-radius: 20rpx;
						margin-bottom: 16rpx;
						.iconfont{
							font-size: 80rpx;
							&.icon_a{
								color: #07c160
							}
						}
					}

					.icon_txt{
						font-size: 28rpx;
						padding-top: 20rpx;
						color: rgb(213, 213, 213);
						&.icon_txt_a{
							color:#07c160;
						}
					}
				}
			}
		}
		.save_btn{
			width: 100%;
			height:88rpx;
			margin-top: 64rpx;
			color: #fff;
			background-color:#07c160;
			border: 1rpx solid #07c160;
			font-size: 30rpx;
			
		}
		.hover_class{
			background-color:rgb(87, 182, 100);
		}
	}
</style>
