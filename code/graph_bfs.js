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

function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
        console.log(i + "->");
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] + " ");
            }
        }
    }
}

function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s);//添加到队尾
    while (queue.length > 0) {
        var v = queue.shift();//从队首移除
        if (v == undefined) {
            console.log("visited vertex:  " + v);
        }
        for (var w in this.adj[v]) {
            if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
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

g = new Graph(5);
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)
g.showGraph();
g.bfs(0);
/*
查找顶点最短路径
g = new Graph(5);
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)
var vertex = 4;
var path = g.pathTo(vertex);
while (paths.length > 0) {
    if (paths.length > 1) {
        console.log(paths.pop() + "-")
    } else {
        console.log(paths.pop())
    }
} */
