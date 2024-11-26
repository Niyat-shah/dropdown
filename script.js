let countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
    "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
    "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus",
    "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
    "Swaziland", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
    "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
    "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)",
    "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
    "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
    "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Macedonia (formerly Macedonia)", "Norway", "Oman", "Pakistan", "Palau",
    "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
    "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
    "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden",
    "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
    "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
    "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia",
    "Zimbabwe"
];

let container = document.querySelector('.container');
let selectBtn = container.querySelector('.select-option');
let dropDownList = container.querySelector('.list-search-container');
let searchInput = container.querySelector('#search');
let lists = dropDownList.querySelector('.list');

selectBtn.addEventListener('click', () => {
    container.classList.toggle('active');
});

function addCountry(selectedCountry = "") {
    lists.innerHTML = ""; 
    countries.forEach(country => {
        let isSelected = selectedCountry === country ? "selected" : "";
        let listItem = `<li class="${isSelected}">${country}</li>`;
        lists.insertAdjacentHTML('beforeend', listItem);
    });
    addClickEventToli();
}
addCountry(); 

function addClickEventToli() {
    lists.querySelectorAll('li').forEach(listItem => {
        listItem.addEventListener('click', () => {
            updateSelectCountry(listItem);
        });
    });
}

function updateSelectCountry(listItem) {
    searchInput.value = ""; 
    selectBtn.firstElementChild.innerHTML = listItem.innerHTML; 
    container.classList.remove('active'); 
    addCountry(listItem.innerHTML); 
}

searchInput.addEventListener('keyup', () => {
    let searchInpVal = searchInput.value.toLowerCase();
    let filteredCountries = countries
        .filter(country => country.toLowerCase().startsWith(searchInpVal)) 
        .map(country => `<li>${country}</li>`) 
        .join(""); 
    lists.innerHTML = filteredCountries; 
    addClickEventToli(); 
});
