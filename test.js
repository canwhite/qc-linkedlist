/*============================
主要是利用babel插件生成umd标准的包和esm标准的包
umd适合前端和node环境，在package.json中用main加载
esm适合前端环境，在package.json中用module加载
=============================*/


//cmj => node test.js
let QCLinkedList= require("./umd/index").default;
let list = new QCLinkedList();
list.addAtTail(1)
list.addAtTail(2)
list.addAtTail(5);
console.log("----",JSON.stringify(list));

/* 
//请在浏览器环境下调试
import QCLinkedList  from "./umd/index";
let list = new QCLinkedList();
list.addAtTail(1)
list.addAtTail(2)
list.addAtTail(5);
console.log("----",JSON.stringify(list));
*/

