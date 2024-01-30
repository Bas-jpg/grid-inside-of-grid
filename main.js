console.log('////////////////////////////////////////////\n//  //////////  /////////              /////\n////  //////  /////////// //////////// /////\n//////  //  ///////////// //////////// /////\n////////  /////////////// //////////// /////\n////////  /////////////// //////////// /////\n////////  /////////////// //////////// /////\n////////  /////////////// //////////// /////\n////////  ///////////////              /////\n////////////////////////////////////////////');

let cardArray = [
    {
    title: "card 1",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,iusto nulla pariatur placeat odit consequatur maiores! Sunt modidolor aperiam.",
    link: "https://www.youtube.com/@MrBeast"
},
{
    title: "card 2",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,iusto nulla pariatur placeat odit consequatur maiores! Sunt modidolor aperiam.",
    link: "https://www.youtube.com/@MrBeast"
},
{
    title: "card 3",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,iusto nulla pariatur placeat odit consequatur maiores! Sunt modidolor aperiam.",
    link: "https://www.youtube.com/@MrBeast"
},
{
    title: "card 4",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,iusto nulla pariatur placeat odit consequatur maiores! Sunt modidolor aperiam.",
    link: "https://www.youtube.com/@MrBeast"
},
{
    title: "card 5",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,iusto nulla pariatur placeat odit consequatur maiores! Sunt modidolor aperiam.",
    link: "https://www.youtube.com/@MrBeast"
},
];

function createCard(cardArray) {
    let html = 
    `<li>
    <h2>${cardArray.title[i]}</h2>
    <div class="body">
      <p>
        ${cardArray.description[i]}
      </p>
    </div>
    <div class="cta">
      <a href="${cardArray.link[i]}">klik hier!</a>
    </div>
  </li>`;

  for (let i = 0; i < cardArray.length; i++) {
    const cardElement = cardArray[i];
  }
}

createCard();