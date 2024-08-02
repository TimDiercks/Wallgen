import type { ComponentType } from 'svelte'

export type TabItem = {
	label: string
	value: number
	component: ComponentType
}
