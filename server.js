
document.getElementById("btn").addEventListener("click",request)
console.log("buton clicked");

// function request(){
//   axios.get("https://dummyjson.com/products")
//   .then ((res)=>{
//     document.getElementById("product").innerText=JSON.stringify (res.data.title)
//   }).catch((error)=>{
//     console.log(error);
//   })
// }


function request(){

    // axios.get("./data.json")
    //   .then((res)=>{
    //     document.getElementById('product').innerHTML=JSON.stringify(res.data.users);
    //   }).catch((error)=>{
    //     console.log(error);
    //   })
      axios.post("./data.json",{
        first__name:"maduri",
        last_name:"madurai",
        email:"madu@gmail.com"
      })
      .then(function(res){
        console.log(res)
      }).catch((error)=>{
            console.log(error);
      })

      }
    
  
   
  

      // document.getElementById("id").innerHTML=(`id:${res.data.id}`)
      // document.getElementById("title").innerHTML=(`title:${res.data.title}`)
      // document.getElementById("description").innerHTML=(`description:${res.data.description}`)
      // document.getElementById("price").innerHTML=(`price:${res.data.price}`)
      // document.getElementById("discountpercentage").innerHTML=(`discountpercentage:${res.data.discountpercentage}`)
      // document.getElementById("rating").innerHTML=(`rating:${res.data.rating}`)
      // document.getElementById("stock").innerHTML=(`stock:${res.data.stock}`)
      // document.getElementById("brand").innerHTML=(`brand:${res.data.brand}`)
      // document.getElementById("category").innerHTML=(`category:${res.data.category}`)
    
   



// const axios = require('axios');
// axios.get('http://webcode.me')
// .then((res)=>{
//   console.log(res.data);
// })

// async function request(){
//   let res=await axios.get('http://webcode.me')
//   let data=res.data
//   console.log(data)
// }
// request();



// HOW TO USE ASYNC //AWAIT

// async function request(){
//   let res=await axios.get("https://api.github.com/users/janbodnar");

//   let nOfFollower=res.data.followers;
//   let location=res.data.location;

//   console.log(`# follower:${nOfFollower}`)
//   console.log(`location:${location}`);
// }
// request();