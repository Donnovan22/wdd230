const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets() {
  let response = await fetch(requestURL);
  if(response.ok) {
    let data = await response.json();
    //console.log(data);
    buildProphetCards(data);
  } else {
    throw Error(response.statusText);
  };
};

function buildProphetCards(data) {
  data.prophets.forEach(prophet => {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let portrait = document.createElement('img');

    let fullname = `${prophet.name} ${prophet.lastname}`;
    
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    p.innerHTML = `Date Of Birth: <strong>${prophet.birthdate}</strong>`;
    p2.innerHTML = `Place of Birth: <strong>${prophet.birthplace}</strong>`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Picture of President: ${fullname}`);
    portrait.setAttribute("loading", "lazy");

    card.append(h2);
    card.append(p);
    card.append(p2);
    card.append(portrait);
    cards.append(card);
  });
}

getProphets();
