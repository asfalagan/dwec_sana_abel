let months = document.getElementById('months');
let months2 = 'Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre';
let a = months2.split(" ")
               .map( (item, index) => `<div class='month'>
                                    <div class='month-number'>${index + 1}</div>
                                    <div class='month-name'>${item}</div>
                               </div>`)
               .join("");
months.innerHTML = a;