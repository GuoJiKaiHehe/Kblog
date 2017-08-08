<template>
	<div class="error">
		<img src="/static/images/404.jpg" alt="">
		<div class="tool">
			<a href="javascript:window.location.reload();">刷新</a>
			<a href="javascript:location.href='/';">去首页</a>
		</div>
	</div>
</template>


<script type="text/javascript">
export default{

}
</script>

<style  lang="less" type="text/css" scoped>
@import url("../less/var.less");
	.error{
		width:800px;
		margin:0 auto;
		position: relative;
		img{

		}
		.tool{
			width:300px;
			margin:0 auto;
			position:absolute;
			bottom: 20px;
			display: flex;
			justify-content:space-around;
			width:100%;
			a{
				color:#666;
				font-size:20px;
				&:hover{
					color:@lanse;
				}
			}
		}
	}

</style>