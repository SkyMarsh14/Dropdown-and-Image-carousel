export default function toggleVisible(){
    const dropdown=document.querySelector('.dropdown');
    dropdown.addEventListener("click",()=>{
        dropdown.classList.toggle('visible');
    })
}