let offset_x = 3
let offset_y = 20
let blur = 50
let spread = 5
let color = '#000000'
let opacity = 0.1
const card = document.getElementById('output')
const inputOffsetX = document.getElementById('input-offset-x')
const inputOffsetY = document.getElementById('input-offset-y')
const inputBlur = document.getElementById('input-blur')
const inputSpread = document.getElementById('input-spread')
const inputColor = document.getElementById('input-color')
const inputOpacity = document.getElementById('input-opacity')
const output = document.getElementById('card-description')

inputOffsetX.value = offset_x
inputOffsetY.value = offset_y
inputBlur.value = blur
inputSpread.value = spread
inputColor.value = color
inputOpacity.value = opacity * 100

output.innerHTML =  `-webkit-box-shadow: ${offset_x}px ${offset_y}px ${blur}px ${spread}px rgba(0, 0, 0, ${opacity});<br>
                    -moz-box-shadow: ${offset_x}px ${offset_y}px ${blur}px ${spread}px rgba(0, 0, 0, ${opacity});<br>
                    box-shadow: ${offset_x}px ${offset_y}px ${blur}px ${spread}px rgba(0, 0, 0, ${opacity})`

const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        offset_x = inputOffsetX.value
        offset_y = inputOffsetY.value
        blur = inputBlur.value
        spread = inputSpread.value
        opacity = inputOpacity.value / 100
        color = inputColor.value

        redHex = (color.toString().substring(1, 3)).toString(16)
        greenHex = (color.toString().substring(3, 5)).toString(16)
        blueHex = (color.toString().substring(5, 7)).toString(16)

        red = parseInt(redHex, 16)
        green = parseInt(greenHex, 16)
        blue = parseInt(blueHex, 16)

        card.style.boxShadow = `${offset_x}px ${offset_y}px ${blur}px ${spread}px rgba(${red}, ${green}, ${blue}, ${opacity})`

        output.innerHTML =  `-webkit-box-shadow: ${offset_x}px ${offset_y}px ${blur}px ${spread}px rgba(${red}, ${green}, ${blue}, ${opacity});<br>
                    -moz-box-shadow: ${offset_x}px ${offset_y}px ${blur}px ${spread}px rgba(${red}, ${green}, ${blue}, ${opacity});<br>
                    box-shadow: ${offset_x}px ${offset_y}px ${blur}px ${spread}px rgba(${red}, ${green}, ${blue}, ${opacity})`

    })
    
})
