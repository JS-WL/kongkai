<template>
	<view class="data_wrap">
		<uniBack></uniBack>
		<view class="d_top">
			<HMfilterDropdown @handleMask="handleMask" :menuTop="0" :filterData="filterData" :updateMenuName="true" @confirm="handleConfirm" dataFormat="Object"></HMfilterDropdown>
		</view>
		<view class="echars_wrap" v-show="isShow">
			<!-- 折线Line纯数字-->
			<view class="line" style="padding-top: 100upx">
				<line-chart ref="lineData2" canvasId="index_line_2" :dataAs="lineData2" />
				<view style="text-align: center;line-height: 80upx; padding-top: 20upx">数据展示</view>
			</view>
		</view>
	</view>
</template>

<script>
    import HMfilterDropdown from '@/component/HM-filterDropdown/HM-filterDropdown.vue';
	import HistogramChart from '@/component/stan-ucharts/HistogramChart.vue';
	import ArcbarChart from '@/component/stan-ucharts/ArcbarChart.vue';
	import LineChart from '@/component/stan-ucharts/LineChart.vue';
	import uniBack from '@/component/uni-back/uni-back.vue'
	let data = [{
		"name":'参数',
		"type": 'hierarchy',
		"submenu": [
			{
				"name": "电压",
				"value": "电压"
			},
			{
				"name": "电流",
				"value": "电流"
			},
			{
				"name": "漏电流",
				"value": "漏电流"
			},
			{
				"name": "机内温度",
				"value": "机内温度"
			},
			{
				"name": "有功功率",
				"value": "有功功率"
			},
			{
				"name": "有功电量",
				"value": "有功电量"
			},
			{
				"name": "功率因素",
				"value": "功率因素"
			},
			{
				"name": "电网频率",
				"value": "电网频率"
			}
		]
	},
	{
		"name":'日期选择',
		"type": 'date',
	}
	]
    export default {
        components: {
            'HMfilterDropdown':HMfilterDropdown,
			 HistogramChart,
			 ArcbarChart,
			 LineChart,
			 uniBack
        },
        data() {
            return {
				isShow: false,
                filterData:data, //传入数据，具体数据格式，请下载示例查看
				lineData2: {
					//数字的图--折线图数据
					categories: ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
					series: [
						{ name: '电压/v', data: [35, 8, 25, 37, 4, 20] },
					]
				},
				date: '',
				params: -1
            }
        },
		methods: {
			handleConfirm(e) {
				if(e && e['index'][0][0] !== null && e['index'][1][0]) {
					uni.showLoading({
						title: '加载中'
					});
					this.date = e['index'][1][0]
					this.params = e['index'][0][0]
				} else if(e && e['index'][0][0] == null && e['index'][1][0]) {
					uni.showToast({
					    title: '请选参数',
					});
				} else if(e && e['index'][0][0] !== null && !e['index'][1][0]) {
					uni.showToast({
					    title: '请选日期',
					});
				} else {
					uni.showToast({
					    title: '请选参数与日期',
					});
				}
			},
			handleMask(e) {
				console.log(e)
				console.log(this.date,this.params)
				if( !e && this.date && this.params !== -1) {
					this.isShow = true
					uni.hideLoading();
				} else {
					this.isShow = false
				}
			}
			
		},
		created() {
			this.$nextTick(() => {
			});
			//ajax调用
			// this.getServerData();
		},
		onReady() {
			uni.showToast({
			    title: '请筛选参数与日期',
				icon: 'none'
			});
		}
    }
</script>

<style lang="scss" scope>
	.data_wrap{
		position: relative;
	}
	.d_top{
		position: relative;
		z-index: 2;
	}
	.echars_wrap{
		position: relative;
		z-index: 1;
	}
</style>
