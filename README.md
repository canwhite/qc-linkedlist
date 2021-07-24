# qc-linkedlist
Linkedlist tools that support esm and umd
# install
```
yarn add qc-linkedlist
```

# use
1.Front
```
import QCLinkedList from "qc-linkedlist";
...

var obj = new QCLinkedList()

obj.addAtTail(1);//在尾部插入1
obj.addAtTail("333");
obj.addAtTail(4);
obj.addAtHead(5);//在头部插入5
console.log(JSON.stringify(obj));//输出

console.log("val",obj.getValByIndex(2));//通过index得到值
console.log("index",obj.getIndexByVal(5)) //通过val得到index
console.log("delete",obj.deleteAtIndex(2))//删除,return 0成功,return -1失败
obj.addAtIndex(2,9);//在index等于2处插入9
console.log(JSON.stringify(obj));
```

2.Node.js
```
let QCLinkedList= require("qc-linkedlist").default;
let list = new QCLinkedList();
list.addAtTail(1)
list.addAtTail(2)
list.addAtTail(5);
console.log("----",JSON.stringify(list));

```
