/* scripts.js */

/* 1. Rotating text for "I specialize in ..." */
document.addEventListener("DOMContentLoaded", function() {
    const rotateText = document.querySelector(".rotate-text");
    
    // Skills to rotate through
    const skills = [
      "Data Preprocessing",
      "Data Visualization",
      "Machine Learning",
      "Deep Learning",
      "Artificial Intelligence",
      "Translation",
      "Transcription",
      "Subtitling"
    ];
  
    let currentSkillIndex = 0;
  
    function rotateSkill() {
      // Fade out the current text
      rotateText.classList.remove("fade-in");
      rotateText.classList.add("fade-out");
  
      // After fade-out completes (0.5s), change text & fade in
      setTimeout(() => {
        rotateText.textContent = skills[currentSkillIndex];
        rotateText.classList.remove("fade-out");
        rotateText.classList.add("fade-in");
  
        // Move to next skill (wrap around at end)
        currentSkillIndex = (currentSkillIndex + 1) % skills.length;
      }, 500);
    }
  
    // Rotate skill every 2 seconds
    setInterval(rotateSkill, 2000);
  
    // Initialize with the first skill
    rotateText.textContent = skills[currentSkillIndex];
    currentSkillIndex++;
  });
  
  
  /* 2. Portfolio Filtering */
  document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".portfolio-tabs li");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", function() {
        // 1) Remove .active from all tabs and tab-contents
        tabs.forEach((t) => t.classList.remove("active"));
        tabContents.forEach((c) => c.classList.remove("active"));
  
        // 2) Add .active to the clicked tab
        this.classList.add("active");
  
        // 3) Show the matching tab-content
        const targetId = this.getAttribute("data-tab"); // e.g. "dsai" or "translation"
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.add("active");
        }
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;    // which pair of reviews is showing
    const reviewCards = document.querySelectorAll(".review-card");
    const wrapper = document.querySelector(".reviews-slide-wrapper");
    
    // each review card is 50% width, so each "slide" is 100% shift
    // how many pairs do we have?
    const totalCards = reviewCards.length;
    // each pair: 2 cards (0-1, 2-3, 4-5, etc.)
    // total slides = number of pairs
    const totalSlides = Math.ceil(totalCards / 2);

    function showNext() {
      currentSlide++;
      // if we go past the last pair, loop back to start
      if (currentSlide >= totalSlides) {
        currentSlide = 0;
      }
      // shift the wrapper by currentSlide * 100%
      wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // automatically move to next pair every 4 seconds
    setInterval(showNext, 4000);
  });

