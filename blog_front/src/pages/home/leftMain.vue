<template>
	<div class="left-main">
		<div class="bowen-title">
			<div class="write fl">
				<a href="/write"><i class="fa fa-pencil fa-fw"></i>写博文</a>
			</div>
			<div class="draft fr">
				<a href="javascript:;">草稿<span class="num">0</span></a>
			</div>
		</div>
		<div class="bowen-wrap">
			<ul class="bowen-list">
				<li>
					<kBowen></kBowen>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	import kBowen from './common/kBowen';
	export default{
		components:{
			kBowen
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style type="text/css" scoped>
	
</style>