import type { IProject } from "$types/projects.types";

export const defineProject = <TId extends string>(id: TId, d: Omit<IProject, "id">) =>
	({
		[id]: {
			id: id,
			...d
		} as IProject
	}) as Record<TId, IProject>;
