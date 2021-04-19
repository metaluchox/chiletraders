export const loadValorMonedas = async (monedaSelect) => {
    
    const url = `https://mindicador.cl/api`;
    
    const response = await fetch(url);
    const json = await response.json();
    const monedas = []

    Object.keys(json).forEach(function(key) {
        let showMoneda = monedaSelect.filter(m => m===key);
            if(showMoneda.length >0){
                monedas.push(json[key]);
            }            
    });

    return monedas;
}