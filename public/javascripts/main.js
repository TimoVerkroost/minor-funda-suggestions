(function(){
  require("lazysizes");

  // Form data save
  if (typeof(Storage) !== "undefined") {
    // Set form values
    var formInput = document.getElementById("searchFields");
    // check if form is on page
    if (formInput) {
      formInput.removeEventListener("submit", getFormValues);
      // On submit get values
      formInput.addEventListener("submit", getFormValues);
      // FormInput function
      function getFormValues() {
        var searchFieldInput = document.getElementById("searchField").value;
        localStorage.setItem("fundaPlace", searchFieldInput);
        // Get range input value and set in localStorage to use everywhere in the application
        var range = document.getElementById("range").value;
        localStorage.setItem("fundaRange", range);
        // Get buildYear input value and set in localStorage to use everywhere in the application
        var buildYear = document.getElementById("buildYear").value;
        localStorage.setItem("fundaBuildYear", buildYear);
        // Get typeHome input value and set in localStorage to use everywhere in the application
        var typeHome = document.getElementById("typeHome").value;
        localStorage.setItem("fundaTypeHome", typeHome);
        // Get buildYear input value and set in localStorage to use everywhere in the application
        var minPrice = document.getElementById("minPrice").value;
        localStorage.setItem("fundaMinPrice", minPrice);
        // Get buildYear input value and set in localStorage to use everywhere in the application
        var maxPrice = document.getElementById("maxPrice").value;
        localStorage.setItem("fundaMaxPrice", maxPrice);
      }

      // Get form values
      if (localStorage.getItem("fundaPlace") != null) {
        // Fill in the stored values
        document.getElementById("searchField").value = localStorage.fundaPlace;
        document.getElementById("range").value = localStorage.fundaRange;
        document.getElementById("buildYear").value = localStorage.fundaBuildYear;
        document.getElementById("typeHome").value = localStorage.fundaTypeHome;
        document.getElementById("minPrice").value = localStorage.fundaMinPrice;
        document.getElementById("maxPrice").value = localStorage.fundaMaxPrice;
      }
    }
  }

  if (navigator.onLine !== true) {
    var images = document.querySelectorAll('picture > *'), i;

    for (i = 0; i < images.length; ++i) {
      images[i].setAttribute("src", "images/dummy-image.jpg");
      images[i].setAttribute("data-src", "images/dummy-image.jpg");
      images[i].setAttribute("data-srcset", "images/dummy-image.jpg");
    }
  }
}());