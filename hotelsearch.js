const HotelsList = document.getElementById('HotelsList');
let hpHotels = [];
const loadHotels = async () => {
    try {
        const res = await fetch('4789bd482734ee934fefa79338e81233');
        hpHotels = await res.json();
        displayHotels(hpHotels);
    } catch (err) {
        console.error(err);
    }
};
const displayHotels = (Hotels) => {
    const htmlString = Hotels
        .map((hotel) => {
            return `
            <li class="hotel">
                <h2>${hotel.name}</h2>
                
                <img src="${hotel.image}"></img>
            </li>
        `;
        })
        .join('');
    HotelsList.innerHTML = htmlString;
};

loadHotels();
