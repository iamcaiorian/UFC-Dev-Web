export const Imagem = ({ id }) => {
  
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

    return (
        <img src={url + id + '.png'} alt="Pokemon" />
    )
}