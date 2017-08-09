<template>
	<div class="avatar-con">
  		<el-upload 
			class="avatar-uploader"
			action="http://www.baidu.com"
			:on-success="handleAvatarSuccess"
			:before-upload="beforeAvatarUpload"
  		 >
  		 <img v-if="imageUrl"  :src="imageUrl"  class="avatar">
  		 <i v-else class="el-icon-plus avatar-uploader-icon" ></i>
  		</el-upload>
  </div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return{
				imageUrl: ''
			}
		},
		methods:{
			handleAvatarSuccess(res,file){
				this.imageUrl=URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file){
				const isJPG=/image\/jpe?g/gi.test(file.type);
				const isLt2M=file.size/1024/1024 < 2;
				if (!isJPG) {
		          this.$message.error('上传头像图片只能是 JPG 格式!');
		        }

		          if (!isLt2M) {
			          this.$message.error('上传头像图片大小不能超过 2MB!');
		          }
		           return isJPG && isLt2M;
			}
			
		}
	}

</script>

<style type="text/css"  lang="less" scoped >
	.avatar-uploader{
		text-align: center;

		.el-upload{
			background: red;
			border:1px dashed  #ccc;
		}
		.el-upload--text{
border:1px dashed  #ccc;
		}
	}	
	 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
     text-align: center;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;

  }
 
  .el-upload{
  	display: inline-block;
  	border:1px dashed #d9d9d9!important;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

