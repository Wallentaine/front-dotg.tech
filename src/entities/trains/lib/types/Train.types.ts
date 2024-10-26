export type Station = {
	station: string
	date: string
	time: string
}

export type TrainInfo = {
	departureInfo: Station
	arrivalInfo: Station
	travelTime: string
	availableSeats: string
	coupePrice: string
	platzkartPrice: string
	minimalPrice: string
}