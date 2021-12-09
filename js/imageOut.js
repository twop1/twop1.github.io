const imageOut = document.querySelector('.image-out');

for (let key in images){
    let img = document.createElement('img');
    img.setAttribute('data-key', key );
    img.src = 'images/'+key+'.jpg';
    imageOut.append(img);
}