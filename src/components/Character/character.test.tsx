import renderer from "react-test-renderer";
import Character from ".";

const Props = {
    status: "Alive" as "Alive" | "Dead" | "unknown",
    created: "2017-11-04T18:48:46.250Z",
    episode: ["https://rickandmortyapi.com/api/episode/1"],
    gender: "Male" as "Male" | "Female" | "Genderless",
    id: 1,
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3"
    },
    name: "Rick Sanchez",
    origin: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3"
    },
    species: "Human",
    type: "Human",
    url: "https://rickandmortyapi.com/api/character/1"
}

it('renders correctly', () => {
    const tree = renderer
        .create(<Character {...Props} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});