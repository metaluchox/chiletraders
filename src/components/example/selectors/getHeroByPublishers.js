import { heroes } from '../../../data/heroes-with-desc'
export const getHeroByPublishers = (publishers) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if(!validPublisher.includes(publishers)){
        throw Error (`Publishers ${publishers} no es correcto`);
    }



    return ( heroes.filter(hero => hero.publisher===publishers)    )
}
