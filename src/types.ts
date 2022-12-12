// import type { Name, NamedAPIResource } from '../Common';

/**
 * The name and the URL of the referenced resource
 */
export type NamedAPIResource<T extends string = string> = {
    /** The name of the referenced resource */
    name: T;
    /** The URL of the referenced resource */
    url: string;
}

/**
 * The localized name for an API resource in a specific language
 */
export type Name = {
    /** The localized name for an API resource in a specific language */
    name: string;
    /** The language this name is in */
    language: NamedAPIResource;
}

/**
 * The generation relevent to this game index
 */
export type GenerationGameIndex = {
    /** The internal id of an API resource within game data */
    game_index: number;
    /** The generation relevent to this game index */
    generation: NamedAPIResource;
}


/**
 * Details of Pokémon for a specific type.
 */
export type TypePokemon = {
    /** The order the Pokémon's types are listed in */
    slot: number;
    /** The Pokémon that has the referenced type */
    pokemon: NamedAPIResource;
}

/**
 * Detail of how effective a type is toward others and vice versa
 */
export type TypeRelations = {
    /** A list of types this type has no effect on */
    no_damage_to: NamedAPIResource[];
    /** A list of types this type is not very effect against */
    half_damage_to: NamedAPIResource[];
    /** A list of types this type is very effect against */
    double_damage_to: NamedAPIResource[];
    /** A list of types that have no effect on this type */
    no_damage_from: NamedAPIResource[];
    /** A list of types that are not very effective against this type */
    half_damage_from: NamedAPIResource[];
    /** A list of types that are very effective against this type */
    double_damage_from: NamedAPIResource[];
}

/**
 * ## Pokemon
 * Pokémon are the creatures that inhabit the world of the Pokémon games.
 * They can be caught using Pokéballs and trained by battling with other Pokémon.
 * Each Pokémon belongs to a specific species but may take on a variant
 * which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings.
 * - See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.
 */
export type Pokemon = {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The base experience gained for defeating this Pokémon */
    base_experience: number;
    /** The height of this Pokémon in decimetres */
    height: number;
    /** Set for exactly one Pokémon used as the default for each species */
    is_default: boolean;
    /** Order for sorting. Almost national order, except families are grouped together */
    order: number;
    /** The weight of this Pokémon in hectograms */
    weight: number;
    /** A list of abilities this Pokémon could potentially have */
    abilities: PokemonAbility[];
    /** A list of forms this Pokémon can take on */
    forms: NamedAPIResource[];
    /** A list of game indices relevent to Pokémon item by generation */
    game_indices: VersionGameIndex[];
    /** A list of items this Pokémon may be holding when encountered */
    held_items: PokemonHeldItem[];
    /** A link to a list of location areas, as well as encounter details pertaining to specific versions */
    location_area_encounters: string;
    /** A list of moves along with learn methods and level details pertaining to specific version groups */
    moves: PokemonMove[];
    /** A set of sprites used to depict this Pokémon in the game.
     * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
     */
    sprites: PokemonSprites;
    /** The species this Pokémon belongs to */
    species: NamedAPIResource;
    /** A list of base stat values for this Pokémon */
    stats: PokemonStat[];
    /** A list of details showing types this Pokémon has */
    types: PokemonType[];
    /** Data describing a Pokemon's types in a previous generation. */
    past_types: PokemonPastType[];
}

/**
 * The internal id and version of an API resource
 */
export type VersionGameIndex = {
    /** The internal id of an API resource within game data */
    game_index: number;
    /** The version relevent to this game index */
    version: NamedAPIResource;
}

/**
 * Abilities the given pokémon could potentially have
 */
export type PokemonAbility = {
    /** Whether or not this is a hidden ability */
    is_hidden: boolean;
    /** The slot this ability occupies in this Pokémon species */
    slot: number;
    /** The ability the Pokémon may have */
    ability: NamedAPIResource;
}

/**
 * Details showing types the given Pokémon has
 */
export type PokemonType = {
    /** The order the Pokémon's types are listed in */
    slot: number;
    /** The type the referenced Pokémon has */
    type: NamedAPIResource<PokemonTypeNames>;
}

