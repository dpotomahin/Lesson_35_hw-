// Case1
// let a = +prompt('Введите число от 1 до 7')
// switch( a ) {
//     case 1 :
//         alert('Понедельник')
//     break
//     case 2 :
//         alert('Вторник')
//     break
//     case 3 :
//         alert('Среда')
//     break
//     case 4 :
//         alert('Четверг')
//     break
//     case 5 :
//         alert('Пятница')
//     break
//     case 6 :
//         alert('Суббота')
//     break
//     case 7 :
//         alert('Воскресенье')
//     break
//     default :
//     alert('Ошибка')
// }
//console.log(a)


// Case2
// let k = +prompt('Введите число от 1 до 5')
// switch ( k ){
//     case (1):
//         alert('Плохо')
//     break
//     case (2):
//         alert('Неудовлетворительно')
//     break
//     case (3):
//         alert('Удовлетворительно')
//     break
//     case (4):
//         alert('Хорошо')
//     break
//     case (5):
//         alert('Отлично')
//     break
//     default:
//         alert('Ошибка')
// }
//console.log(k)



// Case3
// let a = +prompt('Введите число от 1 до 12')
// switch ( a ){
//     case 1: case 2: case 12:
//         alert('Зима')
//     break
//     case 3: case 4: case 5:
//         alert('Весна')
//     break
//     case 6: case 7: case 8:
//         alert('Лето')
//     break
//     case 9: case 10: case 11:
//         alert('Осень')
//     break
//     default:
//         alert('Ошибка')
// }
//console.log(a)


// Case4
// let a = +prompt('Введите число от 1 до 12')
// switch ( a ){
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         alert('В этом месяце 31 дней')
//     break
//     case 4: case 6: case 9: case 11:
//         alert('В этом месяце 30 дней')
//     break
//     case 2:
//         alert('В этом месяце 28 дней')
//     break
//     default:
//         alert('Ошибка')
// }
//console.log(a)


// Case5
// let a = +prompt('Введите А:')
//     b = +prompt('Введите В:')
//     k = +prompt('Введите действие(1 сложение, 2 вычитание, 3 умножение, 4 деление.)')
// switch ( b ){
//     case 0:
//         alert('В не может равняться нулю')
//     break
//     default:
//         switch ( k ){
//             case 1:
//                 alert( a + b)
//             break
//             case 2:
//                 alert( a - b)
//             break
//             case 3:
//                 alert( a * b)
//             break
//             case 4:
//                 alert( a / b)
//             break
//         }
// }
//console.log(a)
//console.log(b)


// Case6
// let a = +prompt('Введите единици измерения(1 - дециметр. 2-километр. 3 метр, 4-миллиметр, 5-сантиметр.)')
//     b = +prompt('Введите длину отрезка')
// switch ( a ){
//     case 1:
//         alert('Длина отрезка в метрах равна ' + b/10)
//     break
//     case 2:
//         alert('Длина отрезка в метрах равна ' + b*1000)
//     break
//     case 3:
//         alert('Длина отрезка в метрах равна ' + b)
//     break
//     case 4:
//         alert('Длина отрезка в метрах равна ' + b/1000)
//     break
//     case 5:
//         alert('Длина отрезка в метрах равна ' + b/100)
//     break
// }
//console.log(b)


// Case7
// let a = +prompt('Введите единици измерения(1-килограмм, 2-миллиграмм, 3 грамм, 4-тонна, 5 центнер.)')
//     b = +prompt('Введите массу')
// switch ( a ){
//     case 1:
//         alert('Масса тела в килограммах равна  ' + b)
//     break
//     case 2:
//         alert('Масса тела в килограммах равна  ' + b/1000000)
//     break
//     case 3:
//         alert('Масса тела в килограммах равна  ' + b/1000)
//     break
//     case 4:
//         alert('Масса тела в килограммах равна  ' + b*1000)
//     break
//     case 5:
//         alert('Масса тела в килограммах равна  ' + b*100)
//     break
// }
// console.log(b)



// Case8
// let d = +prompt('Введите день месяца')
//     m = +prompt('Введите месяц(1-12)')
// switch (m){
//     case 2: case 4: case 6: case 8: case 9: case 11:
//         switch (d){
//             case 1:
//                 alert('31.' + (m-1));
//             break;
//             default:
//                 alert((d-1) + '.' + m);
//             break;
//         } break;
//     case 5: case 7: case 10: case 12:
//         switch (d){
//             case 1:
//                 alert('30.' + (m-1));
//             break;
//             default:
//                 alert((d-1) + '.' + m);
//             break;
//         } break;
//     case 1:
//         switch(d){
//             case 1:
//                 alert('31.12');
//             break;
//         default:
//             alert((d-1) + '.' + m);
//         break;
//         } break;
//     case 3:
//         switch(d){
//             case 1 :
//                 alert('28.02');
//             break;
//         default:
//             alert((d-1) + '.' + m);
//         break;
//         } break;
// }
// console.log(m)
// console.log(d)


