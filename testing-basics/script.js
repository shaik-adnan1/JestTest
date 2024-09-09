const googleDatabase = [
    'cats.com',
    'catpictures.com',
    'catsImages.com',
    'ironman.com',
    'Batman.com',
    'Superman.com',
    'Spiderman.com',
    'animalCats.com',
    'monkeyMan.com'
]

const googleSearch = (searchInput, dataBase) => {
    const matches = dataBase.filter(website => {
        return website.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0, 3) : matches;
}

module.exports = googleSearch;

// console.log("results -->", googleSearch('cat'));
// test change