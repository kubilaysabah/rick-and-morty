interface Response<T> {
    info: {
        count: number;
        next: string | null;
        pages: number;
        prev: string | null;
    };
    results: T;
}

interface BaseAPI {
    id: number;
    name: string;
    url: string;
    created: string;
}

interface ICharacter extends BaseAPI {
    status: "Alive" | "Dead" | "unknown";
    species: string;
    type: string;
    gender: "Female" | "Male" | "Genderless" | "unknown";
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    origin: {
        name: string;
        url: string;
    };
    episode: string[];
    image: string;
}

interface ILocation extends BaseAPI {
    type: string;
    dimension: string;
    residents: string[];
}

interface IEpisode extends BaseAPI {
    air_date: string;
    episode: string;
    characters: string[];
}