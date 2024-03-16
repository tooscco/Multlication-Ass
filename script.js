//   var columnME = document.getElementById("column")
//   var rowMe= document.getElementById("row")
  
  
//   function ShowMe(){
//     for (col = 1; col<=columnME.value; col++){
//     } for (row= 1; row<= rowMe.value; row++){
//         console.log(`${col} + ${row} = ${parseFloat(col) + parseFloat(row)}`);
//     }
//   }


// var table ='<table>';
// function multiply(){
// for(i = 1; i <=pleaseWork.value; i++){
//     for (j=1; j<=pleasew.vale; j++);{
//         table += `<td>${i} * ${j} = ${i*j}</td>`;
//         table += '</tr>'
//     }
//     table += '</table>'
//     var showm =document.getElementById('display');
//     showm.innerHTML =table;
// }
// }

// for (i=1; i <= 10; i++){
//     console.log(i);
//     for(j=1; j<=10; j++){
//         console.log(`${i} x ${j} = ${i*j}`);
//         // show.innerHTML += `<p>${i} x ${j} = ${i*j}</p> `
//     }
// }


var pleaseWork = document.getElementById('column')
var pleasew = document.getElementById('row')

function addition() {
    var tableHTML = `<table>`
     for(i = 1; i <=pleaseWork.value; i++){
         tableHTML += `<tr>`
         for(j = 1; j <=pleasew.value; j++){
            console.log(` ${i} + ${j} =${parseFloat(i) + parseFloat(j)}`); 
            tableHTML += `<td> ${i} + ${j} =${parseFloat(i) + parseFloat(j)}</td>`
         }
         tableHTML += `</tr>`
     }
     tableHTML += `</table>`
 
     document.getElementById('display').innerHTML = tableHTML;
 }

 function subtract() {
    var tableHTML = `<table>`
     for(i = 1; i <=pleaseWork.value; i++){
         tableHTML += `<tr>`
         for(j = 1; j <=pleasew.value; j++){
            console.log(` ${i} - ${j} =${i-j}`); 
            tableHTML += `<td> ${i} - ${j} =${i-j}</td>`
         }
         tableHTML += `</tr>`
     }
     tableHTML += `</table>`
 
     document.getElementById('display').innerHTML = tableHTML;
 }

 function divide() {
    var tableHTML = `<table>`
     for(i = 1; i <=pleaseWork.value; i++){
         tableHTML += `<tr>`
         for(j = 1; j <=pleasew.value; j++){
            console.log(` ${i} / ${j} =${i/j}`); 
            tableHTML += `<td> ${i} / ${j} =${i/j}</td>`
         }
         tableHTML += `</tr>`
     }
     tableHTML += `</table>`
 
     document.getElementById('display').innerHTML = tableHTML;
 }

function multiply() {
   var tableHTML = `<table>`
    for(i = 1; i <=pleaseWork.value; i++){
        tableHTML += `<tr>`
        for(j = 1; j <=pleasew.value; j++){
           console.log(` ${i} x ${j} =${i*j}`); 
           tableHTML += `<td> ${i} x ${j} =${i*j}</td>`
        }
        tableHTML += `</tr>`
    }
    tableHTML += `</table>`

    document.getElementById('display').innerHTML = tableHTML;
}


 const pleasenow = document.getElementById('pleaseshowme')
 const table = document.getElementById('display')

 pleasenow.addEventListener('click', () =>{
    table.classList.remove('d-none');
    table.classList.add('d-block');
 })


