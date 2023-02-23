function generate() {
    let num = document.getElementById("txtNumTab");
    let tab = document.getElementById("seltab");
    if (num.value.length == 0) {
        window.alert("Digite um número!");
    }
    else {
        let n = Number(num.value);
        let c = 1;
        let res = n*c;
        tab.innerHTML = '';
        if (n <= 10) {
            while (c <= 10) {
                let item = document.createElement("option");
                item.text = `${n} x ${c} = ${n*c}`;
                tab.appendChild(item);
                c++;
            }
        }
        else {
            while (c <= n) {
                let item = document.createElement("option");
                item.text = `${n} x ${c} = ${n*c}`;
                tab.appendChild(item);
                c++;
            }
        }

    }
  }