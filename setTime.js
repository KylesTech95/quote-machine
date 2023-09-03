//Declarations of Time
let time = document.getElementById('time'),
    current = new Date(),
    hours = current.getHours(),
    minutes = current.getMinutes(),
    seconds = current.getSeconds(),
    display = [hours, minutes, seconds];


//Dynamically updating time (12Hr)
let currTime = () =>{
    setInterval(() => {
        //Seconds
        let s = 1, currSecs = display[2]% 60;
        currSecs += s;
        s = currSecs;
        display[2] = currSecs;
        //minutes
        let m = 1, currMins = display[1] % 60
        if (display[2] == 60) {
            currMins += m;
            m = currMins;
            display[1] = currMins;
        }
        //Hours
        let h = 1, currHours;
        if (display[1] == 60) {
            currHours += h;
            h = currHours;
            display[0] = currHours;
        }
        //Set the time
        time.value = [`${display[0] < 10 ? "0" + display[0] : display[0]}`, `${display[1] < 10 ? "0" + display[1] : display[1]}`, `${display[2] < 10 ? "0" + display[2] : display[2]}`].join`:`;
    }, 1000)
} 
currTime()




//if first button is pressed
let btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', (e) => {
    time.style = 'opacity: 0; transition: .5s ease;'
    setTimeout(() => {
        clearTimeout(currTime)
        time.value = '';
        if (e.target.style.transform == `scale(.98)`) {
            e.target.style = 'transform: scale(.95); box-shadow: none; transition: .2s ease;'
            console.log(e.target.style.transform);
        }
    }, 1000)
    setTimeout(() => {
        e.target.textContent = 'stopWatch!';
        time.style = 'opacity:1; transition: .75s ease;'
        return stopWatch()
    }, 1250)
})


