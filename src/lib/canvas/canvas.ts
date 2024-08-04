import { type Background, defaultBackground, fillBackground } from './background'
import { defaultDimensions, type Dimensions } from './dimensions'

export type CanvasConfiguration = {
	dimensions: Dimensions
	background: Background
}

export const defaultConfiguration = (): CanvasConfiguration => {
	return {
		dimensions: defaultDimensions,
		background: defaultBackground,
	}
}

export const fillCanvas = (
	canvasContext: CanvasRenderingContext2D,
	configuration: CanvasConfiguration,
) => {
	canvasContext.reset()
	fillBackground(canvasContext, configuration)
}
