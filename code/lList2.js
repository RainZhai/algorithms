//双向链表

function Node(e) {
    this.element = e;
    this.next = null;
    this.previous = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
    this.remove = remove;
}

function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while (currNode.previous != null) {
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}

function findLast() {
    var currNode = this.head;
    while (currNode.next != null) {
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next == null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}
/*
function findPrevious(item){
  var currNode = this.head;
  while(currNode.next!=null && currNode.next.element!=item){
    currNode = currNode.next;
  }
  return currNode;
} */

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newEle, item) {
    var newNode = new Node(newEle);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

var cities = new LList();
cities.insert("a", "head");
cities.insert("b", "a");
cities.insert("c", "b");
cities.display();
cities.remove("b");
cities.display();
cities.dispReverse();

/* //单向循环链表：
function LList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
}
//循环会死循环，while循环需修改，检测头节点，到头节点退去循环
function display() {
    var currNode = this.head;
    while (!(currNode.next == null) && currNode.next.element != "head") {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
} */