export type PokemonTypeNames =
    'bug'
    | 'dragon'
    | 'fairy'
    | 'fire'
    | 'ghost'
    | 'ground'
    | 'normal'
    | 'psychic'
    | 'steel'
    | 'dark'
    | 'electric'
    | 'fighting'
    | 'flying'
    | 'grass'
    | 'ice'
    | 'poison'
    | 'rock'
    | 'water'



/**
 * Data describing a Pokemon's types in a previous generation.
 */
export type PokemonPastType = {
    /** The generation of this Pokémon Type. */
    generation: NamedAPIResource;
    /** Types this of this Pokémon in a previos generation. */
    types: PokemonType[];
}

/**
 * Items the given Pokémon may be holding when encountered
 */
export type PokemonHeldItem = {
    /** The item the referenced Pokémon holds */
    item: NamedAPIResource;
    /** The details of the different versions in which the item is held */
    version_details: PokemonHeldItemVersion[];
}


/**
* The details of the different versions in which the item is held
*/
export type PokemonHeldItemVersion = {
    /** The version in which the item is held */
    version: NamedAPIResource;
    /** How often the item is held */
    rarity: number;
}

/**
 * A Move along with learn methods and level details pertaining to specific version groups
 */
export type PokemonMove = {
    /** The move the Pokémon can learn */
    move: NamedAPIResource;
    /** The details of the version in which the Pokémon can learn the move */
    version_group_details: PokemonMoveVersion[];
}

/**
 * The details of the version in which the Pokémon can learn the move
 */
export type PokemonMoveVersion = {
    /** The method by which the move is learned */
    move_learn_method: NamedAPIResource;
    /** The version group in which the move is learned */
    version_group: NamedAPIResource;
    /** The minimum level to learn the move */
    level_learned_at: number;
}

/**
 * Base stat values for the given Pokémon
 */
export type PokemonStat = {
    /** The stat the Pokémon has */
    stat: NamedAPIResource;
    /** The effort points (EV) the Pokémon has in the stat */
    effort: number;
    /** The base value of the stat */
    base_stat: number;
}

/** Version Sprites */
export type VersionSprites = {
    /** Generation-I Sprites of this Pokémon */
    'generation-i': GenerationISprites;
    /** Generation-II Sprites of this Pokémon */
    'generation-ii': GenerationIISprites;
    /** Generation-III Sprites of this Pokémon */
    'generation-iii': GenerationIIISprites;
    /** Generation-IV Sprites of this Pokémon */
    'generation-iv': GenerationIVSprites;
    /** Generation-V Sprites of this Pokémon */
    'generation-v': GenerationVSprites;
    /** Generation-VI Sprites of this Pokémon */
    'generation-vi': GenerationVISprites;
    /** Generation-VII Sprites of this Pokémon */
    'generation-vii': GenerationVIISprites;
    /** Generation-VIII Sprites of this Pokémon */
    'generation-viii': GenerationVIIISprites;
}

export type Generations = keyof VersionSprites;

/**
 * A set of sprites used to depict this Pokémon in the game.
 * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
 */
export type PokemonSprites = {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny female depiction of this Pokémon from the front in battle */
    front_shiny_female: string | null;
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The female depiction of this Pokémon from the back in battle */
    back_female: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    back_shiny_female: string | null;
    /** Dream World, Official Artwork and Home sprites */
    other?: OtherPokemonSprites;
    /** Version Sprites of this Pokémon */
    versions: VersionSprites;
}

/** Other Pokemon Sprites (Dream World and Official Artwork sprites) */
export type OtherPokemonSprites = {
    /** Dream World Sprites of this Pokémon */
    dream_world: DreamWorld;
    /** Official Artwork Sprites of this Pokémon */
    'official-artwork': OfficialArtwork;
    /** Home Artwork Sprites of this Pokémon */
    home: Home;
}

/** Dream World sprites */
export type DreamWorld = {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
}

/** Official Artwork sprites */
type OfficialArtwork = {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
}

/** Home sprites */
export type Home = {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}

