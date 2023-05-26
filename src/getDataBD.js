//----------------------------------------------------------------------------
// как выглядит php // название переменной myPerem неважно
// $myPerem = [
//     [        
            // личная страница 
//          // название переменной MyPageInfo и busyData и тд важны не менять !
//         'MyPageInfo' => array('name' => 'John Silver', 'car' => 'lada приора'),

            // календарь
//         'busyData' => ['05.03.2023','28.02.2023', '17.04.2023', '02.05.2023', '20.05.2023'],

            // выбор времени
            // 'occupiedElement' => [[10,15] , [11,0], [11,45], [13,0], [15,15] , [22,30]],

            // Выбор бокса
            // 'occupiedElementBox' => [1,2,6,12],

            // блок информации на карте
        // 'homePageInfo' =>  array('time' => 'Круглосуточно', 'address' => 'Западная ул. 10а', 'name' => 'MOI CUM'),
            


//     ]
// ]; 
// echo json_encode($myPerem);


var url_MyPage = 'http://cl07635.tw1.ru/data.php' // личная страница пользователя 
export {url_MyPage}

var url_NewCalendar = 'http://cl07635.tw1.ru/data.php'  // Календарь
export {url_NewCalendar}

var url_SelectTime = 'http://cl07635.tw1.ru/data.php' // Выбор времени
export {url_SelectTime}

var url_SelectBox = 'http://cl07635.tw1.ru/data.php' // Выбор бокса
export {url_SelectBox}

var url_HomePage = 'http://cl07635.tw1.ru/data.php' // блок информации на карте
export {url_HomePage}

var url_WashPage = 'http://cl07635.tw1.ru/data.php' // блок информации страница подробнее о мойке
export {url_WashPage}


//----------------------------------------------------------------------------
