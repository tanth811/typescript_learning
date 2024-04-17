// let data:any ={x:"xxx"};
// const response = fetch('https://jsonplaceholder.typicode.com/posts/1')



async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log(data);    
  }
  
  fetchData();