var axios = require('axios');
const quotes = [
    {
        "name": "Merle Cooke",
        "quote": "Eiusmod proident anim amet labore id minim mollit culpa in dolor cillum qui. Deserunt consectetur sunt sunt elit culpa incididunt qui nisi mollit eiusmod aute ut do. Magna nostrud aute ex pariatur aliquip reprehenderit. Adipisicing aute esse veniam eu dolor exercitation consequat.\r\n"
    },
    {
        "name": "Merle Cooke",
        "quote": "Eiusmod proident anim amet labore id minim mollit culpa in dolor cillum qui. Deserunt consectetur sunt sunt elit culpa incididunt qui nisi mollit eiusmod aute ut do. Magna nostrud aute ex pariatur aliquip reprehenderit. Adipisicing aute esse veniam eu dolor exercitation consequat.\r\n"
    },
    {
        "name": "Merle Cooke",
        "quote": "Eiusmod proident anim amet labore id minim mollit culpa in dolor cillum qui. Deserunt consectetur sunt sunt elit culpa incididunt qui nisi mollit eiusmod aute ut do. Magna nostrud aute ex pariatur aliquip reprehenderit. Adipisicing aute esse veniam eu dolor exercitation consequat.\r\n"
    },
    {
        "name": "Summers Vazquez",
        "quote": "Eiusmod duis esse sint eu ad proident exercitation qui ut voluptate sunt deserunt. Aliquip non sunt cillum irure voluptate magna amet amet est nisi ipsum. Cillum excepteur labore velit culpa aliqua exercitation quis eiusmod. Esse reprehenderit est aliquip commodo occaecat. Fugiat minim pariatur aliquip quis ipsum minim amet sint ut do minim cillum est. Aute velit cupidatat duis occaecat excepteur Lorem.\r\n"
    },
    {
        "name": "Summers Vazquez",
        "quote": "Eiusmod duis esse sint eu ad proident exercitation qui ut voluptate sunt deserunt. Aliquip non sunt cillum irure voluptate magna amet amet est nisi ipsum. Cillum excepteur labore velit culpa aliqua exercitation quis eiusmod. Esse reprehenderit est aliquip commodo occaecat. Fugiat minim pariatur aliquip quis ipsum minim amet sint ut do minim cillum est. Aute velit cupidatat duis occaecat excepteur Lorem.\r\n"
    },
    {
        "name": "Tiffany Church",
        "quote": "Ex id officia esse amet veniam ullamco tempor aliqua occaecat velit. Reprehenderit cillum cillum velit amet ullamco eiusmod. Adipisicing qui aliquip dolore sit cupidatat irure qui consequat cupidatat exercitation. Consectetur dolor reprehenderit qui nulla commodo. Sit pariatur id esse id anim. Duis fugiat tempor esse nisi commodo aute cillum. In ea ad Lorem minim est eu labore aliqua velit Lorem sint.\r\n"
    },
    {
        "name": "Tracy Huff",
        "quote": "Consectetur nulla incididunt do consectetur esse est non est culpa eu mollit veniam. Minim consectetur cillum veniam do nisi officia fugiat aute et aliqua voluptate Lorem. Laborum laboris anim aliqua est reprehenderit. Ut fugiat ad velit laborum occaecat officia adipisicing. Sint anim non et aliquip velit sint tempor.\r\n"
    },
    {
        "name": "Alana Grimes",
        "quote": "Sint cupidatat commodo ex amet voluptate id aliqua pariatur id ut. Labore consectetur fugiat nostrud consequat nostrud commodo exercitation sint nostrud. Sint commodo exercitation deserunt do elit sunt eiusmod Lorem voluptate velit ipsum sunt. Ea consectetur cupidatat est irure magna dolor eu aliqua ut laboris. Ad irure cillum elit excepteur nisi excepteur Lorem non occaecat voluptate consectetur aute. Tempor sunt ea excepteur excepteur enim excepteur adipisicing quis proident aute sunt.\r\n"
    },
    {
        "name": "Alana Grimes",
        "quote": "Sint cupidatat commodo ex amet voluptate id aliqua pariatur id ut. Labore consectetur fugiat nostrud consequat nostrud commodo exercitation sint nostrud. Sint commodo exercitation deserunt do elit sunt eiusmod Lorem voluptate velit ipsum sunt. Ea consectetur cupidatat est irure magna dolor eu aliqua ut laboris. Ad irure cillum elit excepteur nisi excepteur Lorem non occaecat voluptate consectetur aute. Tempor sunt ea excepteur excepteur enim excepteur adipisicing quis proident aute sunt.\r\n"
    },
    {
        "name": "Alvarez Garcia",
        "quote": "Fugiat proident veniam id laboris ad ad excepteur aute elit officia nostrud eiusmod elit in. Culpa et ea excepteur do id laboris consequat laborum incididunt sit occaecat ea do adipisicing. Ex reprehenderit et amet amet id duis qui pariatur nostrud elit commodo deserunt magna duis. Esse sunt velit ad cillum laborum aliquip sint proident. Voluptate reprehenderit qui ut consectetur occaecat id exercitation eiusmod non magna culpa excepteur sunt et.\r\n"
    },
    {
        "name": "Alvarez Garcia",
        "quote": "Fugiat proident veniam id laboris ad ad excepteur aute elit officia nostrud eiusmod elit in. Culpa et ea excepteur do id laboris consequat laborum incididunt sit occaecat ea do adipisicing. Ex reprehenderit et amet amet id duis qui pariatur nostrud elit commodo deserunt magna duis. Esse sunt velit ad cillum laborum aliquip sint proident. Voluptate reprehenderit qui ut consectetur occaecat id exercitation eiusmod non magna culpa excepteur sunt et.\r\n"
    },
    {
        "name": "Alvarez Garcia",
        "quote": "Fugiat proident veniam id laboris ad ad excepteur aute elit officia nostrud eiusmod elit in. Culpa et ea excepteur do id laboris consequat laborum incididunt sit occaecat ea do adipisicing. Ex reprehenderit et amet amet id duis qui pariatur nostrud elit commodo deserunt magna duis. Esse sunt velit ad cillum laborum aliquip sint proident. Voluptate reprehenderit qui ut consectetur occaecat id exercitation eiusmod non magna culpa excepteur sunt et.\r\n"
    },
    {
        "name": "Alvarez Garcia",
        "quote": "Fugiat proident veniam id laboris ad ad excepteur aute elit officia nostrud eiusmod elit in. Culpa et ea excepteur do id laboris consequat laborum incididunt sit occaecat ea do adipisicing. Ex reprehenderit et amet amet id duis qui pariatur nostrud elit commodo deserunt magna duis. Esse sunt velit ad cillum laborum aliquip sint proident. Voluptate reprehenderit qui ut consectetur occaecat id exercitation eiusmod non magna culpa excepteur sunt et.\r\n"
    }
];
let spanSubTitle = document.getElementById('span-sub-title');
let ul = document.getElementById('ul-quote-list');
let initialQuote = document.querySelector('#initial-quote');
let buttonSpanDiv = document.getElementById('button-span-div');
let spanTitle = document.getElementById('span-title');
if (initialQuote != undefined) {
    ul?.removeChild(initialQuote);
}
if (spanTitle != undefined) {
    buttonSpanDiv?.removeChild(spanTitle);
}
let randomDigit = Math.abs(Math.floor(Math.random() * quotes.length - 1));
let randomInitialQuote = quotes[randomDigit];
//Add new Quote
let li = document.createElement('li');
li.id = 'initial-quote';
let blockquote = document.createElement('blockquote');
blockquote.appendChild(document.createTextNode(`"${randomInitialQuote.quote}"`));
li.appendChild(blockquote);
ul?.appendChild(li);
//Add new quote author name
let newSpanTitle = document.createElement('span');
newSpanTitle.id = 'span-title';
newSpanTitle.className = 'span-title';
newSpanTitle?.appendChild(document.createTextNode(randomInitialQuote.name));
buttonSpanDiv?.prepend(newSpanTitle);
// function getQuote(){
//   const options = {
//     method: 'POST',
//     url: 'https://andruxnet-random-famous-quotes.p.rapidapi.com/',
//     params: {cat: 'famous', count: '10'}, //cat -> movies or famous
//     headers: {
//       'X-RapidAPI-Key': '77ed6a4f06mshecb6d6bb52d3940p14ca6bjsn766dee5f81a9',
//       'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
//     }
//   };
//   axios.request(options).then(function (response: any) {
//     console.log(response.data);
//   }).catch(function (error: string) {
//     console.error(error);
//   });
// };
function getRandomQuote() {
    let ul = document.getElementById('ul-quote-list');
    let initialQuote = document.querySelector('#initial-quote');
    let buttonSpanDiv = document.getElementById('button-span-div');
    let spanTitle = document.getElementById('span-title');
    if (initialQuote != undefined) {
        ul?.removeChild(initialQuote);
    }
    if (spanTitle != undefined) {
        buttonSpanDiv?.removeChild(spanTitle);
    }
    let randomDigit = Math.abs(Math.floor(Math.random() * quotes.length - 1));
    let randomInitialQuote = quotes[randomDigit];
    //Add new Quote
    let vl = document.createElement('div');
    vl.className = 'vl';
    let li = document.createElement('li');
    li.id = 'initial-quote';
    let blockquote = document.createElement('blockquote');
    blockquote.appendChild(document.createTextNode(randomInitialQuote.quote));
    li.appendChild(blockquote);
    ul?.appendChild(li);
    //Add new quote author name
    let newSpanTitle = document.createElement('span');
    newSpanTitle.id = 'span-title';
    newSpanTitle.className = 'span-title';
    newSpanTitle?.appendChild(document.createTextNode(randomInitialQuote.name));
    buttonSpanDiv?.prepend(newSpanTitle);
}
const randomButton = document.getElementById("random-button");
randomButton?.addEventListener("click", () => {
    console.log("clicked element");
    getRandomQuote();
});
const referenceButton = document.getElementById("reference-button");
referenceButton?.addEventListener("click", () => {
    console.log("clicked reference");
    const referenceButtonDiv = document.getElementById("reference-button-div");
    referenceButtonDiv.style.display = 'none';
    let spanTitle = document.getElementById('span-title')?.innerText;
    let personQuotes = quotes.filter(x => x.name == spanTitle);
    personQuotes.forEach((quote, i) => {
        //Add new Quote
        let li = document.createElement('li');
        li.id = i.toString();
        let blockquote = document.createElement('blockquote');
        blockquote.appendChild(document.createTextNode(quote.quote));
        li.appendChild(blockquote);
        ul?.appendChild(li);
    });
});
export {};
