// const student = {
//     id: 1,
//     address: 'rampura',
//     phone: 01791030094,
//     name: 'asif'
// }

// const convert = JSON.stringify(student);
// const convertObject = JSON.parse(convert);
// console.log(convert);
// console.log(convertObject);
// console.log(student);
//console.log(convert);

// function loadData() {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(json => console.log(json))
// }

function loadData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => showData(json))
}

function showData(data) {
    // console.log(data);
    const div = document.getElementById('div');
    div.innerText = data.title;
}