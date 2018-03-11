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