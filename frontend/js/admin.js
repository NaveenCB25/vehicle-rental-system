const API = "http://localhost:5000";

// Load everything
window.onload = () => {
    loadVehicles();
    loadBookings();
};

// 🔹 Add Vehicle
function addVehicle() {
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const price = document.getElementById("price").value;

    fetch(`${API}/api/vehicles/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, type, price })
    })
    .then(res => res.json())
    .then(() => {
        alert("Vehicle Added");
        loadVehicles();
    });
}

// 🔹 Load Vehicles
function loadVehicles() {
    fetch(`${API}/api/vehicles`)
        .then(res => res.json())
        .then(data => {
            let html = "";
            data.forEach(v => {
                html += `
                    <div>
                        ${v.name} - ₹${v.price}
                        <button onclick="deleteVehicle('${v._id}')">Delete</button>
                    </div>
                `;
            });
            document.getElementById("vehicleList").innerHTML = html;
        });
}

// 🔹 Delete Vehicle
function deleteVehicle(id) {
    fetch(`${API}/api/vehicles/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        alert("Deleted");
        loadVehicles();
    });
}

// 🔹 Load Bookings / Payments
function loadBookings() {
    fetch(`${API}/api/bookings`)
        .then(res => res.json())
        .then(data => {
            let html = "";
            data.forEach(b => {
                html += `
                    <div>
                        ${b.vehicle} | ${b.name} | ₹${b.amount}
                    </div>
                `;
            });
            document.getElementById("bookingList").innerHTML = html;
        });

function loadBookings() {
    fetch("http://localhost:5000/api/bookings")
        .then(res => res.json())
        .then(data => {
            let html = "";
            data.forEach(b => {
                html += `
                    <div>
                        ${b.vehicle} | ${b.name} | ₹${b.amount} | ${b.status}
                    </div>
                `;
            });
            document.getElementById("bookingList").innerHTML = html;
        });
}
}