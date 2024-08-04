export type InputFieldOptions = {
	label?: string
} & (
	| {
			type: InputFieldType.number
			showSlider?: boolean
			min?: number
			max?: number
	  }
	| {
			type: InputFieldType.string
	  }
	| {
			type: InputFieldType.color
	  }
)

export enum InputFieldType {
	number,
	string,
	color,
}
