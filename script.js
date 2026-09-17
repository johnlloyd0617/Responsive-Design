// Get the form
const studentForm = document.getElementById("studentForm");

// Get the input fields
const studentName = document.getElementById("studentName");
const studentProgram = document.getElementById("studentProgram");

// Get the student container
const studentContainer = document.getElementById("studentContainer");

// Get the student count
const studentCount = document.getElementById("studentCount");

// Get the empty message
const emptyMessage = document.getElementById("emptyMessage");


// =========================
// FORM SUBMISSION
// =========================

studentForm.addEventListener("submit", function(event) {

    // Prevent the webpage from refreshing
    event.preventDefault();

    // Get the values entered by the user
    const name = studentName.value.trim();
    const program = studentProgram.value.trim();

    // Check if the fields are empty
    if (name === "" || program === "") {
        alert("Please enter the student name and program.");
        return;
    }

    // Create the student card
    createStudentCard(name, program);

    // Clear the form
    studentForm.reset();

    // Update student count
    updateStudentCount();

});


// =========================
// CREATE STUDENT CARD
// =========================

function createStudentCard(name, program) {

    // Hide the empty message
    emptyMessage.style.display = "none";

    // Create a new div
    const card = document.createElement("div");

    // Give the div the student-card class
    card.classList.add("student-card");


    // Get the first letter of the student's name
    const firstLetter = name.charAt(0).toUpperCase();


    // Add student information
    card.innerHTML = `
        <div class="student-icon">
            ${firstLetter}
        </div>

        <h3>${name}</h3>

        <p>
            <strong>Program:</strong><br>
            ${program}
        </p>

        <button class="remove-btn">
            Remove Student
        </button>
    `;


    // Get the Remove button
    const removeButton = card.querySelector(".remove-btn");


    // Add click event to Remove button
    removeButton.addEventListener("click", function() {

        // Remove the student card
        card.remove();

        // Update student count
        updateStudentCount();


        // Show empty message if there are no students
        const remainingStudents =
            studentContainer.querySelectorAll(".student-card").length;

        if (remainingStudents === 0) {
            emptyMessage.style.display = "block";
        }

    });


    // Add the student card to the webpage
    studentContainer.appendChild(card);
}


// =========================
// UPDATE STUDENT COUNT
// =========================

function updateStudentCount() {

    // Count all student cards
    const totalStudents =
        studentContainer.querySelectorAll(".student-card").length;


    // Display correct text
    if (totalStudents === 1) {

        studentCount.textContent = "1 Student";

    } else {

        studentCount.textContent =
            totalStudents + " Students";

    }
}