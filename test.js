const data = [
    {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
    },
    reviews: {
        goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
        },
        librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
        },
    },
},
{
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
        goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
        },
        librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
        },
    },
    },
{
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
    spanish: "",
    },
    reviews: {
        goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
        },
    },
},
{
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
    spanish: "Harry Potter y la piedra filosofal",
    korean: "해리 포터와 마법사의 돌",
    bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
    portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
    goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
    },
        librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
    },
    },
},
{
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    hasMovieAdaptation: true,
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    pages: 835,
    translations: {
    korean: "왕좌의 게임",
    polish: "Gra o tron",
    portuguese: "A Guerra dos Tronos",
    spanish: "Juego de tronos",
    },
    reviews: {
    goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
    },
    librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
    },
    },
},
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}
console.log(getBook(1));


// destructuring

const book = getBook(2);
book;

console.log("Book", book)


// const title = book.title;
// title;

// const author = book.author;
// author;

// const publicationDate = book.publicationDate;
// publicationDate;tertiaryGenre

// const genres = book.genres;
// genres;

const { author, title, publicationDate, genres, pages, hasMovieAdaptation } = book;

console.log(author, title, publicationDate, pages, genres, hasMovieAdaptation)

// const primaryGenre = genres[0];
// const secondaryGenre = genre[1];
// const tertieryGenre =genre[2];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log (primaryGenre, secondaryGenre, otherGenres)

const newGenres = [  "epic fantasy", ...genres];
newGenres;

const updatedBook = { ...book, 
  //adding a new property
    moviePubliicationDate: "2001-12-19",
  //overwriting an existing property
    pages: 1210,
};
updatedBook;

console.log("updatebook", updatedBook)

const getYear = (str) => str.split('-')[0];
console. log (getYear(publicationDate))

const summary =` ${title} is
const getYear = (str) => str.split('-')[0];

console. log (getYear(publicationDate)) a book sold for ${4+6}$ thaconsole.log(true && "some string")t contains ${pages}-pages and was written by ${author} and published in ${getYear (publicationDate)}`;
summary;


const pagesRange = pages > 1000 ? "a thousand pages plus" : "less than a thousand pages";
pagesRange;

//writining a function to get the publicationDate 
// fufunctionnction getYaear(string) {
//     return str.split('-')[0];
// }
//end of 

console.log(true && "some string");
console.log(false && "some string");
console.log(hasMovieAdaptation && "this book has a movie");

console.log(true || "some value")
console.log(false || "some value")

console.log(book.translations.spanish)
const spanishTranslation = book.translations.spanish || 'NO TRANSLATIONS'
spanishTranslation;

console.log(book.genres)
const bookGenres = book.genres || 'NO GENRES'
bookGenres;

console.log(book.title)
const bookTitle = book.title || 'NO TITLE'
bookTitle;

console.log(book.reviews.librarything.reviewsCount)
const countWrong = book.reviews.librarything.reviewsCount || 'NO DATA'
countWrong;

const count = book.reviews.librarything.reviewsCount ?? 'no data'
count;

function getTotalReviewCount(book){
    const goodReads = book.reviews.goodreads.reviewsCount;
    const librarything = book.reviews.librarything.reviewsCount;
    return goodReads + librarything
}
console.log(getTotalReviewCount(book))


//testing exercise

