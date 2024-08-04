import { type CanvasConfiguration } from './canvas'
import { defaultLinearGradient, generateGradient, type GradientConfiguration } from './gradient'

export type Background = SolidBackground | GradientBackground

export type SolidBackground = {
	type: BackgroundTypes.solid
	color: string
}

export type GradientBackground = {
	type: BackgroundTypes.gradient
	gradient: GradientConfiguration
}

export enum BackgroundTypes {
	solid,
	gradient,
}

export const fillBackground = (
	context: CanvasRenderingContext2D,
	configuration: CanvasConfiguration,
) => {
	if (configuration.background.type === BackgroundTypes.solid) {
		context.fillStyle = configuration.background.color
	}

	if (configuration.background.type === BackgroundTypes.gradient) {
		context.fillStyle = generateGradient(context, configuration.background.gradient)
	}

	context.fillRect(0, 0, configuration.dimensions.width, configuration.dimensions.height)
}

export const defaultBackground: Background = {
	type: BackgroundTypes.solid,
	color: '#1f1f1f',
}

export const defaultGradientBackground: Background = {
	type: BackgroundTypes.gradient,
	gradient: defaultLinearGradient,
}
