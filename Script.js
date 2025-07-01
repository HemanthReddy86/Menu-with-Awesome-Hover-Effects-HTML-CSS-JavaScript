document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  // Handle click events
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove active class from all items
      navItems.forEach(function (navItem) {
        navItem.classList.remove("active");
      });

      // Add active class to clicked item
      this.classList.add("active");

      // Add ripple effect
      const ripple = document.createElement("span");
      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple 0.6s linear";
      ripple.style.pointerEvents = "none";

      // Set ripple size and position
      const size = Math.max(this.offsetWidth, this.offsetHeight);
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = "0";
      ripple.style.top = "0";

      this.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});
