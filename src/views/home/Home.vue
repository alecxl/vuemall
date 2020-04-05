<template>
    <div id="home" class="wrapper">
    <nav-bar  class="home-nav"> <div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view/>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import HomeSwiper from "./childCom/HomeSwiper";
    import RecommendView from "./childCom/RecommendView";
    import FeatureView from "./childCom/FeatureView";


    import {getHomeData} from "../../network/home";
    export default {
        name: "Home",
        components:{
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView
        },
        data(){
            return {
                banners:[],
                recommends:[]
            }
        },
        created() {
            getHomeData()
            .then(res => {
                console.log(res);
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            })
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