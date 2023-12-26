// ...

// Load a random picture when the page loaded.
document.addEventListener("onload", getNewItem())

//Implement onclik function
let object = document.getElementById("dog");
object.addEventListener("click", getNewItem);

// setInterval(() => {
//   getNewItem();
// }, 10000);

async function getNewItem() {
    try {

        const BASE_URL = "https://dog.ceo/api/breeds/image/random";
        const options = {
            method: "GET",
            url: BASE_URL,
        };

        const response = await axios.get(`${BASE_URL}`);

        const newDogImage = response.data.message;

        console.log(newDogImage);

        // Write the new picture into the page
        //let cardDiv = document.querySelector(".card");
         let dogImg = document.getElementById("dogImg");
        const newImg = document.createElement("img");
        newImg.setAttribute('class', "img-fluid");
        newImg.setAttribute('src', newDogImage);
         newImg.setAttribute("id", "dogImg");
         //newImg.src=newDogImage;

        //let newImg2 = `<img src="${newDogImage}" class="img-fluid">`;
  
        //let newImg2 = `<img src="${newDogImage}" class="img-fluid">`;
        // cardDiv.innerHTML="";
        // cardDiv.appendChild(newImg);
        dogImg.replaceWith(newImg);








        return newDogImage

    } catch (errors) {
        console.error(errors);
    }
}



// // ...

// const createTodoElement = item => {
//     const todoElement = document.createElement('li');

//     todoElement.appendChild(document.createTextNode(item.title));

//     return todoElement;
//   };

//   const updateTodoList = todoItems => {
//     const todoList = document.querySelector('ul');

//     if (Array.isArray(todoItems) && todoItems.length > 0) {
//       todoItems.map(todoItem => {
//         todoList.appendChild(createTodoElement(todoItem));
//       });
//     } else if (todoItems) {
//       todoList.appendChild(createTodoElement(todoItems));
//     }
//   };

//   const main = async () => {
//     updateTodoList(await getTodoItems());
//   };

//   main();