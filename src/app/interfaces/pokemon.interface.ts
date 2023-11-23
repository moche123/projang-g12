export interface IDataPokemonItem{
    name: string;
    url: string;
}

export interface IDataPokemon{


    count: number;
    next: string;
    previous: string | null;
    results: IDataPokemonItem[];
}