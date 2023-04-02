// const { response } = require("express");
// const { domainToUnicode } = require("url");






fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    const tbody = document.querySelector('tbody');
    data.forEach(post => {
    const tr = document.createElement('tr');
      const idTd = document.createElement('td');
      idTd.textContent = post.id;
      tr.appendChild(idTd);
      const titleTd = document.createElement('td');
      titleTd.textContent = post.title;
      tr.appendChild(titleTd);
      const bodyTd = document.createElement('td');
      bodyTd.textContent = post.body;
      tr.appendChild(bodyTd);
     
     
      tbody.appendChild(tr);
    });
    
  })
  .catch(error => console.error(error));


  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response=> response.json())
  // .then(data=>{
  //   const tbody = document.querySelector('tbody');
  //   data.forEach(post=>{
  //      const tr = document.createElement('tr');
  //      const idTd = document.createElement('td');
  //      idTd.textContent=post.id;
  //      tr.appendChild(idTd);

     
  //      tbody.appendChild(tr);



  //   })
  // })
  // .catch(error=>console.log(error))