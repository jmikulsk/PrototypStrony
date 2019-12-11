window.onload =function (){
    let button = document.getElementById('kosz');
    let boxContainer = document.getElementById('box-container');
    let articleContainer = document.getElementById("article");
    let licznik =1;

    boxContainer.addEventListener('click',function (e) {
        console.log(e);
        if(e.target.className.includes('article'|| article.child)){
            this.removeChild(e.target);
            // e.target.style.border='5px solid blue'
            let nowyElement = document.createElement('div');
            nowyElement.classList.add('box');
            nowyElement.textContent=licznik;
            ++licznik;
            button.appendChild(nowyElement);

        }
    });
    // articleContainer.addEventListener('click', function () {
    //     let nowyElement = document.createElement('div');
    //     nowyElement.classList.add('box');
    //     nowyElement.textContent=licznik;
    //     ++licznik;
    //     button.appendChild(nowyElement);
    //
    // });



}