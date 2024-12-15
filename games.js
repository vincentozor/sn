// Array of all available games (add as many games as needed)
const allGames = [
    {
        imgSrc: "https://ziphynet.com.ng/images/gta-san-ram-gta-5.webp",
        title: "Game Title 1",
        link: "#"
    },
    {
        imgSrc: "https://ziphynet.com.ng/images/gta-san-ram-gta-5.webp",
        title: "Game Title 2",
        link: "#"
    },
    {
        imgSrc: "https://ziphynet.com.ng/images/gta-san-ram-gta-5.webp",
        title: "Game Title 3",
        link: "#"
    },
    {
        imgSrc: "https://ziphynet.com.ng/images/gta-vice-city.webp",
        title: "Game Title 4",
        link: "#"
    },
    {
        imgSrc: "https://ziphynet.com.ng/images/gta-san-ram-gta-5.webp",
        title: "Game Title 5",
        link: "#"
    },
    {
        imgSrc: "https://ziphynet.com.ng/images/gta-san.webp",
        title: "Game Title 6",
        link: "#"
    },
    {
        imgSrc: "https://ziphynet.com.ng/images/gta-san-ram-gta-5.webp",
        title: "Game Title 7",
        link: "#"
    },
    {
        imgSrc: "https://ziphynet.com.ng/images/gta-4.webp",
        title: "Game Title 8",
        link: "#"
    },
    {
        imgSrc: "https://ziphynet.com.ng/images/gta-5.webp",
        title: "Game Title 9",
        link: "#"
    },
    {
        imgSrc: "https://ziphynet.com.ng/images/gta-san-ram-gta-5.webp",
        title: "Game Title 10",
        link: "#"
    }
];

const gamesPerPage = 6;  // Display 6 games at a time
let currentPage = 1;  // Start from page 1

// Function to shuffle an array (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to render the related articles grid
function renderRelatedArticles() {
    const gridContainer = document.getElementById('related-articles-grid');
    gridContainer.innerHTML = '';  // Clear previous content

    // Shuffle games and slice to get the first 6 randomly
    const shuffledGames = shuffleArray([...allGames]);
    const currentGames = shuffledGames.slice(0, gamesPerPage);

    // Iterate through the current games and create grid items
    currentGames.forEach(game => {
        // Create the article box element
        const articleBox = document.createElement('div');
        articleBox.classList.add('related-article-box');

        // Create image element
        const img = document.createElement('img');
        img.src = game.imgSrc;
        img.alt = game.title;
        img.classList.add('related-article-img');

        // Create heading element for the game title
        const title = document.createElement('h3');
        title.textContent = game.title;

        // Wrap the image and title in a link element
        const link = document.createElement('a');
        link.href = game.link;
        link.appendChild(img);
        link.appendChild(title);

        // Append the link to the article box
        articleBox.appendChild(link);

        // Append the article box to the grid container
        gridContainer.appendChild(articleBox);
    });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderRelatedArticles);