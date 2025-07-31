// Initialize Swiper for the image gallery
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// A small bugfix: If you want to use transitions, you should add
// the opacity-0 and scale-95 classes after a slight delay.
// This ensures the browser has time to render the modal first.
document.addEventListener('DOMContentLoaded', () => {

  const letterData = {
    sad: {
      title: "For When You're Sad",
      // IMPORTANT: Changed image file paths to lowercase for consistency and to fix potential GitHub Pages issues.
      // Please ensure your files are named exactly 'img1.jpg', 'img2.png', etc. in your repository.
      image: "img1.jpg", 
      text: "My dearest, I hate thinking of you feeling sad and you did not call me, that means either we had a fight or I am sleeping. But whatever the reason, baby, just know that you mean the world to me and I love you more than anything. I am here with you and in your life forever no matter how bad things get. I have never loved someone like you before, baby. Please be alright for me. I love you more than words can say."
    },
    hurt: {
      title: "For When I've Hurt You",
      image: "img2.png",
      text: "I know that my words or actions have hurt you, and for that, I am endlessly sorry. There is no excuse for causing you pain. Looking at this picture, I'm reminded of how precious our connection is. You are the most important person in my life, and the last thing I ever want to do is hurt you. Please know that I'm reflecting on my actions and I will do everything I can to be better for you, for us. I love you forever and ever and ever."
    },
    miss: {
      title: "For When You Miss Me",
      image: "img3.jpg",
      text: "I know it's hard when we're apart. I'm missing you like crazy, too. Just close your eyes and imagine I'm right there with you, holding your hand. Look at this photo and remember that no matter the distance, we're always connected. I'm counting down the seconds until I can see you again. I love you."
    },
    asleep: {
      title: "For When I'm Asleep",
      image: "img4.jpg",
      text: "Hello, my love. If you're reading this, it probably means I've drifted off and you're still awake. I'm sorry I couldn't stay up with you. I hope you can get some rest soon, too. Know that I'm probably dreaming of you. I can't wait to wake up and talk to you in the morning. Sweet dreams."
    }
  };

  const letterButtons = document.querySelectorAll('.letter-btn');
  const modal = document.getElementById('letterModal');
  const modalContainer = modal.querySelector('div');
  const closeModalBtn = document.getElementById('closeModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalText = document.getElementById('modalText');

  const openModal = (type) => {
    const data = letterData[type];
    modalImage.src = data.image;
    modalTitle.textContent = data.title;
    modalText.textContent = data.text;

    // Show the modal with a small delay for CSS transitions to work correctly.
    modal.classList.remove('hidden');
    // Add the flex class after removing hidden to ensure the display property is set.
    modal.classList.add('flex', 'opacity-0');

    setTimeout(() => {
      modal.classList.remove('opacity-0');
      modalContainer.classList.remove('scale-95');
    }, 10);
  };

  const closeModal = () => {
    // Add transition classes for a smooth close animation.
    modal.classList.add('opacity-0');
    modalContainer.classList.add('scale-95');
    
    // Hide the modal after the transition is complete.
    setTimeout(() => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }, 300);
  };

  letterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const letterType = button.dataset.letter;
      openModal(letterType);
    });
  });

  closeModalBtn.addEventListener('click', closeModal);

  // Close the modal when the user clicks the backdrop.
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
