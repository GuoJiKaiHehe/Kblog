<template>
<div class="form-container" v-show="ismounted">
	<el-form :inline="true"  class="demo-form-inline">
		<div class="input-line">
			<el-input type="text" placeholder="帐号"></el-input>
		</div>
		<div class="input-line">
			<el-input type="pass" placeholder="密码"></el-input>
		</div>
		<div class="input-line">
			<el-input type="pass" placeholder="确认密码"></el-input>
		</div>
		<div class="input-line">
			<el-input type="email" placeholder="邮箱"></el-input>
		</div>
		<div class="input-line">
			<el-button type="primary">注册</el-button>
		</div>
	</el-form>
	<p  class="b-text">完成注册，你将成为本站的一员</p>
</div>

</template>


<script type="text/javascript">
export default{
	data(){
		return {
			ismounted:false
		}
	},
	mounted(){
		this.ismounted=true;
	}
}
</script>


<style type="text/css" lang="less" scoped>
	.demo-form-inline{
		margin: 20px;
		.input-line{
			margin:20px 0px;
		}
	}
	.el-button--primary{
		width:100%;
	}
</style>