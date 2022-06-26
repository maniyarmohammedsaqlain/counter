const counter=document.querySelectorAll(".h4");
counter.forEach((count)=>{
    // console.log(counter);
    count.innerHTML=0;
    const upcount=()=>{
        const getDataTarget= +count.getAttribute("data-target")
        
        const scount=+count.innerHTML;
        const incre= getDataTarget/100;
        if(scount<getDataTarget){
            count.innerHTML=`${scount + incre}`;
            setInterval(upcount,100);
            // setTimeout(upcount,100);
        }
    }
    upcount();

})
