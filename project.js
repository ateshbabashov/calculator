let ekran = document.getElementsByClassName("ekran1")[0];
let dugme = document.getElementsByTagName("button");
let hesapla = document.getElementById("#basla");
let temizle = document.getElementById("#temizle");

for (var i =0; i < 16;i++){
    if(i != 15 && i != 16) {
        dugme[i].addEventListener("click", yazdir);
    };
};

function yazdir(){
    ekran.value = ekran.value + this.value;
};

hesapla.addEventListener("click", hesap);

function hesap() {
    ekran.value = eval(ekran.value);
};

temizle.addEventListener("click", temiz);

function temiz() {
    ekran.value = "";
};