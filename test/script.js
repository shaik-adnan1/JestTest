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

const googleSearch = (searchInput) => {
    const matches = googleDatabase.filter(website => {
        return website.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0, 3) : matches;
}

console.log("results -->", googleSearch('cat'));