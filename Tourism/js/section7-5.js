// Get draggable elements and drop zones
const rice = document.getElementById("rice");
const bossImg = document.querySelector("#boss img"); // Reference boss's img tag directly
const sushi = document.getElementById("sushi");
const customer = document.getElementById("customer");

// Add event listeners for drag and drop
rice.addEventListener("dragstart", dragStart);
bossImg.parentElement.addEventListener("dragover", dragOver); // Add listener on boss container
bossImg.parentElement.addEventListener("drop", dropRice);

sushi.addEventListener("dragstart", dragStart);
customer.addEventListener("dragover", dragOver);
customer.addEventListener("drop", dropSushi);

function dragStart(e) {
  // Set the ID of the dragged element
  e.dataTransfer.setData("text", e.target.id);
}

function dragOver(e) {
  e.preventDefault(); // Necessary to allow a drop
}

function dropRice(e) {
  e.preventDefault();
  const droppedItemId = e.dataTransfer.getData("text");
  if (droppedItemId === "rice") {
    // Hide rice and show sushi after rice is dropped on boss
    rice.style.display = "none"; // Hide rice
    sushi.style.display = "block"; // Show sushi
    sushi.hidden = false;
    boss.querySelector("p").textContent = "Wait for customer's reaction...";
  }
}

function dropSushi(e) {
  e.preventDefault();
  const droppedItemId = e.dataTransfer.getData("text");
  if (droppedItemId === "sushi") {
    // Sushi dropped on customer
    sushi.style.display = "none"; // Hide sushi
    customer.querySelector("img").classList.add("happy"); // Make customer happy
    customer.querySelector("p").textContent = "Yummy!"; // Show happy message
    boss.querySelector("p").textContent = "Happy!";
    // Change boss image after sushi is delivered
    bossImg.src = "../webimg/sec7-5/sushiboss2.svg"; // Replace with the new image path for the boss
  }
}
