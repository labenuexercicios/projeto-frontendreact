import bitoca from "../assets/tshirtBitocas.png";
import humanos from "../assets/tshirtNaoAcreditoEmHumanos.png";
import mundo from "../assets/tshirtMinhaMenteDeOutroMundo.png";
import resgatado from "../assets/tshirtResgatado.png";
import certezas from "../assets/tshirtTresCertezasDaVida.png";
import astronauta from "../assets/tshirtAstronautaNaLua.png";
import humanos2 from "../assets/tshirtNaoAcreditoEmHumanos2.png";
import infinito from "../assets/tshirtAoInfinitoAlem.png";
import espaco from "../assets/tshirtPrecisoDeMaisEspaço.png";
import foguete from "../assets/tshirtFogueteNaoTemRe.png";

export const getFeature = (feature) => {
    switch (feature) {
        case "bitoca":
            return bitoca;
        case "humanos":
            return humanos;
        case "mundo":
            return mundo;
        case "resgatado":
            return resgatado;
        case "certezas":
            return certezas;
        case "astronauta":
            return astronauta;
        case "humanos2":
            return humanos2;
        case "infinito":
            return infinito;
        case "espaco":
            return espaco;
        case "foguete":
            return foguete;
        default:
            return "imagem produto";
    }
};