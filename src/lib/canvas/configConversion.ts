import { BackgroundTypes, type Background } from './background'
import type { CanvasConfiguration } from './canvas'
import type { Dimensions } from './dimensions'

const hexRadix = 16
const paddingDimensions = 4

const decimalToHex = (number: number, padding?: number) => {
	let hex = number.toString(hexRadix)
	padding = typeof padding === 'undefined' || padding === null ? (padding = 2) : padding

	while (hex.length < padding) {
		hex = '0' + hex
	}

	return hex
}

export const configToString = (config: CanvasConfiguration): string => {
	let configString = ''

	const hexWidth = decimalToHex(config.dimensions.width, paddingDimensions)
	const hexHeight = decimalToHex(config.dimensions.height, paddingDimensions)

	configString += `${hexWidth}${hexHeight}`
	console.log(configString)
	return configString
}

export const stringToConfig = (configString: string): CanvasConfiguration => {
	console.log(configString)
	const dimensions: Dimensions = {
		width: 0,
		height: 0,
	}

	const background: Background = {
		type: BackgroundTypes.solid,
		color: '#fff',
	}

	return {
		dimensions: dimensions,
		background: background,
	}
}
