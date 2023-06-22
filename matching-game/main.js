import BoardGame from "./src/objetcs/BoardGame";
import "./src/styles/elements/base.css"
import "./src/styles/generic/reset.css"
import "./src/styles/settings/colors.css";



//quando colocamos $ em uma variavel é para dizer que se refere ao Dom na tela
const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(6);


//$root.textContent = "olá mundo!" 
$root.insertAdjacentHTML("beforeend",$htmlBoardGame)//metodo seguro para mostrar na tela do seu html