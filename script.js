/**
 * Decifra uma mensagem na linguagem dos dragões (mapeamento a-z → z-a)
 * @param {string} mensagem - Texto cifrado a ser traduzido
 * @returns {string} - Mensagem decifrada
 */
function decifraDragao(mensagem) {
    // Mapeamento das letras (a → z, b → y, ..., z → a)
    const mapaCifra = {
        'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v',
        'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q',
        'k': 'p', 'l': 'o', 'm': 'n', 'n': 'm', 'o': 'l',
        'p': 'k', 'q': 'j', 'r': 'i', 's': 'h', 't': 'g',
        'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c', 'y': 'b',
        'z': 'a'
    };

    return mensagem
        .split('')
        .map(caractere => {
            // Substitui apenas letras minúsculas, mantendo outros caracteres
            return mapaCifra[caractere] || caractere;
        })
        .join('');
}

// --- Elementos do DOM --- //
const translateBtn = document.getElementById('translateBtn');
const returnBtn = document.getElementById('returnBtn');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

// --- Event Listeners --- //

// Traduz a mensagem ao clicar no botão "TRADUZIR"
translateBtn.addEventListener('click', () => {
    const mensagemCifrada = inputText.value;
    const mensagemTraduzida = decifraDragao(mensagemCifrada);
    outputText.value = mensagemTraduzida;
});

// Limpa os campos ao clicar no botão "RETORNAR"
returnBtn.addEventListener('click', () => {
    inputText.value = '';
    outputText.value = '';
    inputText.focus(); // Foca no campo de entrada novamente
});

// Foco automático no input quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    inputText.focus();
});