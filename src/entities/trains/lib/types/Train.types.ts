export type Station = {
	station: string
	date: string
	time: string
}

export type TrainInfo = {
	id: number
	departureInfo: Station
	arrivalInfo: Station
	travelTime: string
	availableSeats: number
	coupePrice: string
	platzkartPrice: string
	minimalPrice: string
}