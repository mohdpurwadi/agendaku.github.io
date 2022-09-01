// Menambahkan "Tutup" pada button
var agendaKu = document.getElementsByTagName("LI");
var i;
for (i = 0; i < agendaKu.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00d7");
    span.className = "tutup";
    span.appendChild(txt);
    agendaKu[i].appendChild(span);
}

// Ketika klik "Tutup" tombol akan disembunyikan
var tutup = document.getElementsByClassName("tutup");
var i;
for (i = 0; i < tutup.length; i++) {
    tutup[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Menambahkan tanda "dicek" pada lists
var list = document.querySelector('ul');
list.addEventListener('click',function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('dicek');
    }
}, false);

// Menambahkan list baru ketika klik tambah
function newElement(){
    var li = document.createElement("li");
    var inputNilai = document.getElementById("judulKegiatan").value;
    var t = document.createTextNode(inputNilai);
    li.appendChild(t);
    if (inputNilai === '') {
        alert("Kamu Belum Mengisikan Agendamu!");
    } else {
        document.getElementById("Lists").appendChild(li);
    }

    document.getElementById("judulKegiatan").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "tutup";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < tutup.length; i++) {
        tutup[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}