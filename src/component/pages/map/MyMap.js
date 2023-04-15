import React, { useEffect } from "react";


export default function MyMap (){
    let dataApi = 0
    React.useEffect(() =>
    {
        fetch("https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU")
          .then((response) => response)
          .then((dataApi) => console.log('This is your data', dataApi));


  },[])
       

    // var myMap;

    // // Дождёмся загрузки API и готовности DOM.
    // ymaps.ready(init);
    
    // function init () {
    //     // Создание экземпляра карты и его привязка к контейнеру с
    //     // заданным id ("map").
    //     myMap = new ymaps.Map('map', {
    //         // При инициализации карты обязательно нужно указать
    //         // её центр и коэффициент масштабирования.
    //         center: [47.208208, 38.937189], 
    //         zoom: 12
    //     }, {
    //         searchControlProvider: 'yandex#search'
    //     });
    
    //     document.getElementById('destroyButton').onclick = function () {
    //         // Для уничтожения используется метод destroy.
    //         myMap.destroy();
    //     };
    
    // }

    return(
        <div>
            Map
        </div>
    )
}