const dummyApiUrl = "https://jsonplaceholder.typicode.com/posts";
// const dummyApiUrl = "https://dummyjson.com/posts"; For Test

const todoBodyElement = document.querySelector("#todos-listing");
const todosListing = document.querySelector("#todos-listing");
const createPostBtnForm = document.querySelector("#create-post-form");
const postTitleInput = document.querySelector("#post_title");
const postBodyInput = document.querySelector("#post_body");
const editPostTitleElement = document.querySelector("#edit_post_title");
const editPostBodyElement = document.querySelector("#edit_post_body");
const editPostForm = document.querySelector("#edit-post-form");
const editPostId = document.querySelector("#edit_post_id");

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
              <a class="btn btn-primary edit-btn" href="#edit-post" data-post-id="${singleData.id}">Edit</a>
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
    confirm("Are you sure?") //true
    // true
  ) {
    const currentElementPostId = currentElement.getAttribute("data-post-id");
    // console.log("delete working start");
    // console.log(currentElementPostId, "currentElementPostId");
    fetch(`${dummyApiUrl}/${currentElementPostId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("delete successfully!");
        getPosts();
      })
      .catch((error) => console.error(error));
  }

  // Edit btn condition
  if (currentElement.className === "btn btn-primary edit-btn") {
    const currentElementPostId = currentElement.getAttribute("data-post-id");

    fetch(`${dummyApiUrl}/${currentElementPostId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        // const id = data.id;
        // const title = data.title;
        $("#edit-post").modal("show");
        const { id, title, body } = data;
        // console.log(id, title, body, "id,title,body");

        editPostTitleElement.value = title;
        editPostBodyElement.value = body;
        editPostId.value = currentElementPostId;
      })
      .catch((error) => console.error(error));
  }
});

// #Create Post

createPostBtnForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = postTitleInput.value;
  const body = postBodyInput.value;

  if (!title || !body) {
    alert("please fill the input fields");
    return;
  }

  fetch(dummyApiUrl, {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
      // title,
      // body
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "data");

      postTitleInput.value = "";
      postBodyInput.value = "";

      $("#create-post").modal("hide");
      getPosts();
    })
    .catch((error) => console.error());
  // .catch(console.error);
});

editPostForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = editPostTitleElement.value;
  const body = editPostBodyElement.value;

  if (!title || !body) {
    alert("please fill the input fields");
    return;
  }

  const currentPostId = editPostId.value;
  // console.log(currentPostId, "currentPostId");

  fetch(`${dummyApiUrl}/${currentPostId}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      body,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "edit form submit data");

      editPostTitleElement.value = "";
      editPostBodyElement.value = "";
      editPostId.value = "";

      $("#edit-post").modal("hide");

      getPosts();
    })
    .catch((error) => console.error(error));
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

// arrow functions
// function(){}

// () => {}

// (param) => {}
// param => {}
// param => value //auto return hogi
