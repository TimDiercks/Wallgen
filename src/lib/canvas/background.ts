import { type CanvasConfiguration } from './canvas'
import { generateGradient, type GradientConfiguration } from './gradient'

export type Background =
	| {
			type: BackgroundTypes.solid
			color: string
	  }
	| {
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
