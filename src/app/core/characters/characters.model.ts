export interface PokemonCharacter {
    name: string;
    url: string;
}

// la hago de forma parcial para declarar datos que no voy a usar
export interface PokemonCharacterDetail {
    moves: any[]
    abilities: any[];
    sprites: {
        front_default: string;
    };
    types: any[];
}