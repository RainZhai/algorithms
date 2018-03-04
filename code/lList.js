//链表
function Node(e) {
    this.element = e;
    this.next = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}

function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}

function findPrevious(item) {
    var currNode = this.head;
    while (currNode.next != null && currNode.next.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

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