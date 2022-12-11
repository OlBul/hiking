export type Artical = {
    id: number
    img: string
    title: string
    text: string
}
const articalesArray: Artical[] = [
    {
        id: 1,
        img: './image/articales_1.jpg',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing...',
    },
    {
        id: 2,
        img: './image/articales_2.jpg',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing...',
    },
    {
        id: 3,
        img: './image/articales_3.jpg',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing...',
    },
]

const json = JSON.stringify(articalesArray)
console.log(json)

export default articalesArray
