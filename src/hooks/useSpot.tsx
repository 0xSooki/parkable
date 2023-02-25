import React from 'react'
import { useState } from 'react'

interface Spot {
	id: string
	floor: number
	number: number
}

export function useSpot() {
	const [data, setData] = useState<Spot | null>(null)

	return { data, setData }
}