/** Generation-I Srites */
export type GenerationISprites = {
    /** Red-blue sprites of this Pokémon */
    'red-blue': RedBlue;
    /** Yellow sprites of this Pokémon  */
    yellow: Yellow;
}

/** Red/Blue Sprites */
export type RedBlue = {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The gray depiction of this Pokémon from the back in battle */
    back_gray: string | null;
    /** The transparent depiction of this Pokémon from the back in battle */
    back_transparent: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The gray depiction of this Pokémon from the front in battle */
    front_gray: string | null;
    /** The transparent depiction of this Pokémon from the front in battle */
    front_transparent: string | null;
}

/** Yellow sprites */
export type Yellow = {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The gray depiction of this Pokémon from the back in battle */
    back_gray: string | null;
    /** The transparent depiction of this Pokémon from the back in battle */
    back_transparent: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The gray depiction of this Pokémon from the front in battle */
    front_gray: string | null;
    /** The transparent depiction of this Pokémon from the front in battle */
    front_transparent: string | null;
}

/** Generation-II Sprites */
export type GenerationIISprites = {
    /** Crystal sprites of this Pokémon */
    crystal: Crystal;
    /** Gold sprites of this Pokémon */
    gold: Gold;
    /** Silver sprites of this Pokémon */
    silver: Silver;
}

/** Crystal sprites */
export type Crystal = {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The back shiny transparent depiction of this Pokémon from the back in battle */
    back_shiny_transparent: string | null;
    /** The transparent depiction of this Pokémon from the back in battle */
    back_transparent: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The front shiny transparent depiction of this Pokémon from the front in battle */
    front_shiny_transparent: string | null;
    /** The transparent depiction of this Pokémon from the front in battle */
    front_transparent: string | null;
}

export type Gold = {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The transparent depiction of this Pokémon from the front in battle */
    front_transparent: string | null;
}

/** Silver sprites */
type Silver = {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The transparent depiction of this Pokémon from the front in battle */
    front_transparent: string | null;
}

/** Generation-III Sprites */
export type GenerationIIISprites = {
    /** Emerald sprites of this Pokémon */
    emerald: Emerald;
    /** Firered-Leafgreen sprites of this Pokémon */
    'firered-leafgreen': FireredLeafgreen;
    /** Ruby-Sapphire sprites of this Pokémon */
    'ruby-sapphire': RubySapphire;
}

/** Emerald sprites */
export type Emerald = {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
}

/** FireRead LeafGreen sprites  */
export type FireredLeafgreen = {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
}

/** Ruby/Sapphire sprites */
export type RubySapphire = {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
}

/** Generation-IV Sprites */
export type GenerationIVSprites = {
    /** Diamond-pearl Generation sprites of this Pokémon */
    'diamond-pearl': DiamondPearl;
    /** Heartgold-Soulsilver sprites of this Pokémon */
    'heartgold-soulsilver': HeartgoldSoulsilver;
    /** Platinum sprites of this Pokémon */
    platinum: Platinum;
}

export type DiamondPearl = {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The female depiction of this Pokémon from the back in battle */
    back_female: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    back_shiny_female: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}

export type HeartgoldSoulsilver = {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The female depiction of this Pokémon from the back in battle */
    back_female: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    back_shiny_female: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}

export type Platinum = {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The female depiction of this Pokémon from the back in battle */
    back_female: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    back_shiny_female: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}

/** Generation-V Sprites */
export type GenerationVSprites = {
    /** Black-white sprites of this Pokémon */
    'black-white': BlackWhite;
}

/** Black/White sprites */
export type BlackWhite = {
    /** The animated sprite of this pokémon */
    animated: Animated;
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The female depiction of this Pokémon from the back in battle */
    back_female: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    back_shiny_female: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}
export type Animated = {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The female depiction of this Pokémon from the back in battle */
    back_female: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    back_shiny_female: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}

/** Generation-VI Sprites */
export type GenerationVISprites = {
    /** Omegaruby-Alphasapphire sprites of this Pokémon */
    'omegaruby-alphasapphire': OmegarubyAlphasapphire;
    /** X-Y sprites of this Pokémon */
    'x-y': XY;
}

