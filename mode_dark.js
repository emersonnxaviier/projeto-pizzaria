//pegando o html
const html = document.querySelector("html")

//peguando o checkbox, responsavel por fazer a alteracao
const checkbox = document.querySelector("input[name=theme]")


//pegar estilo/cores do css
const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)


//cores iniciais, que estao no css
const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, " --color-headings"),
    colorText: getStyle(html, "--color-text"),
    pretoBranco: getStyle(html, "--preto-branco"),
    hoverAdd: getStyle(html, "--hover-add"),
    aside: getStyle(html, "--aside"),
    cartTotalitem: getStyle(html, "--cart-totalitem"),
    totalitemBorder: getStyle(html, "--totalitem-border"),
    colorHeader: getStyle(html, "--color-header")

}


//modo escuro
const darkMode = {
    bg: "#151515",
    bgPanel: "#1C1C1C",
    colorHeadings: "#244c88",
    colorText: "#B5B5B5",
    pretoBranco: "#FFF",
    hoverAdd: "#1b232e",
    aside: "#2E2E2E",
    cartTotalitem: "#FFF",
    totalitemBorder: "#B5B5B5",
    colorHeader: "#2E2E2E"
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

//funcao que vai receber as cores
const changeColors = (colors) => {
    Object.keys(colors).map(key => {
        html.style.setProperty(transformKey(key), colors[key])
    })

}


//o checkbox vai ouvir mudancas, sempre que mudar executa uma funcao
checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

/*transformKey -->  essa funcao recebe uma chave e retorna a ideia de alterar.
como as variaveis do comecam com --, comeca tbm com "--"+(concatena), o
key.replace().toLowerCase() manda procurar tudo no bg, bgPanel, colorHeadings, coloText
que for letra maiuscula e guardar numa variavel com um - antes, pois a segunda
parte das variaves do css comecam com um traco, e coloca tudo em minusculo.    */