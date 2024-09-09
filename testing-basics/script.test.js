const googleSearch = require("./script");

dbMock = [
    'dog.com',
    'chickenPuff.com',
    'marvel.com',
    "dogPic.com"
]

// running npm run test will run the jest in the current directory
// but the value to key "test" should be changed to jest from default

// Grouping the functions with describe

describe('googleSearch', () => {
    // basic test 
    it("this is a test", () => {
        expect('hello').toBe('hello');
        googleSearch("testtest", dbMock);
    });
    
    // Expects to be equal to an array of strings
    it("is searching google ", () => {
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogPic.com'])
    })
    
    // undefined/null 
    it('Working with undefined ', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    })
    
    it('does not return more than 3 items', () => {
        expect(googleSearch('.com', dbMock).length).toEqual((3));
    })

})
