import type { IExperience } from '$types/experience.types';
import { getContext, setContext } from 'svelte';

const KEY = 'experiences-ctx';

export const setExperiences = (value: IExperience[]) => {
	setContext(KEY, value);
};

export const getExperiences = () => {
	return getContext<IExperience[]>(KEY);
};