/** Omega/Ruby Alpha/Sapphire sprites */
export type OmegarubyAlphasapphire = {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}

/** XY sprites */
export type XY = {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}

/** Generation-VII Sprites */
export type GenerationVIISprites = {
    /** Icon sprites of this Pokémon */
    icons: GenerationViiIcons;
    /** Ultra-sun-ultra-moon sprites of this Pokémon */
    'ultra-sun-ultra-moon': UltraSunUltraMoon;
}

/** Generation VII icons */
export type GenerationViiIcons = {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
}

/** Ultra Sun Ultra Moon sprites */
export type UltraSunUltraMoon = {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}

/** Generation-VIII Sprites */
export type GenerationVIIISprites = {
    /** Icon sprites of this Pokémon */
    icons: GenerationViiiIcons;
}

/** Generation VIII icons */
export type GenerationViiiIcons = {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
}

/**
 * ## Location Area Encounter
 * Pokémon location areas where Pokémon can be found
 */
export type LocationAreaEncounter = {
    /** The location area the referenced Pokémon can be encountered in */
    location_area: NamedAPIResource;
    /** A list of versions and encounters with the referenced Pokémon that might happen */
    version_details: VersionEncounterDetail[];
}

/**
 * ## Pokemon Colors
 * Colors used for sorting Pokémon in a Pokédex.
 * The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body.
 * No orange category exists; Pokémon that are primarily orange are listed as red or brown.
 */
export type PokemonColor = {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name:
    | 'black'
    | 'blue'
    | 'brown'
    | 'gray'
    | 'green'
    | 'pink'
    | 'purple'
    | 'red'
    | 'white'
    | 'yellow';
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of the Pokémon species that have this color */
    pokemon_species: NamedAPIResource[];
}

/**
 * ## Pokemon Form
 * Some Pokémon may appear in one of multiple, visually different forms.
 * These differences are purely cosmetic. For variations within a Pokémon species,
 * which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
 */
export type PokemonForm = {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The order in which forms should be sorted within all forms.
     * Multiple forms may have equal order, in which case they should fall back on sorting by name
     */
    order: number;
    /** The order in which forms should be sorted within a species' forms */
    form_order: number;
    /** True for exactly one form used as the default for each Pokémon */
    is_default: boolean;
    /** Whether or not this form can only happen during battle */
    is_battle_only: boolean;
    /** Whether or not this form requires mega evolution */
    is_mega: boolean;
    /** The name of this form */
    form_name: string;
    /** The Pokémon that can take on this form */
    pokemon: NamedAPIResource;
    /** A set of sprites used to depict this Pokémon form in the game */
    sprites: PokemonFormSprites;
    /** The version group this Pokémon form was introduced in */
    version_group: NamedAPIResource;
    /** The form specific full name of this Pokémon form, or empty if the form does not have a specific name */
    names: Name[];
    /** The form specific form name of this Pokémon form, or empty if the form does not have a specific name */
    form_names: Name[];
    /** A list of details showing types this Pokémon has */
    types: PokemonType[];
}

/**
 * Sprites used to depict this Pokémon form in the game
 */
export type PokemonFormSprites = {
    /** The default depiction of this Pokémon form from the front in battle */
    front_default: string | null;
    /** The female depiction of this Pokémon form from the front in battle */
    front_female: string | null;
    /** The shiny depiction of this Pokémon form from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon form from the front in battle */
    front_shiny_female: string | null;
    /** The default depiction of this Pokémon form from the back in battle */
    back_default: string | null;
    /** The female depiction of this Pokémon form from the back in battle */
    back_female: string | null;
    /** The shiny depiction of this Pokémon form from the back in battle */
    back_shiny: string | null;
    /** The shiny female depiction of this Pokémon form from the back in battle */
    back_shiny_female: string | null;
}

/**
 * ## Pokemon Habitat
 * Habitats are generally different terrain Pokémon can be found in
 * but can also be areas designated for rare or legendary Pokémon
 */
export type PokemonHabitat = {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name:
    | 'cave'
    | 'forest'
    | 'grassland'
    | 'mountain'
    | 'rare'
    | 'rough-terrain'
    | 'sea'
    | 'urban'
    | 'waters-edge';
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of the Pokémon species that can be found in this habitat */
    pokemon_species: NamedAPIResource[];
}

