//队列
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back
    this.toString = toString;
    this.empty = empty;
}

function enqueue(e) {
    this
        .dataStore
        .push(e);
}

function dequeue() {
    this
        .dataStore
        .shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    } else {
        return false;
    }
}

var q = new Queue();
q.enqueue("jj")
q.enqueue("gg")
q.enqueue("rr")
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("front: "+q.front());
console.log("back: "+q.back());
