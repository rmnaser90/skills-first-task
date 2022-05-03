import { User } from '../../Types/Types'
export type KeyValue = {
    [key: string]: number
}
export type Tags = {
    categories: KeyValue
    authors: KeyValue
}
const getRecomendations = function (user: User) {
    const { books } = user
    const tags: Tags = { categories: {}, authors: {} }
    books?.forEach((book) => {
        const { category, author } = book        
        if (category && author) {            
            tags.categories[category] = tags.categories[category] ? tags.categories[category]+1 : 1
            tags.authors[author] = tags.authors[author] ? tags.authors[author]+1 : 1
        }
    })

    return tags
}

export default getRecomendations
