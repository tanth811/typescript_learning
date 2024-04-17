import axios from "axios"

export const fetchJsonAxios = async ()=>{
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    return result.data;
}


export async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);    
}

export const fetchJson = async ()=>{
    const result = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    return result.json();
}
