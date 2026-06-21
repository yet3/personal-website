import type { IExperience } from "./experience.types";

export const defineExperience = <TAt extends string>(
	at: TAt,
	d: Omit<IExperience, "at">,
) =>
	({
		[at]: {
			at: at,
			...d,
      dates: [...d.dates].sort((a,b) => a[0].getTime() - b[0].getTime()),
		} as IExperience,
	}) as Record<TAt, IExperience>;
