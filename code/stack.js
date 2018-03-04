//栈
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(e) {
    this.dataStore[this.top++] = e;
}

function peek() {
    return this.dataStore[this.top - 1];
}

function pop() {
    return this.dataStore[--this.top];
}

function clear() {
    return this.top = 0;
}

function length() {
    return this.top;
}

var s = new Stack();
s.push("dav");
s.push("ff");
s.push("rr");
console.log("length:"+s.length())
console.log(s.peek());
var poped = s.pop();
console.log("poped elemnts is:"+ poped)
console.log(s.peek());
s.push("xx");
console.log(s.peek());
s.clear();
console.log("length:"+s.length())
console.log(s.peek());
s.push("cff");
console.log(s.peek());
