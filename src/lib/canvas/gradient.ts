import { type Position } from '$lib/position'

export type GradientConfiguration =
	| {
			type: GradientType.linear
			start: Position
			end: Position
			colors: string[]
	  }
	| {
			type: GradientType.radial
			center: Position
			innerRadius: number
			outerRadius: number
			colors: string[]
	  }

export enum GradientType {
	linear,
	radial,
}

export const generateGradient = (
	context: CanvasRenderingContext2D,
	configuration: GradientConfiguration,
) => {
	if (configuration.type === GradientType.linear) {
		const gradient = context.createLinearGradient(
			configuration.start.x,
			configuration.start.y,
			configuration.end.x,
			configuration.end.y,
		)
		configuration.colors.forEach((color, i) => {
			gradient.addColorStop(i, color)
		})
		return gradient
	}

	if (configuration.type === GradientType.radial) {
		const gradient = context.createRadialGradient(
			configuration.center.x,
			configuration.center.y,
			configuration.innerRadius,
			configuration.center.x,
			configuration.center.y,
			configuration.outerRadius,
		)
		configuration.colors.forEach((color, i) => {
			gradient.addColorStop(i, color)
		})
		return gradient
	}
	return context.createLinearGradient(0, 0, 0, 0)
}
