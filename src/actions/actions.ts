'use server'

import { PrismaClient } from '@prisma/client'

const initialroductsCards = [
	{
		title: 'Capital hill residence',
		location: 'East London',
		price: '$5527.00',
		rooms: '6',
		bathrooms: '2',
		eat: '3',
		imageUrl: '/card1.png',
	},
	{
		title: 'Picket Fence Realty',
		location: 'East London',
		price: '$6727.00',
		rooms: '6',
		bathrooms: '2',
		eat: '3',
		imageUrl: '/card2.png',
	},
	{
		title: 'Picket Fence Realty',
		location: 'East London',
		price: '$6727.00',
		rooms: '6',
		bathrooms: '2',
		eat: '3',
		imageUrl: '/card2.png',
	},
	{
		title: 'Banyon Tree Realty',
		location: 'East London',
		price: '$4327.00',
		rooms: '6',
		bathrooms: '2',
		eat: '3',
		imageUrl: '/card3.png',
	},
	{
		title: 'Corsair Real Estate',
		location: 'East London',
		price: '$4427.00',
		rooms: '6',
		bathrooms: '2',
		eat: '3',
		imageUrl: '/card4.png',
	},
	{
		title: 'Sequoia Real Estate',
		location: 'East London',
		price: '$4527.00',
		rooms: '6',
		bathrooms: '2',
		eat: '3',
		imageUrl: '/card5.png',
	},
	{
		title: 'Strive Partners Realty',
		location: 'East London',
		price: '$5527.00',
		rooms: '6',
		bathrooms: '2',
		eat: '3',
		imageUrl: '/card6.png',
	},
]
const prisma = new PrismaClient()

// инициализация данных
export async function setInitialroductsCards() {
	const r = await prisma.houses.createMany({
		data: initialroductsCards,
	})

	console.log(r, ' helllooo')
}

export async function getInitialroductsCards() {
	const response = await prisma.houses.findMany()

	console.log(response, ' helllooo')
	return response
}
