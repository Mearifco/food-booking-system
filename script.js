// Create a class
class Booking {
    constructor(customer, food, quantity) {
        this.customer = customer;
        this.food = food;
        this.quantity = quantity;
    }
}

// Instantiate an object
const booking1 = new Booking("Mary", "Burger", 2);
console.log(booking1);

// Create an array
const bookings = [
    booking1,
    new Booking("John", "Pizza", 1),
    new Booking("Anna", "Spaghetti", 3)
];

// Display bookings
function displayBookings() {

    const list = document.getElementById("list");
    list.innerHTML = "";

    bookings.forEach((booking, index) => {

        list.innerHTML += `
        <div class="card">
            <h3>${booking.food}</h3>
            <p><strong>Customer:</strong> ${booking.customer}</p>
            <p><strong>Quantity:</strong> ${booking.quantity}</p>

            <button onclick="editBooking(${index})">Edit</button>
            <button onclick="deleteBooking(${index})">Delete</button>
        </div>
        `;
    });

}

displayBookings();

// Add booking
document.getElementById("addBtn").addEventListener("click", function(){

    const customer = document.getElementById("customer").value;
    const food = document.getElementById("food").value;
    const quantity = document.getElementById("quantity").value;

    if(customer === "" || food === "" || quantity === ""){
        alert("Please fill in all fields.");
        return;
    }

    const newBooking = new Booking(customer, food, quantity);

    bookings.push(newBooking);

    displayBookings();

    document.getElementById("customer").value = "";
    document.getElementById("food").value = "";
    document.getElementById("quantity").value = "";

});

// Delete booking
function deleteBooking(index){

    bookings.splice(index,1);

    displayBookings();

}

// Edit booking
function editBooking(index){

    const customer = prompt("Customer Name", bookings[index].customer);
    const food = prompt("Food Name", bookings[index].food);
    const quantity = prompt("Quantity", bookings[index].quantity);

    if(customer && food && quantity){

        bookings[index].customer = customer;
        bookings[index].food = food;
        bookings[index].quantity = quantity;

        displayBookings();

    }

}