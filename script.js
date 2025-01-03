// document.getElementById("form").addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const name = document.getElementById("name").value;
//   const month = document.getElementById("month").value;
//   const day = document.getElementById("day").value;
//   const year = document.getElementById("year").value;

//   try {
//     const response = await fetch("/api/updateUsers", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, month, day, year }),
//     });

//     const result = await response.json();
//     if (response.ok) {
//       console.log("User added successfully:", result);
//       alert("User added successfully!");
//     } else {
//       console.error("Error adding user:", result.error);
//       alert("Error adding user: " + result.error);
//     }
//   } catch (error) {
//     console.error("Network error:", error);
//     alert("Failed to connect to server.");
//   }
// });



// async function fetchAndConvertToMatrix() {
//     try {
//       const response = await fetch('/api/getAllUsers');
//       const result = await response.json();
  
//       if (response.ok) {
//         // Convert array of objects to a matrix
//         const usersMatrix = result.users.map(user => [user.name, user.month, user.day, user.year]);
//         console.log('Users Matrix:', usersMatrix);
//         return usersMatrix;
//       } else {
//         console.error('Error fetching users:', result.error);
//         alert('Error fetching users: ' + result.error);
//       }
//     } catch (error) {
//       console.error('Network error:', error);
//       alert('Failed to connect to server.');
//     }
// }

// fetchAndConvertToMatrix();  
