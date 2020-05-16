const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = parseInt(movieSelect.value);

// dynamic count of selected seats
function updateSelectedCount() {
    const selectedCount = (document.querySelectorAll('.row .seat.selected')).length;
    count.innerText = selectedCount;
    total.innerText = selectedCount * ticketPrice;
}

// price manipulation after movie change 
movieSelect.addEventListener('change',(e)=>{
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

// click event for selected seats
container.addEventListener('click',(e) => {
    if((e.target.classList.contains('seat')) && !(e.target.classList.contains('occupied'))) {
        e.target.classList.toggle('selected');
    }
    updateSelectedCount();
});
