const reviewText = document.getElementById('reviewText');
const charCount = document.getElementById('charCount');
const reviewCardsContainer = document.getElementById('reviewCards');

function getReviews() {
  try {
    const stored = localStorage.getItem("reviewCards");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {}
  return [];
}

function saveReviews(reviews) {
  localStorage.setItem("reviewCards", JSON.stringify(reviews));
}

function renderReviews() {
  const reviews = getReviews();
  reviewCardsContainer.innerHTML = "";
  reviews.forEach(({ name, text, rating }) => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? '<span class="text-warning">&#9733;</span>' : '<span class="text-warning">&#9734;</span>';
    }
    const card = document.createElement('div');
    card.className = 'card mb-2 review-card';
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <div class="mb-1">${stars}</div>
        <p class="card-text">${text}</p>
      </div>
    `;
    reviewCardsContainer.appendChild(card);
  });
}

reviewText.addEventListener('input', function() {
  charCount.textContent = `${reviewText.value.length} / 150 characters`;
});

document.getElementById('addReviewForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('reviewName').value;
  let text = reviewText.value;
  const rating = document.querySelector('input[name="rating"]:checked').value;

  if (text.length > 150) {
    text = text.substring(0, 150) + '...';
  }

  const reviews = getReviews();
  reviews.push({ name, text, rating: parseInt(rating) });
  saveReviews(reviews);
  renderReviews();

  this.reset();
  document.getElementById('star1').checked = true;
  charCount.textContent = '0 / 150 characters';
});

function addReview() {
  Swal.fire({
    title: `Hello !`,
    text: "Thanks for your feedback on Book Garden. Your review has been submitted successfully! 📚",
    icon: "success",
    confirmButtonText: "Thank You !"
  });
}

function orderBook() {
  const orderName = document.getElementById('orderName');
  Swal.fire({
    title: `Hello ${orderName.value}!`,
    text: "Thanks to Visiting Book Garden. Your order has been placed successfully! 📚",
    icon: "success",
    confirmButtonText: "Done  "
  });
}

renderReviews();
