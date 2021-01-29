<template>
    <div id="login">
        <!-- 登录页 -->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <div class="top">欢迎登录 - MNALL管理系统</div>
            <el-form-item prop="username">
                <el-input type="username" v-model="ruleForm.username" placeholder="User Name"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="ruleForm.password" placeholder="Password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                username: '',
                password:'',
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名称', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        // 登录
        submitForm(formName){
           this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$netClient.LOGIN(this.ruleForm.username, this.ruleForm.password).then((res) => {
                        console.log(res);
                        this.$router.push("/home");
                    });
                } else {
                    console.log("error submit!!");
                    return false;
                }
           })
        },
    },
}
</script>

<style lang="scss">
#login{
    width: 100%;
    height: 97.9vh;
    background-color: #F8F8F8;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    .el-form{
        width: 410px;
        background-color: #fff;
        display: inline-flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        border:1px solid lightgray;
        .top{
            width: 90%;
            padding:20px 0;
        }
        .el-form-item{
            width: 90%;
            .el-input{
                width: 100%;
            }
            .el-button{
                width: 100%;
                background-color: #337AB7;
            }
        }
    }
}
</style>