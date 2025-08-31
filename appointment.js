document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("appointmentForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value.trim();

    if (name && email && phone && date && time) {
      // Save to localStorage
      const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");
      appointments.push({ name, email, phone, date, time, message });
      localStorage.setItem("appointments", JSON.stringify(appointments));

      // Show success message
      successMessage.style.display = "block";

      // Animate success
      successMessage.classList.add("show");
      
      // Reset form
      form.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    } else {
      alert("Please fill in all required fields.");
    }
  });
});
