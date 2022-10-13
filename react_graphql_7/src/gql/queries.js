export const GET_ALL_FILMS = `
  query GET_ALL_FILMS  {
    allFilms {
      films {
        id
        title
        director
        producers
        releaseDate
        }
      }
    }
`;

export const GET_ALL_PEOPLE = `
  query GET_ALL_PEOPLE  {
    allPeople {
        people {
          id
          name
          birthYear
        }
      }
     }
`;

export const GET_PERSON_DETAILS = `
query Person($personId: ID) {
    person(id: $personId) {
      name
      gender
      height
      skinColor
      filmConnection {
        films {
          title
        }
      }
      homeworld {
        name
      }
      starshipConnection {
        starships {
          name
        }
      }
    }
  }`