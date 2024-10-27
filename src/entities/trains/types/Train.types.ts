export type Train = {
	train_id: number
	global_route: `${string}->${string}`
	startpoint_departure: string
	endpoint_arrival: string
	detailed_route: DetailedRoute[]
	wagons_info: Wagon[]
	available_seats_count: number
}

export type DetailedRoute = {
	name: string,
	num: number,
	arrival: null | string,
	departure: null | string
}

export type Wagon = {
	wagon_id: number
	type: 'PLATZCART' | 'COUPE'
	seats: Seat[]
}

export type Seat = {
	seat_id: number,
	seatNum: string,
	block: '2' | '1',
	price: number,
	bookingStatus: 'BOOKED' | 'FREE'
}

