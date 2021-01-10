b1.onclick = function() {
let a = 12;
let b = "twelve";
let c = !!true;
let d = null;

console.log(`a + b = ${a+b}`);
//переменная а приводится к string

console.log(`a + c = ${a+c}`);
//переменная с приводится к num

console.log(`a + d = ${a+d}`);
//переменная d приводится к num, но становится равной 0

console.log(`b + c = ${b+c}`);
//переменная с приводится к string

console.log(`b + d = ${b+d}`);
//переменная d приводится к string

console.log(`c + d = ${c+d}`);
//переменные c d приводятся к num
};

b2.onclick = function() {
  let a = prompt('Введите первую сторону');
  let b = prompt('Введите вторую сторону');

  console.log(`периметр равен ${a*2 + b*2}`);
  console.log(`площадь равна ${a*b}`);
  console.log(`отношение периметра к площади равна ${(a*2+b*2)/(a*b)}`);
};

b3.onclick = function() {
  t1 = prompt('Введите температуру в градусах Цельсия для перевода в градусы Фаренгейта');
  console.log(`температура1 в градусах Фаренгейта: ${t1*1.8 +32}\xB0F`);
  
  t2 = prompt('Введите температуру в градусах Фаренгейта для перевода в градусы Фаренгейта');
  console.log(`температура2 в градусах Цельсия: ${(t2-32)/1.8}\xB0C `);
}

b4.onclick = function() {
  year = prompt('Введите год');
  alert(((year % 4 == 0) && (year % 100 !== 0)));
};

b5.onclick = function() {
  a = prompt('Первое число =');
  b = prompt('Второе число =');
  console.log( (a == 10 || b == 10|| (+a + +b) ==10) ? 'истина': 'ложь');
}