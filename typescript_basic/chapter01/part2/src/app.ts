let a = 1;
import val from './01_default_export'

console.log(val)

function fn(a: number, b: number) {
    return a + b
}

let box = document.getElementById('box')
box?.addEventListener('click', () => {
    alert('success')
})