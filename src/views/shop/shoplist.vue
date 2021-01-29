<template>
    <div>

        <div class="shop">
            <span>品类管理</span>
            <el-button type="info">+添加品类</el-button>
        </div>
        <p></p>

        <!-- 表格 -->
        <el-table :data="list" border style="width: 100%">
            <el-table-column prop="id" label="品类ID" width="180"> </el-table-column>
            <el-table-column prop="name" label="品类名称" width="380">
            </el-table-column>
            <el-table-column prop="action" label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="Editname(scope.row.uid)">修改名称</el-button>
                    <el-button type="text" size="small" @click="subcategory(scope.row.uid)">查看其子品类</el-button>
                </template>
            </el-table-column>
        </el-table>
        

    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
        };
    },
    mounted() {
        this.$netClient.OTHER().then((res) => {
            console.log(res);
            this.list = res.data.data;
        });
    },
    methods: {
        // 修改名称
        Editname(id){

        },
        // 查看子品类
        subcategory(id){

        },
    },
};
</script>

<style lang="scss" scoped>
.shop {
    display: flex;
    justify-content: space-between;
    color:gray;
    border-bottom: 1px solid #ccc;
    font-size: 28px;
} 
.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}
</style>