/**
 * ## Pokemon Shape
 * Shapes used for sorting Pokémon in a Pokédex
 */
export type PokemonShape = {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The "scientific" name of this Pokémon shape listed in different languages */
    awesome_names: AwesomeName[];
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of the Pokémon species that have this shape */
    pokemon_species: NamedAPIResource[];
}

/**
 * The "scientific" name of the Pokémon shape listed in different languages
 */
export type AwesomeName = {
    /** The localized "scientific" name for an API resource in a specific language */
    awesome_name: string;
    /** The language this "scientific" name is in */
    language: NamedAPIResource;
}

/**
 * ## Pokemon Species
 * A Pokémon Species forms the basis for at least one Pokémon.
 * Attributes of a Pokémon species are shared across all varieties of Pokémon within the species.
 * A good example is Wormadam; Wormadam is the species which can be found in three different varieties,
 * Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant */
export type PokemonSpecies = {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage */
    order: number;
    /** The chance of this Pokémon being female, in eighths; or -1 for genderless */
    gender_rate: number;
    /** The base capture rate; up to 255. The higher the number, the easier the catch */
    capture_rate: number;
    /** The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon */
    base_happiness: number;
    /** Whether or not this is a baby Pokémon */
    is_baby: boolean;
    /** Whether or not this is a legendary Pokémon */
    is_legendary: boolean;
    /** Whether or not this is a mythical Pokémon */
    is_mythical: boolean;
    /** Initial hatch counter: one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's */
    hatch_counter: number;
    /** Whether or not this Pokémon has visual gender differences */
    has_gender_differences: boolean;
    /** Whether or not this Pokémon has multiple forms and can switch between them */
    forms_switchable: boolean;
    /** The rate at which this Pokémon species gains levels */
    growth_rate: NamedAPIResource;
    /** A list of Pokedexes and the indexes reserved within them for this Pokémon species */
    pokedex_numbers: PokemonSpeciesDexEntry[];
    /** A list of egg groups this Pokémon species is a member of */
    egg_groups: NamedAPIResource[];
    /** The color of this Pokémon for Pokédex search */
    color: NamedAPIResource;
    /** The shape of this Pokémon for Pokédex search */
    shape: NamedAPIResource;
    /** The Pokémon species that evolves into this Pokemon_species */
    evolves_from_species: NamedAPIResource;
    /** The evolution chain this Pokémon species is a member of */
    evolution_chain: APIResource;
    /** The habitat this Pokémon species can be encountered in */
    habitat: NamedAPIResource;
    /** The generation this Pokémon species was introduced in */
    generation: NamedAPIResource;
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of encounters that can be had with this Pokémon species in pal park */
    pal_park_encounters: PalParkEncounterArea[];
    /** A list of flavor text entries for this Pokémon species */
    flavor_text_entries: FlavorText[];
    /** Descriptions of different forms Pokémon take on within the Pokémon species */
    form_descriptions: Description[];
    /** The genus of this Pokémon species listed in multiple languages */
    genera: Genus[];
    /** A list of the Pokémon that exist within this Pokémon species */
    varieties: PokemonSpeciesVariety[];
}

/** An URL for another resource in the API */
export type APIResource = {
    /** The URL of the referenced resource */
    url: string;
}

/**
 * The localized description for an API resource in a specific language
 */
export type Description = {
    /** The localized description for an API resource in a specific language. */
    description: string;
    /** The language this name is in */
    language: NamedAPIResource;
}

/**
 * The localized flavor text for an API resource in a specific language
 */
export type FlavorText = {
    /** The localized flavor text for an API resource in a specific language */
    flavor_text: string;
    /** The language this name is in */
    language: NamedAPIResource;
}

/**
 * The genus of the given Pokémon species listed in multiple languages
 */
export type Genus = {
    /** The localized genus for the referenced Pokémon species */
    genus: string;
    /** The language this genus is in */
    language: NamedAPIResource;
}

