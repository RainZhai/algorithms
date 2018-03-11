//散列

function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
}

function put(data) {
    //var pos = this.simleHash(data);
    var pos = this.betterHash(data);
    this.table[pos] = data;
}

function get(key) {
    return this.table[this.betterHash(key)]
}

function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    console.log("hash value:" + data + "->" + total);
    return total % this.table.length;
}

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
            console.log(i + ":" + this.table[i])
        }
    }
}

var names = ["sss", "rrrr", "ytee"];
var htable = new HashTable();
for (var i = 0; i < names.length; ++i) {
    htable.put(names[i]);
}
htable.showDistro();

//更好的散列表
function betterHash(str, arr) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < str.length; ++i) {
        total += H * total + data.charCodeAt(i);
    }
    total = total % arr.length;
    console.log("hash value:" + str + "->" + total);
    return parseInt(total);
}
//碰撞处理 开链法
function buildChains() {
    for (var i = 0; i < this.table.length; ++i) {
        this.table[i] = new Array();
    }
}

var names = ["sss", "rrrr", "ytee"];
var htable = new HashTable();
htable.buildChains();
for (var i = 0; i < names.length; ++i) {
    htable.put(names[i]);
}
htable.showDistro();

function put(key, data) {
    var pos = this.betterHash(key);
    var index = 0;
    if (this.table[pos][index] == undefined) {
        this.table[pos][index + 1] = data;
        ++index;
    } else {
        while (this.table[pos][index] != undefined) {
            ++index;
        }
        this.table[pos][index + 1] = data;
    }
}

function get(key) {
    var index = 0;
    var hash = this.betterHash(key);
    if (this.table[pos][index] == key) {
        index += 2;
        return this.table[pos][index + 1];
    } else {
        while (this.table[pos][index] != key) {
            index += 2;
        }
        return this.table[pos][index + 1];
    }
    return undefined;
}

//线性探测法 构造函数加入： this.values = [];
function put(key, data) {
    var pos = this.betterHash(key);
    if (this.table[pos] == undefined) {
        this.table[pos] = key;
        this.values[pos] = data;
    } else {
        while (this.table[pos] != undefined) {
            pos++;
        }
        this.table[pos] = key;
        this.values[pos] = data;
    }
}

function get(key) {
    var hash = -1;
    hash = this.betterHash(key);
    if (hash > -1) {
        for (var i = hash; this.table[hash] != undefined; i++) {
            if (this.table[hash] == key) {
                return this.values[hash];
            }
        }
    }
    return undefined;
}