// Case9
// let d = +prompt('Введите день месяца')
//     m = +prompt('Введите месяц(1-12)')
// switch(m){
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         switch (d){
//             case 31:
//                 alert('1.' + (m+1));
//             break;
//             default:
//                 alert(d+1 + '.' + m);
//             break;
//         }break
//     case 4: case 6: case 9: case 11:
//         switch(d){
//             case 30:
//                 alert('1.' + (m+1));
//             break;
//             default:
//                  alert(d+1 + '.' + m);
//             break;
//         }break
//     case 2:
//         switch(d){
//             case 28:
//                 alert('1.' + (m+1));
//             break;
//             default:
//                  alert(d+1 + '.' + m);
//             break;
//         }break
// }
// console.log(m)
// console.log(d)



// Case10
// let c = prompt('Выбирете исходное направление робота («С» - север, «3» запад, «ю» - юг, «в» - восток)')
//     n = +prompt('Выбирете какую команду вы хотите послать роботу (0 продолжать движение, 1 - поворот налево, (-1) - поворот на право.)')
// switch (c){
//     case 'с':
//         switch (n){
//             case -1:
//                 alert('Робот направлен на Всток')
//             break
//             case 1:
//                 alert('Робот направлен на Запад')
//             break
//             case 0:
//                 alert('Робот направлен на Север')
//             break
//         }break
//     case 'з':
//         switch (n){
//             case -1:
//                 alert('Робот направлен на Север')
//             break
//             case 1:
//                 alert('Робот направлен на Юг')
//             break
//             case 0:
//                 alert('Робот направлен на Запад')
//             break
//         }break
//     case 'ю':
//        switch (n){
//            case -1:
//                alert('Робот направлен на Запад')
//            break
//            case 1:
//                alert('Робот направлен на Восток')
//            break
//            case 0:
//                alert('Робот направлен на Юг')
//            break
//        }break
//     case 'в':
//      switch (n){
//          case -1:
//              alert('Робот направлен на Юг')
//          break
//          case 1:
//              alert('Робот направлен на Север')
//          break
//          case 0:
//              alert('Робот направлен на Восток')
//          break
//      }break
//      default:
//          alert('Значение было выбрано некоректно')
//     break    
// }
// console.log(c)
// console.log(n)


// Case11
// let c = prompt('Выбирете исходное направление локатора («С» - север, «3» запад, «ю» - юг, «в» - восток)')
//     n1 = +prompt('Выбирете какую первую команду вы хотите послать локатору (2 - поворотна 180, 1 - поворот налево, (-1) - поворот на право.)')
//     n2 = +prompt('Выбирете какую первую команду вы хотите послать локатору (2 - поворотна 180, 1 - поворот налево, (-1) - поворот на право.)')
// switch (c){
//     case 'с':
//         switch (n1){
//             case -1:
//                 c = 'в'
//             break
//             case 1:
//                 c = 'з'
//             break
//             case 2:
//                 c = 'ю'
//             break
//         }break
//     case 'з':
//         switch (n1){
//             case -1:
//                 c = 'с'
//             break
//             case 1:
//                 c = 'ю'
//             break
//             case 2:
//                 c = 'в'
//             break
//         }break
//     case 'ю':
//         switch (n1){
//             case -1:
//                 c = 'з'
//             break
//             case 1:
//                 c = 'в'
//             break
//             case 2:
//                 c = 'с'
//             break
//         }break
//     case 'в':
//         switch (n1){
//             case -1:
//                 c = 'ю'
//             break
//             case 1:
//                 c = 'с'
//             break
//             case 2:
//                 c = 'з'
//             break
//         }
// }
// switch (c){
//     case 'с':
//         switch (n2){
//             case -1:
//                 alert('Ориентация локатора - Восток')
//             break
//             case 1:
//                 alert('Ориентация локатора - Запад')
//             break
//             case 2:
//                 alert('Ориентация локатора - Юг')
//             break
//         }break
//     case 'з':
//         switch (n2){
//             case -1:
//                 alert('Ориентация локатора - Север')
//             break
//             case 1:
//                 alert('Ориентация локатора - Юг')
//             break
//             case 2:
//                 alert('Ориентация локатора - Восток')
//             break
//         }break
//     case 'ю':
//         switch (n2){
//             case -1:
//                 alert('Ориентация локатора - Запад')
//             break
//             case 1:
//                 alert('Ориентация локатора - Восток')
//             break
//             case 2:
//                 alert('Ориентация локатора - Север')
//             break
//         }break
//     case 'в':
//         switch (n2){
//             case -1:
//                 alert('Ориентация локатора - Юг')
//             break
//             case 1:
//                 alert('Ориентация локатора - Север')
//             break
//             case 2:
//                 alert('Ориентация локатора - Запад')
//             break
//         }
// }
// console.log(c)
// console.log(n1)
// console.log(n2)


// Case12
// let a = +prompt('Выбирете какой параметр вам известен(1-paдиус, 2 - диаметр, 3 - длина, 4 - площадь круга):')
//     b = +prompt('Укажите значение выбраног параметра:')
// let r,d,l,s;
// switch ( a ){
//     case 1:
//         d = 2*b;
//         l = 2*3.14*b;
//         s = 3.14*(b**2);
//     alert('Диаметр равен ' + d + ';   Длина круга равна ' + l + ';   Плщадь круга равна ' + s)
//     break
//     case 2:
//         r = b/2;
//         l = 2*3.14*r;
//         s = 3.14*(r**2);
//     alert('Радиус равен ' + r + ';   Длина круга равна ' + l + ';   Плщадь круга равна ' + s)
//     break
//     case 3:
//         r = b/(3.14*2)
//         d = 2*r;
//         s = 3.14*(r**2);
//     alert('Диаметр равен ' + d + ';   Радиус круга равна ' + r + ';   Плщадь круга равна ' + s)
//     break
//     case 4:
//         r = (b/3.14)**0.5;
//         d = 2*r;
//         l = 2*3.14*r;
//     alert('Диаметр равен ' + d + ';   Радиус круга равна ' + r + ';   Длина круга равна ' + l)
//     break
// }
// console.log(r)
// console.log(d)
// console.log(l)
// console.log(s)


let selector = document.getElementById('select');
    p = document.querySelector('p');
selector.addEventListener('change', function(){
let a = selector.value
    if ( a == 's15'){
        p.innerHTML = `     <h1>Nissan Silvia S15</h1>
                             <div class="s15">
                               <img src="./img/1662811.jpg" alt="">
                               <div class="s15_info">
                                 <h3>Motor: <span> SR20DET</span></h3>
                                 <hr>
                                 <h3>Power: <span> 800hp</span></h3>
                                 <hr>
                                 <h3>Torque: <span> 960Nm</span></h3>
                                 <hr>
                                 <div class="s15_volumes">
                                   <h2>Sound:</h2>
                                   <audio controls>
                                     <source src="./Audio/zvuk-motora-nissan-silvia_(mp3IQ.net).mp3" type="">
                                   </audio>
                                 </div>
                               </div>
                            </div>`
    } else if ( a == '370z'){
        p.innerHTML = `      <h1>Nissan 370-Z</h1>
                             <div class="z370">
                               <img src="./img/badassvr-z-2.jpg" alt="">
                               <div class="s15_info">
                                 <h3>Motor: <span> VR38</span></h3>
                                 <hr>
                                 <h3>Power: <span> 1000hp</span></h3>
                                 <hr>
                                 <h3>Torque: <span> 1200Nm</span></h3>
                                 <hr>
                                 <div class="s15_volumes">
                                   <h2>Sound:</h2>
                                   <audio controls>
                                     <source src="./Audio/Sound Efects - Nissan Skyline R33_(AlertAudio.ru).mp3" type="">
                                   </audio>
                                 </div>
                               </div>
                            </div>`
    } else if ( a == '180sx'){
        p.innerHTML = `      <h1>Nissan 180 SX</h1>
                              <div class="sx180">
                                <img src="./img/image1.jpg" alt="">
                                <div class="s15_info">
                                  <h3>Motor: <span> SR20DET</span></h3>
                                  <hr>
                                  <h3>Power: <span> 700hp</span></h3>
                                  <hr>
                                  <h3>Torque: <span> 750Nm</span></h3>
                                  <hr>
                                  <div class="s15_volumes">
                                    <h2>Sound:</h2>
                                    <audio controls>
                                      <source src="./Audio/zvuk-motora-nissan-silvia_(mp3IQ.net).mp3" type="">
                                    </audio>
                                  </div>
                                </div>
                             </div>`
    } else if ( a == 'Mark'){
        p.innerHTML = `     <h1>Toyota Mark II</h1>
                             <div class="mark">
                               <img src="./img/0fcc48e6-87fd-4dad-9754-41ea361528d2_jpg_805x1000_x-False_q85.jpg" alt="">
                               <div class="s15_info">
                                 <h3>Motor: <span> JZ-GTE</span></h3>
                                 <hr>
                                 <h3>Power: <span> 650hp</span></h3>
                                 <hr>
                                 <h3>Torque: <span> 680Nm</span></h3>
                                 <hr>
                                 <div class="s15_volumes">
                                   <h2>Sound:</h2>
                                   <audio controls>
                                     <source src="./Audio/2JZ - GTE Supra exhaust.mp3" type="">
                                   </audio>
                                 </div>
                               </div>
                            </div>`
    } else{
      p.innerHTML = ``
    }
})