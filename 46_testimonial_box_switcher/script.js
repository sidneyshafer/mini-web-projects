const testimonialContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: '[User Name]',
    position: '[Position/Role]',
    photo:
      'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=626&ext=jpg&ga=GA1.1.1768666795.1710869349&semt=ais',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi quia odit ipsum dolorum earum eos nostrum laudantium accusantium totam voluptatem nobis placeat, quaerat rem reprehenderit quasi esse, eum commodi. Aut cum consectetur eum quis, sequi perspiciatis nihil quos porro ducimus dolores dignissimos ad aspernatur fuga quae voluptas aperiam molestias itaque voluptate nostrum ut iusto.",
  },
  {
    name: '[User Name]',
    position: '[Position/Role]',
    photo: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=626&ext=jpg&ga=GA1.1.1768666795.1710869349&semt=ais',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi quia odit ipsum dolorum earum eos nostrum laudantium accusantium totam voluptatem nobis placeat, quaerat rem reprehenderit quasi esse, eum commodi. Earum eos nostrum laudantium accusantium totam voluptatem nobis placeat, quaerat rem reprehenderit quasi esse, eum commodi.',
  },
  {
    name: '[User Name]',
    position: '[Position/Role]',
    photo: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=626&ext=jpg&ga=GA1.1.1768666795.1710869349&semt=ais',
    text: "Earum eos nostrum laudantium accusantium totam voluptatem nobis placeat, quaerat rem reprehenderit quasi esse, eum commodi. Dignissimos ad aspernatur fuga quae voluptas aperiam molestias itaque voluptate nostrum ut iusto.",
  },
  {
    name: '[User Name]',
    position: '[Position/Role]',
    photo: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=626&ext=jpg&ga=GA1.1.1768666795.1710869349&semt=ais',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi quia odit ipsum dolorum earum eos nostrum laudantium accusantium totam voluptatem nobis placeat, quaerat rem reprehenderit quasi esse, eum commodi",
  },
  {
    name: '[User Name]',
    position: '[Position/Role]',
    photo: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=626&ext=jpg&ga=GA1.1.1768666795.1710869349&semt=ais',
    text: "Sapiente odio sunt provident, culpa deserunt quo voluptate doloremque eos temporibus itaque nihil facilis autem consequatur. Ea reiciendis obcaecati laborum maxime velit rerum repellat cupiditate, sint ullam, repellendus accusantium odio? Deleniti eos dignissimos adipisci possimus. Aut cum consectetur eum quis.",
  },
  {
    name: '[User Name]',
    position: '[Position/Role]',
    photo:
      'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=626&ext=jpg&ga=GA1.1.1768666795.1710869349&semt=ais',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi quia odit ipsum dolorum earum eos nostrum laudantium accusantium totam voluptatem nobis placeat.',
  },
  {
    name: '[User Name]',
    position: '[Position/Role]',
    photo: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=626&ext=jpg&ga=GA1.1.1768666795.1710869349&semt=ais',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi quia odit ipsum dolorum earum eos nostrum laudantium accusantium totam voluptatem nobis placeat, quaerat rem reprehenderit quasi esse, eum commodi. Deleniti eos dignissimos adipisci possimus. Aut cum consectetur eum quis, sequi perspiciatis nihil quos porro ducimus dolores dignissimos ad aspernatur fuga quae voluptas aperiam molestias itaque voluptate nostrum ut iusto.',
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);