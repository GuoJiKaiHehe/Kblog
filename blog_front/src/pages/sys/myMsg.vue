<template>
	<div class="myMsg">
		<p class="notice" v-if="msg.length==0">没有任何消息</p>
	</div>
</template>

<script type="text/javascript">
	export  default {
		name:"myMsg",
		data(){
			return {
				msg:[

				]
			}
		}
	}
</script>


<style type="text/css" lang="less">
	.myMsg{
		.notice{
			text-align: center;
			color:#999;
		}
	}
</style>