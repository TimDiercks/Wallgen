export type Dimensions = {
	width: number
	height: number
}

export const preConfiguredDimensions: Dimensions[] = [
	// Standard 16:9 resolutions (Horizontal)
	{
		width: 1920,
		height: 1080,
	},
	{
		width: 2560,
		height: 1440, // QHD
	},
	{
		width: 3840,
		height: 2160, // 4K UHD
	},

	// Standard 16:9 resolutions (Vertical)
	{
		width: 1080,
		height: 1920,
	},
	{
		width: 1440,
		height: 2560, // QHD
	},
	{
		width: 2160,
		height: 3840, // 4K UHD
	},

	// Standard 21:9 resolutions (UltraWide, Horizontal)
	{
		width: 2560,
		height: 1080,
	},
	{
		width: 3440,
		height: 1440,
	},

	// Standard 21:9 resolutions (UltraWide, Vertical)
	{
		width: 1080,
		height: 2560,
	},
	{
		width: 1440,
		height: 3440,
	},
]

export const defaultDimensions = preConfiguredDimensions[0]