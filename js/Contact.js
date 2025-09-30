// ...existing code...

// Add Review functionality
document.getElementById('addReviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById('reviewName').value.trim();
    const text = document.getElementById('reviewText').value.trim();
    const rating = document.querySelector('input[name="rating"]:checked').value;

    // Create stars HTML
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '&#9733;' : '&#9734;';
    }

    // Create card element
    const card = document.createElement('div');
    card.className = 'card mb-2 review-card';
    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <div class="mb-1">
                <span class="text-warning">${stars}</span>
            </div>
            <p class="card-text">${text}</p>
        </div>
    `;

    // Add to reviewCards
    document.getElementById('reviewCards').appendChild(card);

    // Optionally show success message
    if (window.Swal) {
        Swal.fire({
            icon: 'success',
            title: 'Review Added!',
            showConfirmButton: false,
            timer: 1200
        });
    }

    // Reset form
    document.getElementById('addReviewForm').reset();
    document.getElementById('charCount').textContent = '0 / 150 characters';
});

// Character count for textarea
document.getElementById('reviewText').addEventListener('input', function() {
    document.getElementById('charCount').textContent = `${this.value.length} / 150 characters`;
});


function orderBook(){
    Swal.fire({
        title: 'Order Placed Successfully!',
        text: 'Your book order has been placed. We will contact you soon.',
        icon: 'success',
        confirmButtonText: 'Thank YOu'
    });
}
// ...existing code...