import React from 'react'
import { heroes } from '../../../data/heroes-with-desc'
export const getHeroById = (id) => {

    return ( heroes.filter(hero => hero.id===id)    )
}
