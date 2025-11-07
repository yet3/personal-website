export type IMinMax = [number, number] | number;

export const randomFloat = (min: number, max: number) => {
	return Math.random() * (max - min) + min;
};

export const randomInt = (min: number, max: number) => {
	return Math.floor(randomFloat(min, max));
};

export const randomMinMax = (minMax: IMinMax) => {
	if (typeof minMax === "number") return minMax;
	return randomFloat(minMax[0], minMax[1]);
};
