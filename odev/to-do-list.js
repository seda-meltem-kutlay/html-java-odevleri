let textInput= document.querySelector("#task");
const ulDOM= document.querySelector("#list");


function newEleman(){
    const deger=textInput.value.value.trim()
    if(!deger){
        `${'.error.toast'}.toast("show")`
    }else{
        let liDOM= document.createElement("li")
        liDOM.innerHTML=textInput.value
        ulDOM.appendChild(liDOM)

        textInput.value=""
        `${'.success.toast'}.toast("show")`
        let iDOM=document.createElement("i");
        iDOM.classList.add("fa","fa-times","close");
        liDOM.appendChild(liDOM);

        liDOM.addEventListener("click",completed);
        iDOM.addEventListener("click",close);

    }
}

let liAllDOM=document.querySelectorAll("li");

for(let index=0; index< liAllDOM.length; index++){
    liAllDOM[index].addEventListener("click", completed);
}
function completed(){
    if(this.classList.contains("checked"))
    this.classList.remove("checked");
    else this.classList.add("checked");



}
let iAllDOM=document.querySelectorAll("i");
for(let index=0; index< iAllDOM.length; index++){
    iAllDOM[index].addEventListener("click", close);
}
function clos(){
    this.parentElement.remove();
}