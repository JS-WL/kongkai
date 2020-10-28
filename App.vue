
<script>
	export default {
		onLaunch: function() {
			
			console.log('App Launch') //启动之后
		},
		onShow: function() { // 
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="stylus">
	@import url("./static/font/iconfont.css");
	/*每个页面公共css */
	page {
		width: 100%;
		height: 100%;
	}
</style>
