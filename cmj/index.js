"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var ListNode = function ListNode(val, next) {
  (0, _classCallCheck2.default)(this, ListNode);
  this.val = val;
  this.next = next;
};

var QCLinkedList = function QCLinkedList() {
  this._size = 0;
  this._tail = null;
  this._head = null;
};

QCLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this._size) return null;
  var cur = new ListNode(0, this._head);

  while (index-- >= 0) {
    cur = cur.next;
  }

  return cur;
};

QCLinkedList.prototype.getValByIndex = function (index) {
  if (index < 0 || index >= this._size) return -1;
  return this.getNode(index).val;
};

QCLinkedList.prototype.getIndexByVal = function (val) {
  if (this._head) {
    var current = this._head;
    var index = 0;

    while (current.next) {
      if (current.val == val) {
        return index;
      } else {
        index++;
        current = current.next;
      }
    }

    return -1;
  } else {
    return -1;
  }
};

QCLinkedList.prototype.addAtHead = function (val) {
  var node = new ListNode(val, this._head);
  this._head = node;
  this._size++;

  if (!this._tail) {
    this._tail = node;
  }
};

QCLinkedList.prototype.addAtTail = function (val) {
  var node = new ListNode(val, null);

  if (!this._head) {
    this._head = node;
  } else {
    var current = this._head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
    this._tail = node;
  }

  this._size++;
};

QCLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this._size) return;

  if (index <= 0) {
    this.addAtHead(val);
    return;
  }

  if (index == this._size) {
    this.addAtTail(val);
    return;
  }

  var node = this.getNode(index - 1);
  var newNode = new ListNode(val, node.next);
  node.next = newNode;
  this._size++;
};

QCLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this._size) return -1;

  if (index === 0) {
    this._head = this._head.next;
    this._size--;
    return 0;
  }

  var node = this.getNode(index - 1);
  node.next = node.next.next;

  if (index === this._size - 1) {
    this._tail = node;
  }

  this._size--;
  return 0;
};

var _default = QCLinkedList;
/*
var obj = new QCLinkedList()
obj.addAtTail(1);//???????????????1
obj.addAtTail(2);
obj.addAtTail(4);
obj.addAtHead(5);//???????????????5
console.log(JSON.stringify(obj));//?????????????????????????????????????????????????????????
console.log("val",obj.getValByIndex(2));//??????index?????????
console.log("index",obj.getIndexByVal(5)) //??????val??????index
console.log("delete",obj.deleteAtIndex(2))//??????,return 0?????????return 1??????
obj.addAtIndex(2,9);//???index??????2?????????9
console.log(JSON.stringify(obj));


//todo1:????????????????????????????????????
//todo2:????????????????????????es module???commonjs??????
*/

exports.default = _default;