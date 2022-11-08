import * as z from 'zod';

export const formKeys = {
	createTeams: {
		name: 'name',
		type: 'type',
		region: 'region',
		pokedexDescription: 'pokedexDescription',
	},
} as const;

export const form = {
	createTeams: {
		placeholder: {
			name: 'Team name',
            region: 'Select Region',
			type: 'Select team type',
			pokedexDescription: 'Pokedex description',
			
		},
		schema: z.object({
			[formKeys.createTeams.name]: z.string({ required_error: 'Name is required' }).min(1),
			[formKeys.createTeams.type]: z.string({ required_error: 'Name is required' }).min(1),
			[formKeys.createTeams.region]: z.string({ required_error: 'Name is required' }).min(1),
			[formKeys.createTeams.pokedexDescription]: z.string({ required_error: 'Name is required' }).min(1),
		}),
	},
};
