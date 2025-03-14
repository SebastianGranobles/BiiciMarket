
document.getElementById("aboutBtn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("aboutModal").style.display = "block";
});

function closeModal() {
    document.getElementById("aboutModal").style.display = "none";
}

document.getElementById("aboutModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeModal();
    }
});