 function baholash() {
    let baholash = prompt('Talabaning bahosini kiriting:');
    baholash = Number(baholash);
    if (baholash >= 90 && baholash <= 100) {
        alert('A');
    } else if (baholash >= 80 && baholash < 90) {
        alert('B');
    } else if (baholash >= 70 && baholash < 80) {
        alert('C');
    } else if (baholash >= 60 && baholash < 70) {
        alert('D');
    } else if (baholash == 60) {
        alert('F');
    } else {
        alert('Umuman oqimagan ekansizda a !!!');
    }
    document.getElementById('vazifa2').style.display = 'block'; 
}

 function harorat() {
    let harorat = prompt('Haroratni kiriting:');
    harorat = Number(harorat);
    if (harorat < 0) {
        alert('Muzlayapti');
    } else if (harorat >= 0 && harorat <= 10) {
        alert('Juda sovuq');
    } else if (harorat >= 11 && harorat <= 20) {
        alert('Sovuq');
    } else if (harorat >= 21 && harorat <= 30) {
        alert('Issiq');
    } else if (harorat > 30) {
        alert('Juda issiq');
    } else {
        alert('Notogri harorat kiritildi!');
    }
    document.getElementById('vazifa3').style.display = 'block';  
}

 function hafta() {
    let hafta = prompt("Haftani aniqlash uchun 1-7 gacha son kiritng !!!");
    hafta = Number(hafta);
    if (hafta == 1) {
        alert("Dushanba");
    } else if (hafta == 2) {
        alert("Seshanba");
    } else if (hafta == 3) {
        alert("Chorshanba");
    } else if (hafta == 4) {
        alert("Payshanba");
    } else if (hafta == 5) {
        alert("Juma");
    } else if (hafta == 6) {
        alert("Shanba");
    } else if (hafta == 7) {
        alert("Yakshanba");
    } else {
        alert("siz notogri raqam kiritdingiz.");
    }
    document.getElementById('vazifa4').style.display = 'block';  
}

 function masofa() {
    let masofa = prompt("Yurgan masofani kiriting (km):");
    masofa = Number(masofa);
    let narx;

    if (masofa <= 3) {
        narx = 10000;
    } else if (masofa > 3 && masofa <= 10) {
        narx = 10000 + (masofa - 3) * 2000;
    } else if (masofa > 10) {
        narx = 25000 + (masofa - 10) * 1500;
    } else {
        alert("Noto‘g‘ri masofa kiritildi!");
    }

    if (narx) {
        alert("Taksi narxi: " + narx + " so‘m");
    }
    document.getElementById('vazifa5').style.display = 'block';  
}

 function trafik() {
    let trafik = prompt("Istemol qilingan internet trafikingizni kiriting (GB):");
    trafik = Number(trafik);
    let narx1;

    if (trafik <= 1) {
        narx1 = 5000;
    } else if (trafik > 1 && trafik <= 5) {
        narx1 = 5000 + (trafik - 1) * 4000;
    } else if (trafik > 5) {
        narx1 = 5000 + 4 * 4000 + (trafik - 5) * 3000;
    } else {
        alert("Noto‘g‘ri trafik qiymati kiritildi!");
    }

    if (narx1) {
        alert("Internet-trafik narxi: " + narx1 + " so‘m");
    }
    document.getElementById('vazifa6').style.display = 'block'; 
}

 function fasl() {
    let fasl = prompt('Oyni kiriting. Masalan: Noyabr');
    fasl = String(fasl);
    if (fasl == "Mart" || fasl == 'Aprel' || fasl == 'May') {
        alert('Bahor fasli');
    } else if (fasl == 'Iyun' || fasl == 'Iyul' || fasl == 'Avgust') {
        alert('Yoz fasli');
    } else if (fasl == 'Sentyabr' || fasl == 'Oktyabr' || fasl == 'Noyabr') {
        alert('Kuz Fasli');
    } else if (fasl == 'Dekabr' || fasl == 'Yanvar' || fasl == 'Fevral') {
        alert('Qish Fasli');
    } else {
        alert('Bunday fasl mavjud emas!!!');
    }
}

 document.getElementById('vazifa1').onclick = function() {
    baholash();
};

document.getElementById('vazifa2').onclick = function() {
    harorat();
};

document.getElementById('vazifa3').onclick = function() {
    hafta();
};

document.getElementById('vazifa4').onclick = function() {
    masofa();
};

document.getElementById('vazifa5').onclick = function() {
    trafik();
};

document.getElementById('vazifa6').onclick = function() {
    fasl();
};
