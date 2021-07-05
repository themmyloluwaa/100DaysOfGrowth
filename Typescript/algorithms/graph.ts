// LIST OF ALL AIRPORTS
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// Question - REPRESENTING A GRAPH
const adjacencyList = new Map();

const addVertex = (airport: string): void => {
  adjacencyList.set(airport, []);
};
// undirected graph
const addEdge = (origin: string, destination: string): void => {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
};

airports.forEach(addVertex);
routes.forEach((route) => addEdge(route[0], route[1]));

// Question - TRAVERSING OR SEARCHING A GRAPH

const doBFS = (source: string, target: string) => {
  const queue: any = [source];
  const visited = new Set();

  while (queue.length > 0) {
    const v: string = queue.shift();
    const destinations: string[] = adjacencyList.get(v);

    for (let destination of destinations) {
      if (destination === target) {
        console.log(`Starting from ${v} => found it`);
      }

      if (!visited.has(destination)) {
        queue.push(destination);
        visited.add(destination);
      }
    }
  }
};

doBFS("PHX", "MEX");
