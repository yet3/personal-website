import type { IProject } from "./projects.types";

export const defineProject = <TId extends string>(
  id: TId,
  d: Omit<IProject, "id">,
) => {
  return {
    [id]: {
      id: id,
      ...d,
    } as IProject,
  } as Record<TId, IProject>;
};
