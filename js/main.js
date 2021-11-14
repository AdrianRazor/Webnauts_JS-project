'use strict';
import getMocksArray from './mock.js'

const mocks = getMocksArray();

function createCardPopup (cardData) {
    const mapCardsContainer = document.querySelector('.map')
    const cardTemplate = document.querySelector('#card').content.cloneNode(true)
    const cardElement = cardTemplate.querySelector('article')

    const cardAvatar = cardElement.querySelector('.popup__avatar')
    const cardTitle = cardElement.querySelector('.popup__title')
    const cardAddress = cardElement.querySelector('.popup__text--address')
    const cardPrice = cardElement.querySelector('.popup__text--price')
    const cardType = cardElement.querySelector('.popup__type')
    const cardCapacity = cardElement.querySelector('.popup__text--capacity')
    const cardTime = cardElement.querySelector('.popup__text--time')
    const cardFeaturesList = cardElement.querySelector('.popup__features')
    const cardDescription = cardElement.querySelector('.popup__description')

    cardAvatar.src = cardData.author.avatar
    cardTitle.textContent = cardData.offer.title
    cardAddress.textContent = cardData.offer.address
    cardPrice.textContent = `${cardData.offer.price} грн/ночь`
    cardType.textContent = cardData.offer.type
    cardCapacity.textContent = `${cardData.offer.rooms} комнат для ${cardData.offer.guests} гостей`
    cardTime.textContent = `Заезд после ${cardData.offer.checkin}, выезд до ${cardData.offer.checkout}`
    
    cardFeaturesList.innetHTML = ''
    cardData.offer.features.forEach((it) => {
        const listItem = `<li class="popup__feature ${`popup__feature` + it}"></li>`
        cardFeaturesList.insertAdjacentHTML('beforeend', listItem)
    });
    
    cardDescription.textContent = cardData.offer.description

    mapCardsContainer.insertAdjacentElement('afterbegin', cardElement)
    
    return cardElement
}

function setPins (dataArr) {
    const mapPinsContainer = document.querySelector('.map__pins')
    const pinTemplate = document.querySelector('#pin')
    const pinElement = pinTemplate.content

    dataArr.map((mock) => {
        const pin = pinElement.cloneNode(true)
        const pinButton = pin.querySelector('button')
        const pinIcon = pin.querySelector('img')

        pinButton.style = `left: ${mock.location.x}px; top: ${mock.location.y}px;`
        pinIcon.src = mock.author.avatar

        mapPinsContainer.insertAdjacentElement('beforeend', pinButton)
        createCardPopup(mock)
    })

}

setPins(mocks)