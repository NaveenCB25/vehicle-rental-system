async function loadVehicles() {
    const res = await fetch("http://localhost:5000/api/vehicles");
    const data = await res.json();

    const container = document.getElementById("vehicleList");
    container.innerHTML = "";

    data.forEach(vehicle => {
        const div = document.createElement("div");
        div.classList.add("vehicle-card");

        const text = (vehicle.name + " " + vehicle.type).toLowerCase();

        let image = "";
        if (text.includes("bike")) {
            image = "https://source.unsplash.com/400x300/?bike";
        } else if (text.includes("car")) {
            image = "https://source.unsplash.com/400x300/?car";
        } else {
            image = "https://source.unsplash.com/400x300/?vehicle";
        }

        div.innerHTML = `
            <img src="${image}">
            <div class="vehicle-info">
                <h3>${vehicle.name}</h3>
                <p>Type: ${vehicle.type}</p>
                <p>Price: ₹${vehicle.price}</p>
                <button onclick="selectVehicle('${vehicle.name}')">Book Now</button>
            </div>
        `;

        container.appendChild(div);
    });
}

function selectVehicle(name) {
    localStorage.setItem("selectedVehicle", name);
    window.location.href = "booking.html";
}

loadVehicles();