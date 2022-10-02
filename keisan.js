const price_list = document.getElementById("kento_id");
const price_list2 = document.getElementById("ema_id");
let goukei = 0;
let goukei2 = 0;

function form_input(){
   const radio = document.price_form.radio.value;
   if(radio === "matsu"){
        const li = document.createElement("li");
        li.textContent = document.price_form.soloprice.value;
        const soloprice = Math.ceil(document.price_form.soloprice.value);
        total_method(soloprice,radio);
     price_list.appendChild(li);
        document.getElementById("goukei").textContent = goukei;
   }
   else if(radio === "ema"){
    const li2 = document.createElement("li");
    li2.textContent = document.price_form.soloprice.value;
    const soloprice2 = Math.ceil(document.price_form.soloprice.value);
    total_method(soloprice2,radio);
    price_list2.appendChild(li2);
    document.getElementById("goukei2").textContent = goukei2;
   }
   else if(radio === "共通"){
    const li3 = document.createElement("li");
    const li4 = document.createElement("li");
    li3.textContent = Math.ceil(document.price_form.soloprice.value / 2);
    li4.textContent = Math.ceil(document.price_form.soloprice.value / 2);
    const soloprice3 = Math.ceil(document.price_form.soloprice.value / 2);
    total_method(soloprice3,radio);
 price_list.appendChild(li3);
    price_list2.appendChild(li4);
    document.getElementById("goukei").textContent = goukei;
    document.getElementById("goukei2").textContent = goukei2;
   }
   return false;
}

function total_method(atai,radio){
    if(radio === "matsu"){
     goukei += atai;
     return goukei;
    }
    else if(radio === "ema"){
        goukei2 += atai;
        return goukei2;
    }
    else if(radio === "共通"){
        goukei += atai;
        goukei2 += atai;
        return goukei , goukei2;
    }
}