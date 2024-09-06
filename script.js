document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const roleSelect = document.getElementById("role");
  const forgotPassword = document.getElementById("forgot-password");
  const forgotPasswordMessage = document.getElementById("forgot-password-message");
  const roleMessage = document.getElementById("role-message");
  const trafficCounter = document.getElementById("traffic-counter"); // Use existing HTML element

  // Define passwords and usernames for each role
  const credentials = {
    student: {
      password: "studentPass123", // Replace with your actual password
      usernames: ["student1", "student2"], // Replace with actual usernames
    },
    staff: {
      password: "staffPass123", // Replace with your actual password
      usernames: ["staff1", "staff2"], // Replace with actual usernames
    },
    warden: {
      password: "wardenPass123", // Replace with your actual password
      usernames: ["warden1", "warden2"], // Replace with actual usernames
    },
    admin: {
      password: "adminPass123", // Replace with your actual password
      usernames: ["admin1", "admin2"], // Replace with actual usernames
    },
  };

  // Initialize and display traffic count using the existing HTML element
  const initializeTrafficCount = () => {
    let trafficCount = parseInt(localStorage.getItem("trafficCount")) || 0; // Get the current count or initialize to 0
    trafficCount++; // Increment count
    localStorage.setItem("trafficCount", trafficCount); // Save the updated count to localStorage
    trafficCounter.textContent = `Total Traffic: ${trafficCount}`; // Update the existing HTML element
  };

  // Initial call to update the counter display on page load
  initializeTrafficCount();

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const role = roleSelect.value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (role && username && password) {
      const roleCredentials = credentials[role];
      if (
        roleCredentials &&
        password === roleCredentials.password &&
        roleCredentials.usernames.includes(username)
      ) {
        // Redirect based on selected role
        switch (role) {
          case "student":
            window.location.href = "./Comp/Hostel Student Dashboard/index.html"; // Update with the correct path
            break;
          case "staff":
            window.location.href = "./Comp/Hostel Staff Dashboard/index.html"; // Update with the correct path
            break;
          case "warden":
            window.location.href = "./Comp/Hostel Staff Dashboard/index.html"; // Update with the correct path
            break;
          case "admin":
            window.location.href = "./Comp/Admin Dashboard/index.html"; // Update with the correct path
            break;
          default:
            break;
        }
      } else {
        // Display an error message if the credentials are incorrect
        forgotPasswordMessage.textContent =
          "Incorrect username or password. Please try again.";
        forgotPasswordMessage.style.display = "block";
      }
    } else {
      // Display an error message if the role, username, or password is not selected
      roleMessage.textContent = "Please select your role, enter your username, and password";
    }
  });

  roleSelect.addEventListener("change", function () {
    const selectedRole = roleSelect.value;

    switch (selectedRole) {
      case "student":
        roleMessage.textContent = "Logging in as student";
        break;
      case "staff":
        roleMessage.textContent = "Logging in as staff";
        break;
      case "warden":
        roleMessage.textContent = "Logging in as warden";
        break;
      case "admin":
        roleMessage.textContent = "Logging in as admin";
        break;
      default:
        roleMessage.textContent = "Please select your role";
    }

    if (selectedRole === "admin") {
      forgotPassword.classList.add("hidden"); // Hide for admin
      forgotPasswordMessage.style.display = "none"; // Ensure message is hidden when admin is selected
    } else {
      forgotPassword.classList.remove("hidden"); // Show for student, staff, and warden
    }
  });

  // Add event listener for "Forgot Password"
  forgotPassword.addEventListener("click", function () {
    const selectedRole = roleSelect.value;
    if (selectedRole !== "admin") {
      // Show message only if role is not admin
      forgotPasswordMessage.textContent = "Contact Admin if you forgot your password.";
      forgotPasswordMessage.style.display = "block";
    }
  });
});
