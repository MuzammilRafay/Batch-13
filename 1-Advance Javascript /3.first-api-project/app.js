const button = document.querySelector("#button");
const output = document.querySelector("#output");

// event listener
button.addEventListener("click", function (event) {
  event.preventDefault(); //default functinality ruk jati hai
  //   console.log("clicked!");

  // fetch = webapi

  //get text
  //   fetch("data.txt")
  //     .then(function (file) {
  //       // jab then me return hoga ap dubara then use karsakte ho
  //       return file.text();
  //     })
  //     .then(function (data) {
  //       console.log(data, "   :text file data");
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // live server ka extension install karlien vscode me phr open karien

  //   get real data from customers.json file

  fetch("customers.json")
    .then(function (file) {
      // jab then me return hoga ap dubara then use karsakte ho
      return file.json();
    })
    .then(function (data) {
      console.log(data, "   :text file data");
      let outputTemporaryVariable = "";

      data.forEach(function (singleData) {
        outputTemporaryVariable += `
        <li>Id: ${singleData.id}<li>
        <li>Name: ${singleData.name}<li>
        <li>Company: ${singleData.company}<li>
        <li>Phone: ${singleData.phone}<li>
        `;
      });

      //   console.log(outputTemporaryVariable, "outputTemporaryVariable");

      output.innerHTML = `<ul>${outputTemporaryVariable}</ul>`;
    })
    .catch(function (error) {
      console.error(error);
    });
});
