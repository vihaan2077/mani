
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


document.addEventListener('DOMContentLoaded', () => {
  
  const letterData = {
      sad: {
          title: "For When You're Sad",
          image: "img1.jpg",
          text: "My dearest, I hate thinking of you feeling sad and you did not called me that means eithe we had a fight or i am sleeping but whatever the reason is baby just now that you mean the world to me and i love more than anything baby , i am here with you and in your life forever no matter how bad things get , i have never loved someone like you before you baby. please be alright for me.I love you more than words can say."
      },
      hurt: {
          title: "For When I've Hurt You",
          image: "img2.png",
          text: "I know that my words or actions have hurt you, and for that, I am endlessly sorry. There is no excuse for causing you pain. Looking at this picture, I'm reminded of how precious our connection is. You are the most important person in my life, and the last thing I ever want to do is hurt you. Please know that I'm reflecting on my actions and I will do everything I can to be better for you, for us. I love you forever and ever and ever"
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
      
      modal.classList.remove('hidden');
      modal.classList.add('flex');
     
      setTimeout(() => {
          modal.classList.remove('opacity-0');
          modalContainer.classList.remove('scale-95');
      }, 10);
  };

  const closeModal = () => {
     
      modal.classList.add('opacity-0');
      modalContainer.classList.add('scale-95');
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
  
 
  modal.addEventListener('click', (e) => {
      if (e.target === modal) {
          closeModal();
      }
  });
});
