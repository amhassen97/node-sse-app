const main = document.getElementById("main");
const mainDiv = document.getElementById("mainDiv");
console.log('mainDiv: ', mainDiv);


const events = new EventSource('http://localhost:3000/events');

events.onmessage = (event) => {
const parsedData = JSON.parse(event.data);

console.log('parsedData: ', parsedData);

const node = document.createElement("div");
const textnode = document.createTextNode(`${JSON.stringify(parsedData)}`);
node.appendChild(textnode);

console.log('node: ', node);

console.log('parsedData.length: ', parsedData.length);


if(parsedData.length > 0){
    console.log("TRUE");

    main.appendChild(node);
}

};