import PlayerName from "./src/components/PlayerName";
import BoardGame from "./src/objetcs/BoardGame";
import "./src/styles/elements/base.css"
import "./src/styles/generic/reset.css"
import "./src/styles/settings/colors.css";



//quando colocamos $ em uma variavel é para dizer que se refere ao Dom na tela
const $root = document.querySelector("#root");


//$root.textContent = "olá mundo!" 
$root.insertAdjacentHTML(
    "beforeend", 
    `
    ${PlayerName('Player1')}
    ${PlayerName('Player2')}
    ${BoardGame(6)}
    `

)//metodo seguro para mostrar na tela do seu html