/** Pokedexes and the indexes reserved within them for the given Pokémon species */
export type PokemonSpeciesDexEntry = {
    /** The index number within the Pokédex */
    entry_number: number;
    /** The Pokédex the referenced Pokémon species can be found in */
    pokedex: NamedAPIResource;
}

/**
 * Encounter that can be had with the given Pokémon species in pal park
 */
export type PalParkEncounterArea = {
    /** The base score given to the player when the referenced Pokémon is caught during a pal park run */
    base_score: number;
    /** The base rate for encountering the referenced Pokémon in this pal park area */
    rate: number;
    /** The pal park area where this encounter happens */
    area: NamedAPIResource;
}

/**
 * Pokémons that exist within this Pokémon species
 */
export type PokemonSpeciesVariety = {
    /** Whether this variety is the default variety */
    is_default: boolean;
    /** The Pokémon variety */
    pokemon: NamedAPIResource;
}

/**
 * Encounters and their specifics details
 */
export type VersionEncounterDetail = {
    /** The game version this encounter happens in */
    version: NamedAPIResource;
    /** The total percentage of all encounter potential */
    max_chance: number;
    /** A list of encounters and their specifics */
    encounter_details: Encounter[];
}

/** Information of a pokemon encounter */
export type Encounter = {
    /** The lowest level the Pokémon could be encountered at */
    min_level: number;
    /** The highest level the Pokémon could be encountered at */
    max_level: number;
    /** A list of condition values that must be in effect for this encounter to occur */
    condition_values: NamedAPIResource[];
    /** Percent chance that this encounter will occur */
    chance: number;
    /** The method by which this encounter happens */
    method: NamedAPIResource;
}

/**
 * ## Ability
 * Abilities provide passive effects for Pokémon in battle or in the overworld.
 * Pokémon have multiple possible abilities but can have only one ability at a time.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.
 */
export type Ability = {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** Whether or not this ability originated in the main series of the video games */
    is_main_series: boolean;
    /** The generation this ability originated in */
    generation: NamedAPIResource<Generations>;
    /** The name of this resource listed in different languages */
    names: Name[];
    /** The effect of this ability listed in different languages */
    effect_entries: VerboseEffect[];
    /** The list of previous effects this ability has had across version groups */
    effect_changes: AbilityEffectChange[];
    /** The flavor text of this ability listed in different languages */
    flavor_text_entries: AbilityFlavorText[];
    /** A list of Pokémon that could potentially have this ability */
    pokemon: AbilityPokemon[];
}

/**
   * Previous effects an ability has had across version groups
   */
export type AbilityEffectChange = {
    /** The previous effect of this ability listed in different languages */
    effect_entries: Effect[];
    /** The version group in which the previous effect of this ability originated */
    version_group: NamedAPIResource;
}

/**
   * The flavor text of an ability
   */
export type AbilityFlavorText = {
    /** The localized name for an API resource in a specific language */
    flavor_text: string;
    /** The language this text resource is in */
    language: NamedAPIResource;
    /** The version group that uses this flavor text */
    version_group: NamedAPIResource;
}

/**
   * Pokémon that could potentially have the given ability
   */
export type AbilityPokemon = {
    /** Whether or not this a hidden ability for the referenced Pokémon */
    is_hidden: boolean;
    /**
     * Pokémon have 3 ability 'slots' which hold references to possible abilities they could have.
     * This is the slot of this ability for the referenced pokemon
     */
    slot: number;
    /** The Pokémon this ability could belong to */
    pokemon: NamedAPIResource;
}
/**
 * The localized effect text for an API resource in a specific language
 */
export interface Effect {
    /** The localized effect text for an API resource in a specific language. */
    effect: string;
    /** The language this effect is in */
    language: NamedAPIResource;
}

/**
 * The localized effect for an API resource
 */
export interface VerboseEffect {
    /** The localized effect text for an API resource in a specific language */
    effect: string;
    /** The localized effect text in brief */
    short_effect: string;
    /** The language this effect is in */
    language: NamedAPIResource;
}

export type PokemonResponse = {
    count: number;
    next?: string;
    previous?: string;
    results: NamedAPIResource[]
}