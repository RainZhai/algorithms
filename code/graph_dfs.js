//深度优先搜索
//从一条路径起点开始追溯，直到达到最后一个顶点，然后回溯，继续追溯下一条路径，知道达到最后的顶点，如此往复，直到没有路径为止
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.marked = [];
    for(var i=0; i<this.vertices;++i){
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

function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
        console.log("visited vertex:  " + v);
        for (var w in this.adj[v]) {
            if (!this.marked[w]) {
                this.dfs(w);
            }
        }
    }
}

g = new Graph(5);
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)
g.showGraph();
g.dfs(0);