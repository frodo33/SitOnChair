document.addEventListener('DOMContentLoaded', function() {
    const arrows = document.querySelectorAll('.list_arrow');
    const lists = document.querySelectorAll('.list_panel');
    const check = document.querySelector('#transport');
    const configPanel = document.querySelector('.panel_left');
    const sumPanel = document.querySelector('.panel_right');
    const sumSpan = document.querySelector('.sum strong');
    const selectInputs = document.querySelectorAll('.drop_down_list');
    let sum = 0;

    check.addEventListener('change', function() {
        if (this.checked) {
            configPanel.children[3].innerHTML = 'Transport';
            sumPanel.children[3].innerHTML = this.dataset.transportPrice;
            sum += Number(this.dataset.transportPrice);
            sumSpan.innerHTML = sum + 'zł';
        }else if(!this.checked) {
            configPanel.children[3].innerHTML = '';
            sumPanel.children[3].innerHTML = '';
            sum -= Number(this.dataset.transportPrice);
            sumSpan.innerHTML = sum + 'zł';
        }
    });

    for (let i=0; i<arrows.length; i++) {
        arrows[i].addEventListener('click', function() {
            lists[i].classList.toggle('list_panel-active');
        });

        for(let j=0; j<lists[i].children.length; j++) {
            lists[i].children[j].addEventListener('click', function() {

                configPanel.children[i].innerHTML = this.innerHTML;
                sumPanel.children[i].innerHTML = this.dataset.price;

                let type = Number(sumPanel.children[0].innerHTML);
                let color = Number(sumPanel.children[1].innerHTML);
                let pattern = Number(sumPanel.children[2].innerHTML);
                let transport = Number(sumPanel.children[3].innerHTML);
                sum = type + color + pattern + transport;

                sumSpan.innerHTML = sum + 'zł';
                selectInputs[i].firstElementChild.innerHTML = this.innerHTML;
                selectInputs[i].firstElementChild.style.color = 'rgba(0,0,0,0.5)';
                lists[i].classList.remove('list_panel-active');
            });

            lists[0].children[0].addEventListener('click', function() {
                document.querySelector('.image_part').firstElementChild["src"] = 'images/black_chair.png';
            })
            lists[0].children[1].addEventListener('click', function() {
                document.querySelector('.image_part').firstElementChild["src"] = 'images/orange_chair.png';
            })
            lists[0].children[2].addEventListener('click', function() {
                document.querySelector('.image_part').firstElementChild["src"] = 'images/red_chair.png';
            })

        }
    }
});