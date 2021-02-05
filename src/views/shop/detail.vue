<template>
    <div id="detail">
        
        <div class="top">商品详情</div>
        <p></p>

        <!-- 表单 -->
        <div class="box">
            <div class="box-div">
                <b>商品名称</b>{{form.name}}
            </div>
            <div class="box-div">
                <b>商品描述</b>{{form.subtitle}}
            </div>
            <div class="box-div">
                <b>当前状态</b>{{ form.status == 1 ? "在售" : "已下架" }}
            </div>
            <div class="box-div">
                <b>所属分类</b>
                <el-select v-model="form.type" placeholder="请选择商品类别" @change="getType2" class="type1">
                    <el-option v-for="item in type" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
                <el-select v-model="form.type2" placeholder="请选择商品类别" v-if="type2.length!=0">
                    <el-option v-for="item in type2" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </div>
            <div class="num">
                <b>商品价格</b>
                <el-input v-model="form.price" type="number" placeholder="请输入商品价格">
                    <template slot="append">元</template>
                </el-input>
            </div><br>
            <div class="num">
                <b>商品库存</b>
                <el-input v-model="form.stock" type="number" placeholder="请输入商品价格">
                    <template slot="append">元</template>
                </el-input>
            </div>
            <div class="image">
                <b>商品图片</b>
                <!-- 图片 -->
                <img :src="form.subImages" alt="">
            </div>
            <div class="html">
                <b>商品详情</b>
                <div v-html="form.detail"></div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {},
            type: [],
            type2: [],
        }
    },
    mounted () {
        // 商品管理==>商品详情
        this.$netClient.SHOP_DETAIL(this.$route.query.id).then((res) => {
            // console.log(res);
            this.form = res.data.data;
            console.log(res.data.data);
        });
    },
    methods: {
        getType2 (val) {
            // getCateGory(val).then(res => {
            //     this.type2=res.data.data
            // })
        },
    },
}
</script>

<style lang="scss">
#detail{
    .top {
        display: flex;
        justify-content: space-between;
        color:gray;
        border-bottom: 1px solid #ccc;
        font-size: 28px;
    }
    .box{
        margin-left: 10%;
        .box-div{
            margin:25px 0;
            b{
                margin: 10px 20px 0 20px;
            }
        }
        .box-div:nth-child(3){
            margin:25px 0 16px 0;
        }
        .box-div:nth-child(4){
            margin: 8px 0;
        }
        .num{
            width: 400px;
            display: inline-flex;
            margin:6px 0;
            b{
                width: 22%;
                margin: 0 20px 0 20px;
            }
        }
        .image{
            width: 100%;
            display: inline-flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin: 6px 0;
            b{
                margin: 0 20px 0 20px;
            }
            img{
                width: 80px;
                height: 80px;
                // border:1px solid gray;
            }
        }
        .html{
            width: 100%;
            display: inline-flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin: 0;
            b{
                margin: 0 20px 0 20px;
            }
        }
    }
}
</style>