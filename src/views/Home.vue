<template>
    <div class="home">

        <el-container>
            <el-aside width="200px">
                <el-menu class="el-menu-vertical-demo" router background-color="#F8F8F8">
                    <el-menu-item index="/main">
                        <i class="el-icon-menu"></i>
                        <span slot="title">Home</span>
                    </el-menu-item>
                    <el-submenu index="">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>商品</span>
                        </template>
                        <el-menu-item index="/shop">商品管理</el-menu-item>
                        <el-menu-item index="/shoplist">品类管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>订单</span>
                        </template>
                        <el-menu-item index="/order">订单管理</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main> 
                <router-view />
            </el-main>
        </el-container>

    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss">
.el-aside {
    height: 80vh;
    background-color: #F8F8F8;
    color: #333;
    text-align: left;
    line-height: 200px;
}
  
.el-main {
    height: 80vh;
    background-color: #fff;
    color: #333;
    text-align: left;
    // line-height: 160px;
}
</style>
