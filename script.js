// Sample data (can be dynamically fetched later)
const doctorName = "Dr. Smith";
const appointments = [
  { patient: "John Doe", time: "9:00 AM - 9:30 AM" },
  { patient: "Jane Roe", time: "10:00 AM - 10:45 AM" },
  { patient: "Alice Lee", time: "11:15 AM - 12:00 PM" },
  { patient: "Bob Martin", time: "2:00 PM - 2:30 PM" }
];

// Set welcome message
document.getElementById("welcome-text").innerText = `Welcome, ${doctorName}`;

// Populate appointment list
const list = document.getElementById("appointments-list");

appointments.forEach((appointment) => {
  const li = document.createElement("li");
  li.className = "appointment";
  li.innerHTML = `
    <div class="patient-name">${appointment.patient}</div>
    <div class="time">${appointment.time}</div>
  `;
  list.appendChild(li);
});
