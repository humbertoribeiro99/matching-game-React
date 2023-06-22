import "./src/styles/elements/base.css"
import "./src/styles/generic/reset.css"
import "./src/styles/settings/colors.css";
import CardGame from "./src/components/CardGame";


//quando colocamos $ em uma variavel é para dizer que se refere ao Dom na tela
const $root = document.querySelector("#root")
const $htmlCardGame = CardGame()

//$root.textContent = "olá mundo!" 
$root.insertAdjacentHTML("beforeend",$htmlCardGame)//metodo seguro para mostrar na tela do seu html