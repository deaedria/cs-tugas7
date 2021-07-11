const MinimunSpanningTree = require('./mst');

class Adjacency {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v, w, size) {
        this.adjList.get(v).push({ vertex: w, size: size })
        this.adjList.get(w).push({ vertex: v, size: size })
    }

    result(){
        return this.adjList
    }
}

var graph = new Adjacency(7);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

for (let i=0; i<=vertices.length-1; i++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B", 16);
graph.addEdge("A", "C", 22);
graph.addEdge("A", "D", 25);
graph.addEdge("B", "D", 14);
graph.addEdge("B", "E", 26);
graph.addEdge("C", "D", 9);
graph.addEdge("C", "G", 35);
graph.addEdge("D", "F", 24);
graph.addEdge("E", "F", 15);
graph.addEdge("E", "G", 28);
graph.addEdge("F", "G", 8);


let g = graph.result()
let hasil = new MinimunSpanningTree();
hasil.choose(g, vertices)
