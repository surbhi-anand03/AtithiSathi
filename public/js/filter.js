document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".filters");
    const listings = document.querySelectorAll(".listing-card");

    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            const category = filter.dataset.filter;

            listings.forEach(listing => {
                if (category === "all" || !category) {
                    listing.style.display = "block";
                }
                else if (listing.dataset.category === category) {
                    listing.style.display = "block";
                }
                else {
                    listing.style.display = "none";
                }
            });

            filters.forEach(f => f.classList.remove("active"));
            filter.classList.add("active");
        });
    });
});
