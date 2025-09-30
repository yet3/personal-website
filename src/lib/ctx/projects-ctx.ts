import type { IProject } from '$types/projects.types';
import { getContext, setContext } from 'svelte';

const KEY = 'projects-ctx';

export const setProjects = (value: IProject[]) => {
	setContext(KEY, value);
};

export const getProjects = () => {
	return getContext<IProject[]>(KEY);
};
