let index=0;
let tracks=document.getElementById("track");
let total=8;
let visible=4;
function change(n){
    index=index+n;
    if(index > total- visible) index= total-visible;
    if(index < 0)index=0;
    tracks.style.transform="translateX(-"+(index*25)+"%";
}


// second slider//

let next=document.querySelector('.next')
let prev=document.querySelector('.prev')

next.addEventListener('click' ,function(){
   let items = document.querySelectorAll('.item')
   document.querySelector('.slider3').appendChild(items[0])
})
prev.addEventListener('click' ,function(){
   let items = document.querySelectorAll('.item')
   document.querySelector('.slider3').prepend(items[items.length-1])
})
//third slider//
let indexs=0;
let tracks2=document.getElementById("track2")
let totals=8;
let visibles=4;
function changes(n){
   indexs=indexs+n;
   if( indexs>totals-visibles)indexs=totals-visible;
   if(indexs< 0)indexs=0;
   tracks2.style.transform="translateX(-"+(indexs*25)+"%";
}

