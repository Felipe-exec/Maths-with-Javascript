function countPA() {
    let start = document.getElementById('txtPAA1');
    let end = document.getElementById('txtPAAn');
    let r = document.getElementById('txtr');
    let res = document.getElementById('resPA');

    if (start.value.length == 0 || end.value.length == 0) {
        window.alert("faltam dados.");
    }
    else {
        res.innerHTML = "Contando"; 
        let st = Number(start.value);
        let en = Number(end.value);
        let step = Number(r.value);

        if (step == 0) {
            window.alert("Razão inválida.")
        }

        if (step <= 0 && st > 0 && en > 0) {
            window.alert("Razão inválida.")
        }

        if (step >= 0) {
            for (let c = st; c <= en; c += step) {
                res.innerHTML += ` 👉 ${c}`;
            }
        } else {
            for (let c = st; c >= en; c += step) {
                res.innerHTML += ` 👉 (${c})`;
            }
        }
    }
}
function countPG() {
    let start = document.getElementById('txtPGA1');
    let end = document.getElementById('txtPGAn');
    let q = document.getElementById('txtq');
    let res = document.getElementById('resPG');

    if (start.value.length == 0 || end.value.length == 0) {
        window.alert("faltam dados.");
    }
    else {
        res.innerHTML = "Contando"; 
        let st = Number(start.value);
        let en = Number(end.value);
        let step = Number(q.value);

        if (step == 0 || step == 1) {
            window.alert("Razão inválida.")
        }

        for (let c = st; c <= en; c *= step) {
            res.innerHTML += ` 👉 ${c}`;
        }
    }
}
