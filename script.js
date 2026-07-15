
class Booking {
    constructor(customer, food, quantity) {
        this.customer = customer;
        this.food = food;
        this.quantity = quantity;
    }
}


const booking1 = new Booking("Mary", "Burger", 2);
console.log(booking1);


const bookings = [
    booking1,
    new Booking("John", "Pizza", 1),
    new Booking("Anna", "Spaghetti", 3)
];


const dialog = document.getElementById("editDialog");
const updateBtn = document.getElementById("updateBtn");
const cancelBtn = document.getElementById("cancelBtn");

let currentIndex = -1;


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

document.getElementById("addBtn").addEventListener("click", function () {

    const customer = document.getElementById("customer").value;
    const food = document.getElementById("food").value;
    const quantity = document.getElementById("quantity").value;

    if (customer === "" || food === "" || quantity === "") {
        alert("Please fill in all fields.");
        return;
    }

    bookings.push(new Booking(customer, food, quantity));

    displayBookings();

    document.getElementById("customer").value = "";
    document.getElementById("food").value = "";
    document.getElementById("quantity").value = "";
});


function deleteBooking(index) {
    bookings.splice(index, 1);
    displayBookings();
}


function editBooking(index) {

    currentIndex = index;

    document.getElementById("editCustomer").value = bookings[index].customer;
    document.getElementById("editFood").value = bookings[index].food;
    document.getElementById("editQuantity").value = bookings[index].quantity;

    dialog.showModal();
}


updateBtn.addEventListener("click", function () {

    bookings[currentIndex].customer =
        document.getElementById("editCustomer").value;

    bookings[currentIndex].food =
        document.getElementById("editFood").value;

    bookings[currentIndex].quantity =
        document.getElementById("editQuantity").value;

    displayBookings();

    dialog.close();
});

cancelBtn.addEventListener("click", function () {
    dialog.close();
});