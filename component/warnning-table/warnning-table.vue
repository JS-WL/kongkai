
<template>
	<view>
		<uniBack></uniBack>
		<wyb-modal ref="modal"
		 :mask-click-close="true" 
		 :custom="true" 
		 :show-cancel="false" 
		 width="700" 
		 height="820"
		 line-height="27"
		 title="报警信息">
			<scroll-view 
			 :scroll-x="true"
			 :scroll-y="true"
			 class="scroll-code">
				<view style="font-size: 28rpx; padding: 20rpx; line-height: 40rpx" v-text="infoT" />
			</scroll-view>
		</wyb-modal>
		<wyb-table ref="table" :headers="headers" :contents="contents"  @onCellClick="onCellClick"/>
		<uni-pagination title="标题文字" show-icon="true" :total="pageContainer.total" :current="pageContainer.current" @change="pageChange" :pageSize="pageContainer.pageSize"></uni-pagination>
	</view>
</template>

<script>
	import wybTable from '@/component/wyb-table/wyb-table.vue'
	import wybModal from '@/component/wyb-modal/wyb-modal.vue'
	import uniPagination from '@/component/uni-pagination/uni-pagination.vue'
	import uniBack from '@/component/uni-back/uni-back.vue'
	export default {
	    components: {
	        wybTable,
			wybModal,
			uniPagination,
			uniBack
	    },
	    data() {
	        return {
	            headers: [{
	                label: '序号',
	                key: 'id',
					width: 100,
	            }, {
	                label: '报警信息',
	                key: 'info',
					width: 650,

	            }],
	            contents: [{
					id: 1,
					info: '信开发者工具打开项目失败，请参阅启动日.信开发者工具打开项目失败，请参阅启动日'
				},
				{
					id: 2,
					info: '信开发者工具打开项目失败，请参阅启动日'
				},
				{
					id: 3,
					info: '信开发者工具打开项目失败，请参阅启动日'
				},
				{
					id: 4,
					info: '信开发者工具打开项目失败，请参阅启动日'
				},
				{
					id: 5,
					info: '信开发者工具打开项目失败，请参阅启动日'
				},
				{
					id: 6,
					info: '信开发者工具打开项目失败，请参阅启动日'
				},
				{
					id: 7,
					info: '信开发者工具打开项目失败，请参阅启动日'
				},
				{
					id: 8,
					info: '信开发者工具打开项目失败，请参阅启动日'
				},
				{
					id: 9,
					info: '信开发者工具打开项目失败，请参阅启动日'
				},
				{
					id: 10,
					info: '信开发者工具打开项目失败，请参阅启动日'
				}],
				infoT: '',
				pageContainer: {
					pageSize: 10,
					total: 50,
					current: 1
				}
			}	

	    },
		methods: {
			onCellClick(e) {
				if(e && e.content && e.key === 'info') {
					this.infoT = e.content
				}
				this.$refs.modal.showModal()
			},
			jsonShowFn(json){
				if (typeof json !== 'string') {
					json = JSON.stringify(json, undefined, 2)
				}
				json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
				return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, 
					function(match) {
						var cls = 'color: darkorange;'
						if (/^"/.test(match)) {
							if (/:$/.test(match)) {
								cls = 'color: red;'
							} else {
								cls = 'color: green;'
							}
						} else if (/true|false/.test(match)) {
							cls = 'color: blue;'
						} else if (/null/.test(match)) {
							cls = 'color: magenta;'
						}
						return '<span style="' + cls + '">' + match + '</span>'
					})
			},
			pageChange(e) {
				console.log(e)
			}
		}
	}
</script>
<style>
	
</style>