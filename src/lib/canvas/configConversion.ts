import { BackgroundTypes, type Background } from './background'
import type { CanvasConfiguration } from './canvas'
import type { Dimensions } from './dimensions'

const hexRadix = 16
const paddingDimensions = 4

// eslint-disable-next-line no-magic-numbers
const widthLocation = [0, 4]
// eslint-disable-next-line no-magic-numbers
const heightLocation = [5, 8]

const decimalToHex = (number: number, padding?: number) => {
	let hex = number.toString(hexRadix)
	padding = typeof padding === 'undefined' || padding === null ? (padding = 2) : padding

	while (hex.length < padding) {
		hex = '0' + hex
	}

	return hex
}

const hexStringToDecimal = (string: string) => {
	return Number.parseInt(string, hexRadix)
}

const getSubstring = (string: string, substringIdentifier: number[]) => {
	return string.substring(substringIdentifier[0], substringIdentifier[1])
}

export const configToString = (config: CanvasConfiguration): string => {
	let configString = ''

	const hexWidth = decimalToHex(config.dimensions.width, paddingDimensions)
	const hexHeight = decimalToHex(config.dimensions.height, paddingDimensions)

	configString += `${hexWidth}${hexHeight}`
	return configString
}

export const stringToConfig = (configString: string): CanvasConfiguration => {
	const dimensions: Dimensions = {
		width: hexStringToDecimal(getSubstring(configString, widthLocation)),
		height: hexStringToDecimal(getSubstring(configString, heightLocation)),
	}

	const background: Background = {
		type: BackgroundTypes.solid,
		color: '#1f1f1f',
	}

	const config: CanvasConfiguration = {
		dimensions: dimensions,
		background: background,
	}

	return config
}
