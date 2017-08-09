<template>
	<div>
		<el-form   :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item prop="email" label="邮箱">
				<el-input v-model="ruleForm.email"></el-input>
			</el-form-item>
			<el-form-item prop="sex" label="性别" >
				<el-radio-group v-model="ruleForm.sex">
			      <el-radio label="男"></el-radio>
			      <el-radio label="女"></el-radio>
			    </el-radio-group>
			</el-form-item>

			<el-form-item prop="introl" label="个性签名">
				<el-input type="textarea" :rows="4" v-model="ruleForm.introl"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
			</el-form-item>
		  </el-form>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				ruleForm:{
					email:'',
					sex:'',
					introl:'',
				},
				rules:{
					
				}
			}
		},
		methods:{
			submitForm(formName){
				this.$refs[formName].validate((valid)=>{
					if(valid){
						alert("submitForm");
					}else{
						alert("error");
						return false;
					}
				});
			}
		}
	}
</script>

<style type="text/css" lang="less">
	.el-input{
				width:83%;
			}
	.el-textarea{
		width:55%;
	}
</style>