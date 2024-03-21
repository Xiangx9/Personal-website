<template>
    <div class="weather">
        <div class="time">{{ formatted }}</div>
        <div v-for="(item, index) in weatherAyy" :key="index">
            <div class="city">{{ item.city }}</div>
            <div class="item" v-for="(i, index) in item.casts" :key="index">
                <!-- <div class="li">{{ i.date }}</div> -->
                <div class="li">星期{{ i.week }}</div>
                <div class="li">{{ i.dayweather }}</div>
                <div class="li">{{ i.daytemp }}℃</div>
            </div>
            <div class="item li">{{ item.tip }}</div>
        </div>
    </div>
</template>

<script setup>
import myaxios from "axios";
import { onMounted, ref } from 'vue'
import { useNow, useDateFormat, set } from '@vueuse/core'

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')

const weatherAyy = ref([
]);
const getWeather = () => {
    let city = 430100
    myaxios.get(`https://restapi.amap.com/v3/weather/weatherInfo?key=b56c2ce4034f972662eaf19bd1d3bf27&city=${city}&extensions=all`).then((res) => {
        const { data } = res
        console.log(data.forecasts[0]);
        weatherAyy.value = data.forecasts;
        weatherAyy.value[0].casts.map(item => {
            const setMap ={
                1:"一",
                2:"二",
                3:"三",
                4:"四",
                5:"五",
                6:"六",
                7:"天",
            }
            item.week=setMap[item.week]
        })
    });
};
getWeather();

onMounted(() => {
})
</script>

<style lang="scss" scoped>
.weather {
    font-size: 30px;
    color: #fff;
    padding: 20px;

    .time {
        text-align: center;
    }

    .city {
        font-size: 20px;
        margin: 10px 0;
    }

    .item {
        font-size: 18px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
}
</style>