window.addEventListener('keydown', function (e) {
    // console.log(e.keyCode);
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // console.log(audio)
    if(!audio)    return
    audio.currentTime = 0 //rewind to start for multiple plays in a second
    audio.play()
    // this.console.log(key)
    key.classList.add('playing')

})
const keys = document.querySelectorAll('.key')
// console.log(keys)
keys.forEach(key => key.addEventListener('transitionend',removeTransition))

function removeTransition(e){
    // console.log(e)
    if(e.propertyName !== 'transform') return 
    // console.log(e.propertyName)  
    this.classList.remove('playing') 
}