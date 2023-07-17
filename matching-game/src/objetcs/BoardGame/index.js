import './style.css'
import CardFrontBack from '../../components/CardFrontBack'

function BoardGame(amountCards) {
    const $htmlFrontBack = CardFrontBack()
    const $htmlBoardGame = $htmlFrontBack.repeat(amountCards)
   
    return /*html*/` 
    <section class="board-game">
        ${$htmlBoardGame}
    </section>
    `
}

export default BoardGame