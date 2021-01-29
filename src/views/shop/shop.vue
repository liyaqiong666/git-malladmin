<template>
    <div>

        <div class="shop">
            <span>商品管理</span>
            <el-button type="info">+ 添加商品</el-button>
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
                    <button>{{ scope.row.status == 1 ? "下架" : "上架" }}</button>
                </template>
            </el-table-column>
            <el-table-column prop="action" label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="Look(scope.row.id)">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
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
    methods: {
        // 查询
        search() {
            console.log(this.formInline.Aid, this.formInline.user);
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
        // 查看
        Look(id){
            console.log(id);
        },
    },
    mounted() {
        this.$netClient.SHOPP().then((res) => {
            console.log(res);
            this.list = res.data.data.list;
            this.total = res.data.data.total;
        });
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
