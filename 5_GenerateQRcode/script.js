const typeText = document.getElementById("typeText");
const qrImage = document.getElementById("qrImage");
const imgBox = document.getElementById("imgBox");

function generateQR(){
    if(typeText.value.length > 0 ){
        qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + typeText.value
        imgBox.classList.add("show-img")
    }else{
        typeText.classList.add("error")
        setTimeout(() => {
            typeText.classList.remove("error")
        }, 1000)
    }
}