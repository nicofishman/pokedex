import { router } from "../trpc";
import { exampleRouter } from "./example";
import { pokedexRouter } from "./pokedex";

export const appRouter = router({
    example: exampleRouter,
    pokedex: pokedexRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
