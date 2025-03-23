function getRandomRGB(){
    const red=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)
    const green=Math.floor(Math.random()*256)
    return `rgb(${red},${blue},${green})`
}
let intervalId
document.getElementById('start').addEventListener('click',()=>{
    intervalId=setInterval(()=>{
    const bgColor=getRandomRGB()
    document.body.style.backgroundColor=bgColor}
    ,100)}
)
document.getElementById('stop').addEventListener('click',()=>{
    clearInterval(intervalId)
}
)
document.getElementById('reset').addEventListener('click',()=>{
    location.reload()
})