const axios = require('axios');

let apiData;
const ddata= [
    {
        name:'ayush',
        age:44,
        address:'ayush',
    },
    {
        name:'diwas',
        age:44,
        address:'ayush',
    },
]
const fetchWeatherData = async () => {
    const data = axios.get('https://jsonplaceholder.typicode.com/todos/1').then((data)=>{
        console.log(data.data.title)
        return data.data;
    });
  
};

async function getWeather() {

};

fetchWeatherData();