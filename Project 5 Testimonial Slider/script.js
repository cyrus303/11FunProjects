const testimonials = [
  {
    name: 'Frank K',
    photoUrl:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    testimonial:
      "You won't regret it. Apple is the most valuable business resource we have EVER purchased. Apple is worth much more than I paid. The best on the net!",
  },

  {
    name: 'Rick E',
    photoUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    testimonial: "Fantastic, I'm totally blown away by Testimonial Generator.",
  },
  {
    name: 'Quintina W',
    photoUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    testimonial:
      "I can't say enough about apple. Thank you for making it painless, pleasant and most of all hassle free! Man, this thing is getting better and better as I learn more about it. I made back the purchase price in just 48 hours!",
  },
  {
    name: 'Jack F.',
    photoUrl:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    testimonial:
      "Thanks to website, we've just launched our 5th website! I would be lost without website. I would gladly pay over 600 dollars for website.",
  },
];

const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const usernameEl = document.querySelector('.username');

var idx = 0;
updateTestimonials();

function updateTestimonials() {
  const { name, photoUrl, testimonial: text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;

  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonials();
  }, 2000);
}
