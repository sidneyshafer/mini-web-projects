const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat');
const openSeats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

addXIcon();

// Functions
// Add X icon to occupied seats
function addXIcon() {
  seats.forEach(seat => {
    if (seat.classList.contains('occupied')) {
      seat.innerHTML = `<i class="fa-solid fa-x"></i>`;
    }
  })
}

// Update total and count
function updateSelectedCountAndTotal() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Event Listeners
// Movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCountAndTotal();

})

// Seat click event
container.addEventListener('click', (e) => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');

    updateSelectedCountAndTotal();
  }
})