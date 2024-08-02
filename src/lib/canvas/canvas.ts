import { type Background, BackgroundTypes, fillBackground } from './background'
import { defaultDimensions, type Dimensions } from './dimensions'

export type CanvasConfiguration = {
	dimensions: Dimensions
	background: Background
}

export const defaultConfiguration = (): CanvasConfiguration => {
	return {
		dimensions: defaultDimensions,
		background: {
			type: BackgroundTypes.solid,
			color: '#1f1f1f',
		},
	}
}

export const fillCanvas = (
	canvasContext: CanvasRenderingContext2D,
	configuration: CanvasConfiguration,
) => {
	canvasContext.reset()
	fillBackground(canvasContext, configuration)
}
