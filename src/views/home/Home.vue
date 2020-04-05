<template>
    <div id="home" class="wrapper">
        <nav-bar  class="home-nav"> <div slot="center">购物街</div></nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view/>
        <TabControl class="tab-control" :titles="['流行','新款','精选']"></TabControl>
        <goods-list></goods-list>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import TabControl from "../../components/content/tabControl/TabControl";
    import HomeSwiper from "./childCom/HomeSwiper";
    import RecommendView from "./childCom/RecommendView";
    import FeatureView from "./childCom/FeatureView";
    import GoodsList from "../../components/content/goods/GoodsList";

    import {getHomeData,getHomeGood} from "../../network/home";
    export default {
        name: "Home",
        components:{
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl,
            GoodsList
        },
        data(){
            return {
                banners:[],
                recommends:[],
                goods:{
                    'pop':{page:0,list:[]},
                    'news':{page:0,list:[]},
                    'sell':{page:0,list:[]},
                }
            }
        },
        created() {

            this.getHomeData();


            this.getHomeGood('pop');
            this.getHomeGood('new');
            this.getHomeGood('sell');
        },
        methods:{
            getHomeData(){
                getHomeData().then(res => {
                console.log(res);
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            })
        },
            getHomeGood(type){
                const page = ths.goods[type].page +1;
                getHomeGood(type,page).then(res => {
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page += 1
                })
            }
        }

    }
</script>


<style scoped>
    #home {
        /*padding-top: 44px;*/
        height: 100vh;
        position: relative;
    }


    .home-nav {
        background-color: var(--color-tint);
        color: #fff;

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;

    }

    .tab-control {
        position: sticky;
        top: 44px;
        z-index: 9;
    }

    .content {
        overflow: hidden;

        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;

    }

    /*.content {*/
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
    /*}*/
</style>