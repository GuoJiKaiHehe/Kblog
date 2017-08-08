
<template>
	<div class="form-container" v-show="ismounted">
		<el-form :inline="true"  class="demo-form-inline">
			<div class="input-line">
			<el-input v-model="account" type="text" placeholder="请输入帐号" ></el-input>
			</div>
			<div class="input-line">
			<el-input v-model="pass" type="password" placeholder="请输入密码" ></el-input>
			</div>
			<div class="input-line">
				<el-button type="primary">登录</el-button>
			</div>
		</el-form>
		<div class="other-login">其他方式登录</div>
		<ul class="login-list">
			<a href="javascript:;"><i class="fa fa-github"></i></a>
			<a href="javascript:;"><i class="fa fa-qq"></i></a>
		</ul>
		<p  class="b-text">登录后分享您的知识！</p>
	</div>

</template>

<script type="text/javascript">
export default{
name:"login",
data(){
	return {
		account:'',
		pass:"",
		ismounted:false
		
	}
	},
	methods:{

	},
	mounted(){

		this.ismounted=true;
	}
}
</script>


<style type="text/css" lang="less" scoped>
.form-container{
	transition:all 0.2s ease-out;
	position:relative;
}




	.input-line{
			margin:20px;
		}
		.el-button--primary{
			width:100%;
		}
		.other-login{
			height:40px;
			line-height: 40px;
			position: relative;
			font-size: 14px;
			&:before{
				content:" ";
				position: absolute;
				display: block;
				height:1px;
				background: #ccc;
				width:20%;
				top:20px;
				left:20px;
			}
			&:after{
				content:" ";
				position: absolute;
				display: block;
				height:1px;
				background: #ccc;
				width:20%;
				right:0;
				right:20px;
				bottom: 20px
			}

		}
		.login-list{
			display: flex;
			padding:0;
			margin:10px 0;
			a{
				flex:1;
				text-align: center;
				display: block;
				font-size:33px;
				color:#666;
			}
		}
		.b-text{
			font-size:15px;
			margin:20px 0;
		}
</style>