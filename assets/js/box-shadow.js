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