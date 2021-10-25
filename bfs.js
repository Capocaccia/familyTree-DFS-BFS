const members = 'Sean Raquel Carter Amelia Arlo Reed John Tonya Taylor'.split(' ');

const relationships = [
    ['Sean', 'Taylor'],
    ['Raquel', 'Carter'],
    ['Raquel', 'Reed'],
    ['Raquel', 'Amelia'],
    ['Raquel', 'Arlo'],
    ['Carter', 'Reed'],
    ['Carter', 'Amelia'],
    ['Carter', 'Arlo'],
    ['Carter', 'Taylor'],
    ['Amelia', 'Reed'],
    ['Amelia', 'Arlo'],
    ['Amelia', 'Carter'],
    ['John', 'Tonya'],
];

// The graph
const adjacencyList = new Map();

// Add node
function addNode(member) {
    adjacencyList.set(member, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create the Graph
members.forEach(addNode);
relationships.forEach(route => addEdge(...route))

function bfs(start) {
    const visited = new Set();
    const queue = [start]
    while (queue.length > 0) {

        const member = queue.shift(); // mutates the queue
        console.log(`Searching ${member}`)

        const relatives = adjacencyList.get(member);

        for (const relative of relatives) {
            if (relative === 'Taylor')  {
                console.log(`${member} is related to Taylor!`)
            }

            if (!visited.has(relative)) {
                visited.add(relative);
                queue.push(relative);
            }
           
        }
        
    }

}

bfs('Carter')

