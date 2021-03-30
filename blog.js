$(document).ready(function () {
    
    let array = []
    let lay = document.getElementById('lay1')
   
    lay.remove('overlay')
    $('nav').addClass('border')
    addEventListener('scroll', ()=>{
        $('nav').addClass('shadow border')
    })
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
            img = $(`#${yo}`).attr('src')
            console.log(img);

            let ID2 = $(`#btt${i}`).closest('.cadB2').attr('id')
            tit = $(`#${ID2}`).children('.ctl').html();
            sub = $(`#${ID2}`).children('.ctx').html();
            

            let cardDetails = { cadImg: img, cadTitle: tit, cadSub: sub }
            array = [cardDetails]

            localStorage.setItem('posts', JSON.stringify(array))
            // 
            setTimeout(() => {
                location.href = 'post3.html'
            }, 800);

        })
    })

    let getPost = ()=>{
        if (localStorage.getItem('Addpost') !== '') {
            a = JSON.parse(localStorage.getItem('Addpost'))
            console.log(a);
            a.forEach(ele => {
                res.innerHTML += `
                 <div id="caD" class="card cad4 cadP">
                    <img id="imG4" src="C:\Users\ADENIYI LUQMAN\Desktop\Blog\Images\trumpet.jpg" class="card-img-top img" alt="">
                    <div id="cBody4" class="card-body mt-2 cadB2">
                        <p id="ctL4" class="card-title h3 ctl">${ele.postTitle} </p>
                        <p id="caT4" class="card-text ctx d-none">${ele.postAbout}</p>
                        <p id="catT4" class="card-text cat">${ele.postCategory}</p>

                    <button class="btn btn-primary but" id="btt1">READ MORE</button>
                </div>

            </div>`
            });
          
        } else {
            console.log('Empty')
        }
    }


    window.addEventListener('load', getPost)
    // chk.addEventListener('click',()=>{
    //     if (chk.value == 'on') {
    //         console.log('Hello')
    //     }else{
    //         console.log('HI');
            
    //     }
    // })
})
