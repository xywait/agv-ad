<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import "style/custom.scss";
	/*每个页面公共css */
	uni-page-body{
		height: 100%;
	}
	
	
	
</style>
