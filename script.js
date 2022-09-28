let books = [
    {
        book: "1984",
        author: "Corc Oruell",
        id:1
    },

    {
        book: "Oliver Twist",
        author: "Charles Dickens",
        id:2

    },
    {
        book: "inferno",
        author: "Dan Brawn",
        id:3
    },
    {
        book: "test",
        author: "Dan Brawn",
        id:4
    },
    {
        book: "kitab2",
        author: "Dan Brawn",
        id:5
    },
    {
        book: "Antonio",
        author: "Dan Brawn",
        id:6
    }
]
let nmbr=0
let data=""
books.forEach(function(item){
   
data+=` <tr>
<th scope="row">${nmbr+=1}</th>
<td>${item.book}</td>
<td>${item.author}</td>
<td>${item.id}</td>
</tr>`


})
document.getElementById("tbl").innerHTML=data


document.getElementById("inp")
function Add(){
let fltr=books.filter(function(item,ind){
   return item.ind==inp.value
})
  if(inp.value==fltr){tbl.innerHTML=`${fltr}`}
  else{
    tbl.innerHTML="yoxdur"
  }
 
} document.getElementById("tbl").innerHTML=data

