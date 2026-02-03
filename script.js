window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const navToggle = document.getElementById("navToggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    // Animate hamburger to X
    const spans = navToggle.querySelectorAll("span");
    if (navMenu.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });

  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      const spans = navToggle.querySelectorAll("span");
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (href === "#") {
      e.preventDefault();
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

const animateElements = document.querySelectorAll(
  ".collection-card, .creator-card, .gallery-item",
);
animateElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

s;
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img[src]");

  images.forEach((img) => {
    img.classList.add("loading");

    img.addEventListener("load", () => {
      img.classList.remove("loading");
      img.style.opacity = "1";
    });
    img.addEventListener("error", () => {
      img.classList.remove("loading");
      img.style.backgroundColor = "#1C1C1C";
    });
  });
});

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("Gallery item clicked - implement lightbox here");
  });
});

const ctaButtons = document.querySelectorAll(
  ".btn-primary, .btn-accent, .nav-cta",
);

ctaButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Only prevent default for # links
    if (button.getAttribute("href") === "#") {
      e.preventDefault();

      // Placeholder for subscription modal/form
      console.log("Subscription triggered - implement modal here");

      // Example: You could show a modal here
      // showSubscriptionModal();
    }
  });
});

const heroImage = document.querySelector(".hero-image img, .header-image img");

if (heroImage) {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
  });
}

/* ===================================
   PRICE OPTION SELECTION
   =================================== */

const priceOptions = document.querySelectorAll(".price-option");

priceOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Remove active class from all options
    priceOptions.forEach((opt) => opt.classList.remove("selected"));

    // Add active class to clicked option
    option.classList.add("selected");

    // Update button text based on selection
    const unlockButtons = document.querySelectorAll(".unlock-buttons .btn");
    if (option.classList.contains("recommended")) {
      // Subscription selected
      if (unlockButtons[0]) {
        unlockButtons[0].textContent = "Subscribe Now";
      }
    } else {
      // One-time purchase selected
      if (unlockButtons[1]) {
        unlockButtons[1].textContent = "Purchase Now";
      }
    }
  });
});

function handleResize() {
  const width = window.innerWidth;

  if (width < 480) {
    document.querySelectorAll(".grid-4").forEach((grid) => {
      grid.style.gridTemplateColumns = "1fr";
    });
  }
}

window.addEventListener("resize", handleResize);
handleResize(); // Call on load

const savePreference = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log("Local storage not available");
  }
};

const getPreference = (key) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.log("Local storage not available");
    return null;
  }
};

/* ===================================
   CONSOLE WELCOME MESSAGE
   =================================== */

console.log(
  "%c LUXE ",
  "background: #C41E3A; color: #fff; font-size: 20px; font-weight: bold; padding: 10px;",
);
console.log(
  "%c Bold. Confident. Unapologetic. ",
  "font-size: 14px; color: #D4A574;",
);
console.log(
  "Welcome to the console. This site is built with modern web standards.",
);
