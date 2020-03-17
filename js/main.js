const time=document.getElementById('time');
const name =document.getElementById('name');
const greeting=document.getElementById('greeting');
const focus=document.getElementById('focus');



const showTime=()=>{
    let today=new Date();
    let hours=today.getHours();
    let minutes=today.getMinutes();
    let seconds=today.getSeconds();
    
    const amPm=(hours>=12)? 'PM' : 'AM';
    hours=hours%12||12;
    time.innerHTML=`${hours}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)} ${amPm}`;
    
    setTimeout(showTime,1000);
}
const addZero=(n)=>{
    return (parseInt(n,10) <10 ? '0' :'')+n;
}
const setBGImage=()=>{
    let today=new Date();
    let hours=today.getHours();
    
    if(hours<12){
        document.body.style.backgroundImage="url('../img/aerial-photo-of-mountain-surrounded-by-fog-733174.jpg')";
        greeting.textContent="Good Morning";
    }else if(hours<18){
        document.body.style.backgroundImage="url('../img/silhouette-of-mountain-during-golden-hour-2386144.jpg')";
        greeting.textContent="Good Afternoon"
    }else if(hours>18){
        document.body.style.backgroundImage="url('../img/cold-dark-eerie-environment-414144.jpg')";
        greeting.textContent="Good Evening";
        document.body.style.color='#fff';
    }
}
const getName=()=>{
    if(localStorage.getItem('name')==null){
        name.textContent="[Enter name]";
    }
    else{
        name.textContent=localStorage.getItem('name');
    }
}
const getFocus=()=>{
    if(localStorage.getItem('focus')==null){
        focus.textContent="[Enter your focus for today]";
    }
    else{
        focus.textContent=localStorage.getItem('focus');
    }
}
const setName=(event)=>{
    if(event.type=='keypress'){
        //Make sure the ENTER key has been pressed
        if(event.which==13 || event.keyCode==13){
                localStorage.setItem('name',event.target.innerHTML);
                name.blur();
           }
        
    }else{
        localStorage.setItem('name',event.target.innerHTML);
    }
}
const setFocus=(event)=>{
    if(event.type=='keypress'){
        if(event.which==13 || event.keyCode==13){
            localStorage.setItem('focus',event.target.innerHTML);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus',event.target.innerHTML);
    }
}
name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);

focus.addEventListener('keypress',setFocus);
focus.addEventListener('blur',setFocus);

showTime();
setBGImage();
getName();
getFocus();