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
		slug: 'capital-hill-residence',
	},
	{
		title: 'Picket Fence Realty',
		location: 'East London',
		price: '$6727.00',
		rooms: '6',
		bathrooms: '2',
		eat: '3',
		imageUrl: '/card2.png',
		slug: 'picket-fence-realty',
	},
	{
		title: 'Banyon Tree Realty',
		location: 'East London',
		price: '$4327.00',
		rooms: '6',
		bathrooms: '2',
		eat: '3',
		imageUrl: '/card3.png',
		slug: 'banyon-tree-realty',
	},
	{
		title: 'Corsair Real Estate',
		location: 'East London',
		price: '$4427.00',
		rooms: '6',
		bathrooms: '2',
		eat: '3',
		imageUrl: '/card4.png',
		slug: 'corsair-real-estate',
	},
	{
		title: 'Sequoia Real Estate',
		location: 'East London',
		price: '$4527.00',
		rooms: '6',
		bathrooms: '2',
		eat: '3',
		imageUrl: '/card5.png',
		slug: 'sequoia-real-estate',
	},
	{
		title: 'Strive Partners Realty',
		location: 'East London',
		price: '$5527.00',
		rooms: '6',
		bathrooms: '2',
		eat: '3',
		imageUrl: '/card6.png',
		slug: 'strive-partners-realty',
	},
]
const prisma = new PrismaClient()

// Функция для генерации slug
const slugify = require('slugify')
function generateSlug(title: string) {
	return slugify(title, { lower: true })
}

// инициализация данных
// export async function setInitialroductsCards() {
// 	const r = await prisma.houses.createMany({
// 		data: initialroductsCards,
// 	})

// 	console.log(r, ' helllooo')
// }

// получение данных о карточках домов
export async function getInitialroductsCards() {
	const response = await prisma.houses.findMany()

	return response
}
export const getHousesCard = async (slug: string) => {
	const data = await prisma.houses.findFirst({
	 where: {
	  slug: slug,
	 },
	})
	return data
   }

export async function setInitialProductsCards() {
	const res = await getInitialroductsCards()
	
	for (const card of res) {
		const slug = generateSlug(card.title)

		const r = await prisma.houses.upsert({
			where: { id: card.id }, // Условие для поиска существующей записи
			update: {
				location: card.location,
				price: card.price,
				rooms: card.rooms,
				bathrooms: card.bathrooms,
				eat: card.eat,
				imageUrl: card.imageUrl,
				slug: slug, // Обновляем поле slug, если запись существует
			},
			create: {
				title: card.title,
				location: card.location,
				price: card.price,
				rooms: card.rooms,
				bathrooms: card.bathrooms,
				eat: card.eat,
				imageUrl: card.imageUrl,
				slug: slug, // Устанавливаем slug для новой записи
			},
		})

		// console.log(r, 'record processed')
	}
}

setInitialProductsCards()
	.catch(e => {
		console.error(e)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
