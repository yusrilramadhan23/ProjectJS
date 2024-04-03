const inputText = document.getElementById("inputText");
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");

function generateQR(){
    if(inputText.value.length > 0){
        qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + inputText.value    
        imgBox.classList.add("show-img")
    }else{
        inputText.classList.add("error")
        setTimeout(() => {
            inputText.classList.remove("error")
        },1000)
    }
}