import type { IExperience } from "./experience.types";

export const defineExperience = <TAt extends string>(
	at: TAt,
	d: Omit<IExperience, "at">,
) =>
	({
		[at]: {
			at: at,
			...d,
		} as IExperience,
	}) as Record<TAt, IExperience>;
