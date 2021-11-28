export default function () {
    const mainPinElement = document.querySelector('.map__pin--main')
    
    const setCoords = function (event) {
        mainPinElement.style = `top: ${event.clientY}px; left: ${event.clientX}px;`
    }

    const removeListeners = function () {
        mainPinElement.removeEventListener('mousemove', setCoords)
        mainPinElement.removeEventListener('mouseup', removeListeners)
    }
    
    const startMoving = function () {
        mainPinElement.addEventListener('mousemove', setCoords)
        
        mainPinElement.addEventListener('mouseup', removeListeners)
    }

    mainPinElement.addEventListener('mousedown', startMoving)
}