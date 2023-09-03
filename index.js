
//DOM & uploaded JSON data 
const kyles_drive = (data) =>{
//global dependencies
let quote = document.getElementById('text'),
    author_con = document.querySelector('.author-container'),
    author = document.getElementById('author'),
    tweet = document.querySelector('.tweet'),
    git = document.querySelector('.git'),
    button = document.getElementById('new-quote'),
    body = document.querySelector('body'),
    container = document.querySelector('.quote-container'),
    posText = document.querySelector('.mousepos'),
    pos_container = document.querySelector('.mouse_position'),
    count = 1,
    arr = [tweet,git,button],
    mousepos = {x:undefined,y:undefined},
    clickMe = document.querySelector('.toggle'),
    back = (el,num) => el.style = `background:var(--color${num}); transition:1s ease;`,
    col = (el,num) => el.style = `color:var(--color${num}); transition: 1s ease;`;
    add_shadow_class = (el) => el.classList.add('ky-shadow');
    
//Bootstrap add customized shadow class
add_shadow_class(pos_container)
add_shadow_class(container)
//plant a quote by random sequence
random_start = () => {
    let num = Math.floor(Math.random()*6)
    quote.innerHTML = `" ${data[num].quote} "`
    author.innerHTML = "- "+data[num].author
    author.setAttribute('id','author')
    col(quote,num)
    col(author,num)
    back(tweet,num)
    back(git,num)
    back(button,num)
    back(body,num)
    // light_dark(num)
}
random_start()
 change_state = () =>{
    num = (count+=1) % 6,
    col(quote,num)
    col(author,num)
    back(tweet,num)
    back(git,num)
    back(button,num)
    back(body,num)
    // light_dark(num)

//change quote
    data.forEach(element =>{
        let auth = element.author,
            quo = element.quote
        if(element.id == num) {
            quote.innerHTML = `" ${quo} "`;
            author.innerHTML = "- " + auth;
            console.log(quo)
            quo.split` `.length >= 20 ? quote.style.fontSize = "25px" : quote.style.fontSize = "30px" 
        }
        
    })
}
//Obtain the current mouse position
window.addEventListener('mousemove',e=>{
    let authX = author.getBoundingClientRect().x,
        authY = author.getBoundingClientRect().y,
        endX = authX + author.getBoundingClientRect().width,
        endY = authY + author.getBoundingClientRect().height,
        midX = endX/2;
        midY=endY/2

    mousepos = {x:e.clientX,y:e.clientY};
    author_con.style=`transform: translate(${(authX/(mousepos.x))%20}px,${(authY/mousepos.y)%20}px)`;
    posText.innerHTML = `<span class="rounded px-1 shadow">x:${mousepos.x}</span> <span class="rounded px-1 shadow">y:${mousepos.y}</span>`
})
//mouseover hovering
for(let i = 0; i < arr.length; i++){
    arr[i].addEventListener('mouseover',(e)=>{
        let background = e.target.style.background
        let rigged_back = background.replace(/(color\d)/,'$1-dim')
        e.target.style = `background:${rigged_back};transition:.3s;`
        console.log(rigged_back)
    })
    arr[i].addEventListener('mouseout',(e)=>{
        let background = e.target.style.background
        let rigged_norm = background.replace(/-dim/,'')
        e.target.style = `background: ${rigged_norm};transition:.3s;`
        console.log(rigged_norm)
    })
}
//open and close the mouse pos dialogue
press = () =>{
    posText.classList.toggle('active-display');
    pos_container.classList.toggle('active-toggle');
}
}
/*_______________________________________________________*/
//Upload JSON Data
const upload_json = () => {
    //xmlHttpRequest()
    let xml = new XMLHttpRequest();
    let method = "GET";
    let url = "random.json";
    //Sister Link from @ api.json-generaton.com
    /*https://api.json-generator.com/templates/AH06nBsHHSRu/data?access_token=zq7knr1vbksze2jgpzpbsu84ih0dyenwy4wii4yf*/
    xml.open(method,url,true)
    xml.onload = (d) => {
        let data = JSON.parse(d.target.response);
        kyles_drive(data.content)
    }
    xml.send()
}
upload_json()
