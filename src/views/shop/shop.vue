<template>
    <div>

        <div class="shop">
            <span>商品管理</span>
            <el-button type="info" @click="addShop()">+ 添加商品</el-button>
        </div>
        <p></p>
        <!-- 表单 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="">
                <el-select v-model="formInline.Aid" placeholder="按商品id查询">
                    <el-option label="按商品id查询" value="search"></el-option>
                    <el-option label="按商品名称查询" value="search"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="">
                <el-input
                    v-model="formInline.user"
                    placeholder="按关键词查询"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>
        <!-- 表格 -->
        <el-table :data="list" border style="width: 100%">
            <el-table-column prop="id" label="id" width="80"> </el-table-column>
            <el-table-column prop="name" label="信息" width="150"> </el-table-column>
            <el-table-column prop="price" label="价格" width="150"> </el-table-column>
            <el-table-column label="状态" width="180">
                <template slot-scope="scope">
                    {{ scope.row.status == 2 ? "已下架" : "在售" }}
                    <button @click="update_status(scope.row.id,scope.row.status)">{{ scope.row.status == 1 ? "下架" : "上架" }}</button>
                </template>
            </el-table-column>
            <el-table-column prop="action" label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="Look(scope.row.id)">查看</el-button>
                    <el-button type="text" size="small" @click="editShop(scope.row.id)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-size="pageSize"
            :total="total"
        >
        </el-pagination>

    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            total: 0,
            pageNum: 1,
            pageSize: 10,
            formInline: {
                Aid: "",
                user: "",
            },
        };
    },
    mounted() {
        this.getlist()
    },
    methods: {
        // 商品管理列表数据
        getlist(){
            this.$netClient.SHOPP().then((res) => {
                console.log(res);
                this.list = res.data.data.list;
                this.total = res.data.data.total;
            });
        },
        // 查询搜索
        search() {
            // console.log(this.formInline.Aid, this.formInline.user);
            this.$netClient.SEARCH(
                this.formInline.Aid, 
                this.formInline.user).then((res) => {
                console.log(res);
                this.list = res.data.data.list;
            });
        },
        // 分页
        handleCurrentChange(val) {
            console.log(val);
            this.$netClient.SHOPP(val).then((res) => {
                console.log(res);
                this.list = res.data.data.list;
                this.total = res.data.data.total;
            });
        },
        // 上下架
        update_status (id, status) {  //修改商品上下架状态
            let txt = status == 1 ? '下架' : '上架';
            this.$confirm(`确定${txt}该商品?`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                status = status == 1 ? 2 : 1;
                this.$netClient.UPDATE_STATUS(id, status).then(res => {
                    console.log(res);
                    this.$message({
                        type: 'success',
                        message: `${txt}成功!`
                    });
                    this.getlist();
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: `已取消${txt}`
                });
            });
        },
        // 查看
        Look(id){
            console.log(id);
            this.$router.push({
                path:"/detail",
                query:{
                    id,
                }
            });
        },
        // 编辑
        editShop(id){
            console.log(id);
            this.$router.push({
                path:"/editshop",
                query:{
                    id,
                }
            });
        },
        // 添加商品
        addShop(){
            this.$router.push("/addshop");
        }
    },
};
</script>

<style lang="scss" scoped>
.el-table .warning-row {
    background: oldlace;
}
.el-table .success-row {
    background: #f0f9eb;
}
.shop {
    display: flex;
    justify-content: space-between;
    color:gray;
    border-bottom: 1px solid #ccc;
    font-size: 28px;
}
</style>
