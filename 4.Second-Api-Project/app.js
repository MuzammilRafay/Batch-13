const dummyApiUrl = "https://jsonplaceholder.typicode.com/posts";
const todoBodyElement = document.querySelector("#todos-listing");
const todosListing = document.querySelector("#todos-listing");
// function name() {}
// arrow function
// const name = () => {
//     asdfasdf
//     asdfasdfas
//     DataTransferItemListdfas
// }

const getPosts = () => {
  console.log("your function is call");
  fetch(dummyApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //   console.log(data, "data");
      let output = "";
      data.forEach(function (singleData) {
        output =
          output +
          `<tr>
            <td>${singleData.id}</td>
            <td>${singleData.userId}</td>
            <td>${singleData.title}</td>
            <td>
              <a class="btn btn-primary edit-btn" href="#edit-post">Edit</a>
            </td>
            <td>
              <a href="#" class="btn btn-danger delete-btn" data-post-id="${singleData.id}">Delete</a>
            </td>
          </tr>`;
      });

      todoBodyElement.innerHTML = output;
    })
    .catch(function (error) {
      console.error(error);
    });
};

getPosts();

// parent par click lagane se sare children or sub-children par click lagjaega isko event bubling bhi kehte hein
todosListing.addEventListener("click", function (e) {
  e.preventDefault();
  const currentElement = e.target;
  //   console.log(currentElement, "currentElement");

  if (
    currentElement.className === "btn btn-danger delete-btn" &&
    // confirm("Are you sure?")
    true
  ) {
    const currentElementPostId = currentElement.getAttribute("data-post-id");
    // console.log("delete working start");
    console.log(currentElementPostId, "currentElementPostId");
  }
});
/*
Rest Api Pattern

======Get All Api======
METHOD = GET https://jsonplaceholder.typicode.com/posts (get all posts)
======Get By Id Api======
METHOD = GET https://jsonplaceholder.typicode.com/posts/6 (get 5 id post)
======Create Api======
METHOD = POST https://jsonplaceholder.typicode.com/posts (create post)
======Update Api======
METHOD = PUT https://jsonplaceholder.typicode.com/posts/6 (update post for 6 id)
METHOD = PATCH https://jsonplaceholder.typicode.com/posts/6 (update post for 6 id)
======Delete Api======
METHOD = DELETE https://jsonplaceholder.typicode.com/posts/6 (delete 6 id post)




Rest Api Pattern

GET	    /users              (get all users)
GET	    /users/1            (get post by id)
POST	/users              (create post)
PUT	    /users/1            (update specific post with all data like title,body)
PATCH	/users/1            (update specific post partially with some data like only title or body)
DELETE  /users/1            (delete post by id)

*/
