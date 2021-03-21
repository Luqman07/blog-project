$(document).ready(function () {
    

    let array = []
    let lay = $('.lay')
    lay.remove('overlay')
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        lay.classList.add('overlay')
    }
    btn.addEventListener('click', openNav)
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        lay.classList.remove('overlay')
    }
    $('.closebtn').click(closeNav)

    // $('.d1 .hi').addClass('hide')
    $('#bt').click(() => {
        $('.d1 .hi').removeClass('hide')
        $('#bt').hide()

    })

    let butt = document.querySelectorAll('.but')
    butt.forEach((ele, i) => {
        ele.addEventListener('click', () => {
            i++
            let ID = $(`#btt${i}`).closest('.cadP').attr('id')
            yo = $(`#${ID}`).children('.img').attr('id');
            yo1 = $(`#${yo}`).attr('src')
            console.log(yo1);

            let ID2 = $(`#btt${i}`).closest('.cadB2').attr('id')
            yo2 = $(`#${ID2}`).children('.ctl').html();
            yo3 = $(`#${ID2}`).children('.ctx').html();
            yo3 = $(`#${ID2}`).children('.ctx').html();

            let cardDetails = { cadImg: yo1, cadTitle: yo2, cadSub: yo3 }
            array = [cardDetails]

            localStorage.setItem('posts', JSON.stringify(array))
            // 
            setTimeout(() => {
                location.href = 'post3.html'
            }, 700);

        })
    })
})
