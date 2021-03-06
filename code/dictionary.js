//字典
function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for (var key in Object.keys(this.datastore)) {
        console.log(key + "->" + this.datastore[key])
    }
}

function count() {
    var n = 0;
    for (var key in Object.keys(this.datastore)) {
        ++n;
    }
    return n;
}

function clear() {
    var n = 0;
    for (var key in Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}

var book = new Dictionary();
book.add("aa", "123");
book.add("bb", "222");
book.add("cc", "444");
console.log(book.count());
console.log(book.find("bb"));
book.showAll();
book.clear();
console.log(book.count());
// 添加排序功能 function showAll(){     for(var key in
// Object.keys(this.datastore).sort()){
// console.log(key+"->"+this.datasore[key])     } }