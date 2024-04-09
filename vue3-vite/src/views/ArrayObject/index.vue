<template>
    <div class="center">
        <div class="box">
            <el-card v-for="(item, index) in ArrayMethod" :key="index" class="box-card at-itemleft">
                <template #header>
                    <div class="card-header">
                        <h1>{{ item.Name }}</h1>
                        <h3>https://www.yuque.com/xiangxin1999/qe1g7s/wng7lh3k3c4d6s6y</h3>
                    </div>
                </template>

                <el-scrollbar style="width: 100%;">
                    <el-collapse accordion style="padding: 0 20px;">
                        <el-collapse-item v-for="(i, index) in item.list" :key="index" :name="index"
                            style="margin: 10px 0;">

                            <template #title>
                                <h2 style="padding: 0 20px;"> {{ i.name }}</h2>
                                <h3>({{ i.title }})</h3>
                            </template>
                            <h3 style="padding: 0 20px;">
                                <div v-html="i.text"></div>
                                <div v-html="i.Code" class="code"></div>
                            </h3>
                        </el-collapse-item>
                        <div style="height: 200px;"></div>
                    </el-collapse>
                </el-scrollbar>

            </el-card>

            <el-card v-for="(item, index) in ObjectMethod" :key="index" class="box-card at-itemright">

                <template #header>
                    <div class="card-header">
                        <h1>{{ item.Name }}</h1>
                    </div>
                </template>

                <el-scrollbar style="width: 100%;">
                    <el-collapse accordion style="padding: 0 20px;">
                        <el-collapse-item v-for="(i, index) in item.list" :key="index" :name="index"
                            style="margin: 10px 0;">

                            <template #title>
                                <h2 style="padding: 0 20px;"> {{ i.name }}</h2>
                            </template>
                            <h3 style="padding: 0 20px;">
                                <div v-html="i.text"></div>
                                <div v-html="i.Code" class="code"></div>
                            </h3>
                        </el-collapse-item>
                        <div style="height: 200px;"></div>
                    </el-collapse>
                </el-scrollbar>
            </el-card>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const ArrayMethod = ref([{
    Name: 'Array',
    list: [{
        title: '改变',
        name: 'unshift()&push()添加元素',
        text: 'unshift：往数组开头添加元素，可添加多个 </br>  push：往数组末尾塞入元素，可塞入多个',
        Code: `let arr =['a','b','c'] </br> 
        arr.push('1'，'2','3') </br> // ['a','b','c','1','2','3] </br> 
        arr.unshift('1','2'，'3') </br> // ['1','2','3','a','b','c']`
    }, {
        title: '改变',
        name: 'shift()&pop()除去元素',
        text: 'shift：把数组开头的元素去除，并返回这个元素 </br> pop：把数组末尾的元素去除，并返回这个元素',
        Code: `let arr =['a','b','c'] </br>
        arr.shift() </br> // ['b','c'] </br> 
        arr.pop() </br> //['b']`,
    }, {
        title: '改变',
        name: 'sort()排序',
        text: '用来排序数组的，并且你也可以自定义排序规则，只需要传入一个函数即可',
        Code: `let arr =[1,2,3] </br> 
        arr.sort((a,b)=>{ return b - a}) </br> 
        // [3,2,1]  </br> //a-b [1,2,3]`
    }, {
        title: '改变',
        name: 'reverse()反转',
        text: `用来反转数组的`,
        Code: `let arr =[1,2,3] </br> 
        arr.reverse()  </br> 
        //[3,2,1]`
    }, {
        title: '改变',
        name: 'splice()截取',
        text: '（从哪个索引开始截取,截取几个元素,截取后可塞进新的元素）从数组中添加或删除元素,这个方法的返回结果是被截取的部分',
        Code: `let arr =[1,2,3,4,5] </br>
        // 添加 arr.splice(0,0,0); // [0,1,2,3,4,5] </br>
        // 修改 arr.splice(0,1,23); // [23,1,2,3,4,5] </br>
        // 删除 arr.splice(0,1); //[1,2,3,4,5]`
    }, {
        title: '改变',
        name: 'fill()填充',
        text: '用来把数组填满成自己想要的元素',
        Code: `let arr =[1,2,3,4,5] </br>
        arr.fill('a',2,5); // [1,2,a,a,a]`
    }, {
        title: '不改变',
        name: 'forEach()循环遍历',
        text: '通常用来遍历，其实跟 for 的作用差不多，不过 for 支持 await 排队且 for 能终止和跳过某次步骤，forEach 不支持',
        Code: `https://www.runoob.com/jsref/jsref-foreach.html`
    }, {
        title: '不改变',
        name: 'map()循环遍历',
        text: '把数组的每一项都通过自定义规则去修改，并返回成一个新的数组',
        Code: `let arr =[1,2,3,4,5] </br>
        arr.map((item,index)=>{
            item =item*2
                }) //[2,4,6,8,10]`
    }, {
        title: '不改变',
        name: 'filter()过滤',
        text: '用来过滤的，接收一个过滤函数，返回 假值 的元素会被过滤掉，返回 真值 的则会被保留',
        Code: `let arr = [56, 15, 48, 3, 7]; </br>
        rr.filter((item,index)=>{
             return value % 2 === 0;
                }) // [56, 48]`
    }, {
        title: '不改变',
        name: 'redece()累积计算',
        text: '根据数组每一项计算总数,根据数组每一项计算出一个Map',
        Code: `total    必需。初始值, 或者计算结束后的返回值。
        currentValue	必需。当前元素
        currentIndex	可选。当前元素的索引
        initialValue	可选。传递给函数的初始值
        let arr =[1,2,3,4,5] </br>
        arr.reduce(((total, currentValue, currentIndex, arr), initialValue)=>{
        const sum=total+currentIndex
                }) //15`
    }, {
        title: '不改变',
        name: 'slice()截取',
        text: '用来截取数组的，第一个参数是起始索引（包括该元素），第二个参数是终止索引（不包括该元素）',
        Code: `let arr =[1,2,3,4,5] </br>
        arr.slice(1,3) //[2,3]`
    }, {
        title: '不改变',
        name: 'every()所有必须真',
        text: '传入一个计算函数，需要所有元素的计算结果都返回 真值，最终方法才会返回 true，只要有一个 假值，那么最终会返回 false',
        Code: `let arr =['x1','x2', 'x3'] </br>
        const isEvery1= arr.every(item => item.includes(x)) //true </br>
        const isEvery2 = arr.every(item => item.includes('1')) //false`
    }, {
        title: '不改变',
        name: 'some()至少一个真',
        text: '传入一个计算函数，至少要有一个元素的计算结果返回 真值，最终方法才会返回 true，如果所有都返回 假值，那么最终会返回 false',
        Code: `let arr =[1,2, 3] </br>
        const isSome1 = arr.some(item => item>0) //true 
        const isSome2 = arr.some(item => item<0) //false`
    }, {
        title: '不改变',
        name: 'concat()拼接',
        text: '用于连接两个或多个数组，并返回拼接后的数组',
        Code: `let a = ["1", "2"]; </br>
        let b = ["a", "b", "c"]; </br>
        let c = a.concat(b) // ["1", "2","a", "b", "c"];`
    }, {
        title: '不改变',
        name: 'join()数组转字符串',
        text: '用的频率很高的一个方法，传入一个分隔符，把数组转成一个字符串',
        Code: `let arr = [1,2,3]; </br>
        let str =arr.join('--')// 1--2--3`
    }, {
        title: '不改变',
        name: 'toString()转字符串',
        text: `它等同于 arr.join(',')，将数组用逗号分隔，转成一个字符串`,
        Code: `let arr = [1,2,3]; </br>
        let str =arr.toString ()// 1,2,3`
    }, {
        title: '不改变',
        name: 'indexOf()查找索引',
        text: '传入一个数组元素，能查出这个元素在数组中的第一个索引，如果查不到则返回 -1',
        Code: `let arr = ['a','b','c']; </br>
        arr.indexOf('b') // 1`
    }, {
        title: '不改变',
        name: 'find()寻找元素',
        text: '传入一个计算函数，根据这个计算函数的返回结果，查出数组中第一个计算返回真值的元素',
        Code: `let arr = [1,2,3]; </br>
        arr.find((item,index)=>{
            itme>1
        }) // 2`
    }],

}])
const ObjectMethod = ref([{
    Name: 'Other',
    list: [{
        name: 'split()字符串转字符串数组',
        text: '把字符串分割为字符串数组',
        Code: `let str="1,2,3,4,5"; </br>
        let n=str.split(",",3); //['1','2','3']`
    }, {
        name: 'trim()去除字符串两边的空白',
        text: '不会改变原始字符串,不适用于 null, undefined, Number 类型',
        Code: `let str = "       Runoob        "; </br>
        str.trim() //Runoob;`
    }, {
        name: 'Number()把值转换为数字',
        text: '如果值无法转换为数字，那么 Number() 函数返回 NaN',
        Code: `let text1='999' Number(test1) //999
        let text1='999 888' Number(test2) // NaN`
    }, {
        name: 'CSS',
        text: '一些小技巧',
        Code: `容器中水平和垂直居中 </br>
        .container {
            display: flex;
            align-items: center;
            justify-content: center;
        } </br>
        渐变边界 </br> 
        .element {
            border: 2px solid transparent;
            background-clip: padding-box;
            background-image: linear-gradient(to right, red, blue);
        } </br>
        选择偶数和奇数元素 </br>
        li:nth-child(even) {
            background-color: #f2f2f2;
        } </br>
        li:nth-child(odd) {
            background-color: #e6e6e6;
        }</br>
        平滑渐变过渡 </br>
        .gradient-box {
            background: linear-gradient(45deg, #3498db, #2ecc71);
            transition: background 0.5s ease;
        } </br>
        .gradient-box:hover {
            background: linear-gradient(45deg, #e74c3c, #f39c12);
        }  </br>
        文本描边效果 </br>
        h1 {
            color: #3498db;
            -webkit-text-stroke: 2px #2c3e50;
        } /br>`
    },]
}])

var str = "999 888 777";
var a = str.split(" ")
var n = a.join("");
console.log(n);

</script>

<style lang="scss" scoped>
.box {
    width: 80%;
    height: 800px !important;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    display: flex;

    .box-card {
        width: 100%;
        margin: 20px;
        background: rgba(255, 255, 255, 0.6);

        .code {
            background: #000;
            color: #fff;
            letter-spacing: 2px;
            padding: 10px;
            margin-top: 10px;
        }
    }

    h1 {
        font-size: 2vw !important;
        -webkit-text-stroke: 2px #2c3e50;
    }

    h2 {
        font-size: 1vw !important;
    }

    h3 {
        font-size: 0.9vw !important;
    }

    @media screen and (max-width:600px) {
        flex-wrap: wrap;

        h1 {
            font-size: 30px !important;
        }

        h2 {
            font-size: 1.2vh !important;
        }

        h3 {
            font-size: 1vh !important;
        }

        .box-card .el-scrollbar {
            height: 200px !important;
        }
    }
}
</style>