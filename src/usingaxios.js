import axios from 'axios';

axios.get('http://localhost:7000/Ingredients')
    .then(response => {
        console.log(response.data); // response data as an array of documents
        // do something with the response data, e.g. display it in your application
    })
    .catch(error => {
        console.log(error);
        // handle the error, e.g. display an error message in your application
    });

fetch('http://localhost:7000/Pizzas')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data); // response data as an array of documents
        // do something with the response data, e.g. display it in your application
    })
    .catch(error => {
        console.log(error);
        // handle the error, e.g. display an error message in your application
    });


<table style={{margin:'auto',width:'50%'}}>
  <tr>
    <th style={{border: '1px solid red'}}>Column 1</th>
    <th style={{border: '1px solid blue'}}>Column 2</th>
    <th style={{border: '1px solid green'}}>Column 3</th>
  </tr>
  <tr>
    <td style={{border: '1px solid red'}}>Row 1, Column 1</td>
    <td style={{border: '1px solid blue'}}>Row 1, Column 2</td>
    <td style={{border: '1px solid green'}}>Row 1, Column 3</td>
  </tr>
  <tr>
    <td style={{border: '1px solid red'}}>Row 2, Column 1</td>
    <td style={{border: '1px solid blue'}}>Row 2, Column 2</td>
    <td style={{border: '1px solid green'}}>Row 2, Column 3</td>
  </tr>
</table>


