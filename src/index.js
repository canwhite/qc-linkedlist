class ListNode {
    constructor(val,next){
        this.val = val;
        this.next = next;
    }
}
var QCLinkedList = function(){
    this._size = 0;
    this._tail = null;
    this._head = null;
}
QCLinkedList.prototype.getNode = function(index){
    if(index < 0 || index>=this._size) return null;
    let cur = new ListNode(0,this._head);
    while(index-- >= 0){
        cur = cur.next
    }
    return cur;
}
QCLinkedList.prototype.getValByIndex =function(index){
    if(index < 0 || index >= this._size) return -1;
    return this.getNode(index).val;
}
QCLinkedList.prototype.getIndexByVal = function(val){
    if(this._head){
        var current = this._head;
        var index = 0;
        while(current.next){
            if(current.val == val){
                return index;
            }else{
                index++;
                current = current.next;
            }
        }
        return -1;
    }else{
        return -1;
    }
}
QCLinkedList.prototype.addAtHead = function(val){
    const node = new ListNode(val,this._head);
    this._head = node;
    this._size++ ;
    if(!this._tail){
        this._tail = node;
    }
}
QCLinkedList.prototype.addAtTail = function(val){
    var node = new ListNode(val,null);
    if(!this._head){
        this._head = node;
    }else{
        var current = this._head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
        this._tail = node;
    }
    this._size++;
}

QCLinkedList.prototype.addAtIndex = function(index,val){
    if(index > this._size) return;
    if(index <= 0){
        this.addAtHead(val);
        return;
    }
    if(index == this._size){
        this.addAtTail(val);
        return;
    }
    const node = this.getNode(index-1);
    const newNode = new ListNode(val,node.next);
    node.next = newNode;
    this._size++;
}
QCLinkedList.prototype.deleteAtIndex = function(index){
    if(index < 0 || index >= this._size) return -1;
    if(index === 0) {
        this._head = this._head.next;
        this._size--;
        return 0;
    }
    const node = this.getNode(index - 1); 
    node.next = node.next.next;
    if(index === this._size - 1) {
        this._tail = node;
    }
    this._size--;
    return 0;
}

export default QCLinkedList;

/*
var obj = new QCLinkedList()
obj.addAtTail(1);//在尾部插入1
obj.addAtTail(2);
obj.addAtTail(4);
obj.addAtHead(5);//在头部插入5
console.log(JSON.stringify(obj));//输出的时候字符串化，就可以看到所有数据
console.log("val",obj.getValByIndex(2));//通过index得到值
console.log("index",obj.getIndexByVal(5)) //通过val得到index
console.log("delete",obj.deleteAtIndex(2))//删除,return 0成功，return 1失败
obj.addAtIndex(2,9);//在index等于2处插入9
console.log(JSON.stringify(obj));


//todo1:可以创建一个链表的工具类
//todo2:如何让其同时支持es module和commonjs规范
*/





