// Function For Clearing The Form
function clearForm() {
  document.getElementById("dropdown").value = "Select Group";
  document.getElementById("subscriberStatus").innerText = "";
  let form = document.querySelector("form");
  form.reset();
}

// Logout Function and Clear Local Storage
function logOut() {
  localStorage.clear();
  location.reload();
}

// Reset Inner HTML
function resetInnerHTML() {
  let element = document.querySelector("form");
  element.innerHTML = `<label for="email">Email:</label>
  <input type="email" id="email" placeholder="Email"/>`;
}

// Remove Option Function From Inner HTML
function removeOption(ID) {
  let option = document.querySelector(`option[value="${ID}"]`);
  if (option) {
    option.remove();
  }
}
