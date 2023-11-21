let div_numbers = document.getElementById('numbers');
for (let i = 1; i <= 30; i++){
    let div_number = document.createElement('span');
    div_number.classList.add('number');
    div_number.textContent = i;
    div_numbers.append(div_number);
}
let month_names = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let div_months = document.getElementById('months');
for(let i = 0; i < 12; i++){
    let div_month = document.createElement('div');
    div_month.classList.add('month');
    div_months.append(div_month);
    let div_month_number = document.createElement('div');
    let div_month_name = document.createElement('div');
    div_month_name.classList.add('month-name');
    div_month_number.classList.add('month-number');
    div_month_name.textContent = month_names[i];
    div_month_number.textContent = i + 1;
    div_month.append(div_month_number);
    div_month.append(div_month_name);
}

//la forma de victor 
let div = document.querySelector('#months');
let months2 = 'Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre';
let a = months2.split(" ")
               .forEach( (item, index) =>{
                    let div_month = document.createElement('div');
                    div_month.classList.add('month');
                    div_months.append(div_month);
                    let div_month_number = document.createElement('div');
                    let div_month_name = document.createElement('div');
                    div_month_name.classList.add('month-name');
                    div_month_number.classList.add('month-number');
                    div_month_name.textContent = item;
                    div_month_number.textContent = index + 1;
                    div_month.append(div_month_number);
                    div_month.append(div_month_name);
               })
months.innerHTML = a;