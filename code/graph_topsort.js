//广度优先搜索 从第一个顶点开始，尝试访问尽可能靠近它的顶点
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this
            .adj[i]
            .push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    //查找最短路径
    this.edgeTo = [];
    this.pathTo = pathTo;
    this.hashPathTo = hashPathTo;
    this.topSort = topSort;
    this.topSortHelper = topSortHelper;
    this.bfs = bfs;
    this.marked = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
}

function addEdge(v, w) {
    this
        .ajd[v]
        .push(w)
    this
        .adj[w]
        .push(v)
    this.edges++;
}
//显示符号名字
function showGraph() {
    var visited = [];
    for (var i = 0; i < this.vertices; ++i) {
        console.log(this.vertexList[i] + "->");
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                if(visited.indexOf(this.vertexList[j])<0){
                console.log(this.vertexList[j] + " ");
            }
            }
        }
        visited.pop();
    }
}
//改动
function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.unshift(s);
    while (queue.length > 0) {
        var v = queue.shift();
        if (typeof(v) != 'string') {
            console.log("visited vertex:  " + v);
        }
        for (var w in this.adj[v]) {
            if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.unshift(w);
            }
        }
    }
}

//添加到graph类
function pathTo(v) {
    var source = 0;
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(s);
    return path;
}

function hashPathTo(v) {
    return this.marked[v]
}
//拓扑排序算法
function topSort() {
    var stack = [];
    var visited = [];
    for (var i = 0; i < this.vertices; i++) {
        visited[i] = false;
    }
    for (var i = 0; i < this.vertices; i++) {
        if (visited[i] == false) {
            this.topSortHelper(i, visited, stack)
        }
    }
    for (var i = 0; i < stack.length; i++) {
        if (stack[i] != undefined && stack[i] != false) {
            log(this.vertexList[stack[i]]);
        }
    }
}

function topSortHelper(v, visited, stack) {
    visited[v] = true;
    for (var w in this.adj[v]) {
        if (!visited[w]) {
            this.topSortHelper(visited[w], visited, stack)
        }
    }
    stack.push(v);
}

g = new Graph(5);
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)
g.vertexList = ["gg","lop","ooo","hh"];
g.showGraph();
g.topSort();
