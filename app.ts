
function findMinPositive(arr) {
	const positiveNumbers = arr.filter(num => num > 0)
	if (positiveNumbers.length === 0) {
		return null
	}
	return Math.min(...positiveNumbers)
}

function generateBoolMatrix(strMatrix: string[][]): boolean[][] {
	return strMatrix.map(row => {
		return row.map(cell => cell.length % 2 !== 0)
	})
}

type NumberTuple = [number, number]
function sumOfDigits(num: number): number {
	return num
		.toString()
		.split('')
		.map(digit => parseInt(digit))
		.reduce((acc, digit) => acc + digit, 0)
}

function areSumsEqual(tuple: NumberTuple): boolean {
	const [num1, num2] = tuple
	return sumOfDigits(num1) === sumOfDigits(num2)
}

//4
enum NitrogenBases {
	G = 'Гуанин',
	A = 'Аденин',
	C = 'Цитозин',
	U = 'Урацил',
}
type AminoAcid = 'Аланин'| 'Глицин'  | 'Лейцин' | 'Глутамин' | 'Треонин'
function printNitrogenBase(base: NitrogenBases): void {
	console.log(`Азотистое основание РНК: ${base}`)
}

function printAminoAcid(aminoAcid: AminoAcid): void {
	console.log(`Тип аминокислоты: ${aminoAcid}`)
}
//5
class Pet {
	name: string = 'Some pet'
	age: number = -1

	speak(): string {
		return 'dfghasdg'
	}
}

class Dog extends Pet {
	label = 'asdgidgsa'
	age = 8

	speak(): string {
		return 'Yaw-Gaw!'
	}
}

class Cat extends Pet {
	name = 'Barsik'
	age = 2

	speak(): string {
		return 'Miyau!'
	}
}

function printPetInfo<T extends Pet>(pet: T): void {
	console.log(`Name: ${pet.name}`)
	console.log(`Age: ${pet.age}`)
	console.log(`Sound: ${pet.speak()}`)
}

//5
type RNA = {
	sequence: NitrogenBases[]
	length: number
	isDoubleStranded: boolean
	name: string
}

const rnaSample: RNA = {
	sequence: [
		NitrogenBases.A,
		NitrogenBases.U,
		NitrogenBases.G,
		NitrogenBases.C,
	],
	length: 4,
	isDoubleStranded: false,
	name: 'mRNA',
}
const stringMatrix: string[][] = [
	['elephant', 'fish', 'cat'],
	['dog', 'apple', 'banana'],
]
const numbers = [-15, 38, 93, -11, 0, 72]
const tuple: NumberTuple = [123, 132]
const tuple2: NumberTuple = [123, 456]
const dog = new Dog()
const cat = new Cat()

console.log(findMinPositive(numbers))
console.log(generateBoolMatrix(stringMatrix))
console.log(areSumsEqual(tuple))
console.log(areSumsEqual(tuple2))
printNitrogenBase(NitrogenBases.A)
printAminoAcid('Глицин')
printPetInfo(dog)
printPetInfo(cat)
console.log(JSON.stringify(rnaSample, null, 2))
