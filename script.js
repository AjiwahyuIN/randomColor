const btn = document.querySelector('button')

btn.onclick = function () {
    // document.body.style.backgroundColor = '#343A40'
    document.body.classList.toggle('dark');
}

const btnRandomColor = document.createElement('button');
const textBtn = document.createTextNode('Random Color');

btnRandomColor.appendChild(textBtn);

// btnRandomColor.setAttribute('style', 'button');
btnRandomColor.setAttribute('class', 'btn btn-dark')
btn.after(btnRandomColor);

btnRandomColor.addEventListener = ('click', function () {
    const r = math.round(Math.random() * 255 + 1);
    const g = math.round(Math.random() * 255 + 1);
    const b = math.round(Math.random() * 255 + 1);
    // console.log(r);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    // document.body.style.backgroundColor = 'rgb(' + r + ',100,100)';
    // document.body.style.backgroundColor = '#343434';
});

// const redSlider = document.querySelector('input[name=redSlider]');
// redSlider.addEventListener('input', function () {
//     const r = redSlider.value;
//     const g = greenSlider.value;
//     const b = blueSlider.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });
// const greenSlider = document.querySelector('input[name=greenSlider]');
// greenSlider.addEventListener('input', function () {
//     const r = redSlider.value;
//     const g = greenSlider.value;
//     const b = blueSlider.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });
// const blueSlider = document.querySelector('input[name=blueSlider]');
// blueSlider.addEventListener('input', function () {
//     const r = redSlider.value;
//     const g = greenSlider.value;
//     const b = blueSlider.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });

// document.body.addEventListener('mousemove', function (event) {
//     const xPos = Math.round((event.clientX / window.innerWidth) * 255);
//     const yPos = Math.round((event.clientY / window.innerHeight) * 255);

//     document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)';
// });