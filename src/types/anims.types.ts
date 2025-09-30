export type IDelay =
	| IDelay[]
	| Array<undefined | null | string | number | [string | number, "*" | "/", string | number]>
	| string
	| number
|undefined|null
