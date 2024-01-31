const selectbtn=document.getElementById('select-btn');
const text=document.getElementById('text');
const option=document.getElementById('option');

selectbtn.addEventListener('click', function() {
    selectbtn.classList.toggle('active');
});

for(options of option)
{
    options.onclick=function() {
        text.innerHTML=this.textContent;
        selectbtn.classList.remove('active')
    }
}
