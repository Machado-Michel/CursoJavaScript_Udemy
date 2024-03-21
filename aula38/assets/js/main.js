const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backColor = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backColor;
    p.style.color = '#FFFFFF';
}