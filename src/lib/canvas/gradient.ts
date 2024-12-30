import { type Position } from '$lib/position'
import { defaultDimensions } from './dimensions'

export type GradientConfiguration =
	| {
			type: GradientTypes.linear
			start: Position
			end: Position
			colors: string[]
	  }
	| {
			type: GradientTypes.radial
			center: Position
			innerRadius: number
			outerRadius: number
			colors: string[]
	  }

export enum GradientTypes {
	linear,
	radial,
}

export const generateGradient = (
	context: CanvasRenderingContext2D,
	configuration: GradientConfiguration,
) => {
	if (configuration.type === GradientTypes.linear) {
		const gradient = context.createLinearGradient(
			configuration.start.x,
			configuration.start.y,
			configuration.end.x,
			configuration.end.y,
		)
		configuration.colors.forEach((color, i) => {
			gradient.addColorStop(i * (1 / (configuration.colors.length - 1)), color)
		})
		return gradient
	}

	if (configuration.type === GradientTypes.radial) {
		const gradient = context.createRadialGradient(
			configuration.center.x,
			configuration.center.y,
			configuration.innerRadius,
			configuration.center.x,
			configuration.center.y,
			configuration.outerRadius,
		)
		configuration.colors.forEach((color, i) => {
			gradient.addColorStop(i * (1 / (configuration.colors.length - 1)), color)
		})
		return gradient
	}
	return context.createLinearGradient(0, 0, 0, 0)
}

export const defaultLinearGradient: GradientConfiguration = {
	type: GradientTypes.linear,
	colors: ['#1f1f1f', '#080808'],
	start: {
		x: 0,
		y: 0,
	},
	end: {
		x: defaultDimensions.width,
		y: 0,
	},
}

export const defaultRadialGradient: GradientConfiguration = {
	type: GradientTypes.radial,
	colors: ['#1f1f1f', '#080808'],
	center: {
		x: defaultDimensions.width / 2,
		y: defaultDimensions.height / 2,
	},
	innerRadius: 0,
	outerRadius: defaultDimensions.width / 2,
}
