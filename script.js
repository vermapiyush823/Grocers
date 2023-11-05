//  ---- This is for the testimonial section ----


// Array of testimonies
var testimonies = [
    {
        name: 'Allen',
        text: 'I am very happy with the service. I am able to get fresh vegetables and fruits at my doorstep. The delivery is also very fast.',
        image: './images/Ramesh.jpg'

    },
    {
        name: 'Harry',
        text: 'This is the best service I have ever used. I am able to get fresh vegetables and fruits at my doorstep. The delivery is also very fast.',
        image: './images/Suresh.jpg'

    },
    {
        name: 'Ron',
        text: ' I am able to get fresh vegetables and fruits at my doorstep. The delivery is also very fast. This is the best service I have ever used.',
        image: './images/Rajesh.jpg'

    },
];



    var currentTestimony = 0;

    // Function to show a specific testimony
    function showTestimony(index) {
        // Get the h2 and p elements
        var h2 = document.querySelector('.testimony h2');
        var p = document.querySelector('.testimony p');
        var img = document.querySelector('.testimonyimage1');

        // Set the content of the h2 and p elements
        h2.textContent = testimonies[index].name;
        p.textContent = testimonies[index].text;
        img.src = testimonies[index].image;
    }

    // Function to show next testimony
    function showNextTestimony() {
        // Show current testimony
        showTestimony(currentTestimony);

        // Move to next testimony
        currentTestimony = (currentTestimony + 1) % testimonies.length;
    }

    // Show first testimony initially
    showNextTestimony();

    // Change testimony every 2 seconds
    setInterval(showNextTestimony, 5000);

    // Functions for each list item
    function first() {
        currentTestimony = 0;
        showTestimony(currentTestimony);
    }

    function second() {
        currentTestimony = 1;
        showTestimony(currentTestimony);
    }

    function third() {
        currentTestimony = 2;
        showTestimony(currentTestimony);
    }

// ---- End of testimonial section ----


// ---- This is for smooth scrolling ----
$(document).ready(function () {
    let sections = $("section");
    $(window).scroll(function () {
        sections.each(function () {
            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 300;
            let height = $(this).outerHeight();

            if (top >= offset && top < offset + height) {
                $(this).addClass("show-animate");
            } else {
                $(this).removeClass("show-animate");
            }
        });
    });
});
// ---- End of smooth scrolling ----

// ----- This is for the Catalog section
var products = [
    { name: 'Tomato', price: 60, imgSrc: "./images/tomato.jpg", id: 1, category: 'Vegetables' ,avgRating: 4.5, noOfReviews: 450},
    { name: 'Milk', price: 50, imgSrc: "./images/milk.png", id: 2, category: 'Dairy' ,avgRating: 4, noOfReviews: 100},
    { name: 'Potato', price: 40, imgSrc: "./images/potato.png", id: 3, category: 'Vegetables',avgRating: 3.5, noOfReviews: 743 },
    { name: 'Onion', price: 30, imgSrc: "./images/onion.png", id: 4, category: 'Vegetables' ,avgRating: 5.0, noOfReviews: 232},
    { name: 'Cabbage', price: 20, imgSrc: "./images/cabbage.png", id: 5, category: 'Vegetables' ,avgRating: 2.5, noOfReviews: 432},
    { name: 'Cauliflower', price: 10, imgSrc: "./images/couliflower.png", id: 6, category: 'Vegetables' ,avgRating: 3, noOfReviews: 453},
    { name: 'Carrot', price: 60, imgSrc: "./images/carrot.png", id: 7, category: 'Vegetables' ,avgRating: 5, noOfReviews: 565},
    { name: 'Cucumber', price: 50, imgSrc: "./images/cucumber.png", id: 8, category: 'Vegetables' ,avgRating: 4.5, noOfReviews: 654},
    { name: 'Apple', price: 120, imgSrc: "./images/apple.png", id: 9, category: 'Fruits',avgRating: 4, noOfReviews: 545 },
    { name: 'Orange', price: 80, imgSrc: "./images/orange.png", id: 10, category: 'Fruits' ,avgRating: 4.5, noOfReviews: 213},
    { name: 'Cheese', price: 200, imgSrc: "./images/cheese.png", id: 11, category: 'Dairy' ,avgRating: 4.5, noOfReviews: 565},
];

var containerDiv = document.querySelector('.container');

products.map(function (product, index) {
    var productDiv = document.createElement('div');
    productDiv.className = 'containers';

    // Add an event listener to the product container
    productDiv.addEventListener('click', function() {
        window.location.href = 'product_page.html?id=' + index;
    });
    var img = document.createElement('img');
    img.src = product.imgSrc;
    productDiv.appendChild(img);

    var h3 = document.createElement('h3');
    h3.textContent = product.name;
    productDiv.appendChild(h3);

    var span = document.createElement('span');
    span.innerHTML = '₹' + product.price + '/Kg <a href="">Add to Cart</a>';
    productDiv.appendChild(span);

    containerDiv.appendChild(productDiv);
});

// ----- End of Catalog section

