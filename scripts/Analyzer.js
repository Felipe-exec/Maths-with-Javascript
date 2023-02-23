let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let values = []

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    }
    else {
        return false;
    }
}

function Count() {
    let tot = values.length;
    let higher = values[0];
    let smaller = values[0];
    let sum = 0;
    let average = 0;
    for (let pos in values) {
        sum += values[pos];
        if (values[pos] > higher) {
            higher = values[pos];
        }
        if (values[pos] < smaller) {
            smaller = values[pos];
        }
    }
    average = sum / tot;
    res.innerHTML = ''
    res.innerHTML += `<p>🧾 - ${tot} números foram cadastrados.</p>`
    res.innerHTML += `<p>🦁 - ${higher} é o maior número.</p>`
    res.innerHTML += `<p>🐭 - ${smaller} é o menor número.</p>`
    res.innerHTML += `<p>➕ - ${sum} é a soma de todos os valores</p>`
    res.innerHTML += `<p>➕➗ - ${average} é a média de todos os valores</p>`
}

function add() {
    if(isNumber(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value));
        let item = document.createElement("option");
        item.text = `valor ${num.value} adicionado.`;
        list.appendChild(item);
        res.innerHTML = '';
        if(values.length == 0) {
            window.alert("Adicione valores antes de começar!");
        }
        else {
            Count();
        }
    }
    else {
        window.alert("Número inválido ou repetido.");
    }
    num.value = '';
    num.focus();
}

function remove() {
    if (isNumber(num.value) && inList(num.value, values)) {
        values.splice(values.indexOf(Number(num.value)), 1);
        let item = document.createElement("option");
        item.text = `valor ${num.value} removido.`;
        list.appendChild(item);
        res.innerHTML = '';
        if(values.length == 0) {
            window.alert("Adicione valores antes de começar!");
        }
        else {
            Count();
        }
        num.value = '';
        num.focus();

    }
    else {
        window.alert("Número não existente na lista.");
    }
    return list;
}