const data = require('./tree.json')
const bucket = []

function printChildren(obj) {
    console.log(obj)
}

function dfs(individual, key) {
    if(individual.name === key) {
        // go through their children
        // bucket them
        // print them
        //if they have children and its iterable
        if(Array.isArray(individual.children) && individual.children.length > 0) {
            
        }
    } else {
        //recursively navigate the next individual
    }
}

function bfs(individual, key) {

    const queue = [individual];
    let found = false;
    while(queue.length > 0) {
        const person = queue.shift();
        if(person.name === key || found) {
            found = true;
            //get all lineage and print it / break loop
            person.children.map((child) => {
                bucket.push(child.name)
                if(child.children) queue.unshift(...child.children)
            })
            break;
        } else {
            queue.unshift(...person.children)
        }
    }
    console.log(bucket);
}

//get all lineage
bfs(data, 'Randy Capocaccia')

