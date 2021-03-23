import { heroes } from '../../../data/heroes-with-desc'
export const getHeroById = (id) => {
    return ( heroes.find( hero => hero.id===id)  )
}
