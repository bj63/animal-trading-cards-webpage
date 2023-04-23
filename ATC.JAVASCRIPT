// Get all the social media links
const socialMediaLinks = document.querySelectorAll('.social-media a');

// Add a click event listener to each social media link
socialMediaLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const socialMedia = link.getAttribute('href');
    window.open(socialMedia, '_blank');
  });
});

// Get all the animal trading cards
const animalCards = document.querySelectorAll('.card');

// Add a mouseover event listener to each animal trading card
animalCards.forEach(card => {
  card.addEventListener('mouseover', e => {
    card.style.transform = 'scale(1.1)';
  });
});

// Add a mouseout event listener to each animal trading card
animalCards.forEach(card => {
  card.addEventListener('mouseout', e => {
    card.style.transform = 'scale(1)';
  });
});