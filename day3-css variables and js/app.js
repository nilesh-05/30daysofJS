const inputs = document.querySelectorAll('.controls input')
function handle(){
    // console.log(this.value)
    const suffix = this.dataset.sizing || ''
    // console.log(suffix)
    // select variable
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix )
}

inputs.forEach(input => input.addEventListener('change',handle))
inputs.forEach(input => input.addEventListener('mousemove', handle))