let products = {
  data: [
    {
      productName: "Aahwahan",
      category: "Food",
      image: "images/aha.png",
      links : "info/aah.html",
    },
    {
      productName: "UPAY NGO",
      category: "Book",
      image: "images/upay.png",
      links : "info/upay.html",
    },
    {
      productName: "Vidyaranya",
      category: "Food",
      image: "images/vidya.jpg",
      links : "info/vidya.html",
    },
    {
      productName: "Yuva Bengaluru",
      category: "Cloth",
      image: "images/yuva.png",
      links : "info/yuva.html",
    },
    {
      productName: "Makkala Jagriti",
      category: "Cloth",
      image: "images/m.png",
      links : "info/mak.html",
    },
    {
      productName: "Smile Foundation",
      category: "Food",
      image: "images/smile.png",
      links : "info/smile.html",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  card.appendChild(container);
   //button
   var a = document.createElement("a");
  var linkText = document.createTextNode("DONATE");
  a.appendChild(linkText);
  a.title = i.productName;
  a.href = i.links;
  card.appendChild(a);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let card = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      card[index].classList.remove("hide");
    } else {
      //hide others
      card[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
