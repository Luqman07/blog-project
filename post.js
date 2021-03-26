$(document).ready(() => {
    let layT = document.getElementById('lay2')
    function openNav() {
        console.log(layT);
        
        document.getElementById("mySidenav").style.width = "250px";
        layT.classList.add('overlay')
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        layT.classList.remove('overlay')
    }
    btn.addEventListener('click', openNav)
    $('.closebtn2').click(closeNav)
    addEventListener('load', () => {
        if (localStorage.getItem('posts') !== '') {
            a = JSON.parse(localStorage.getItem('posts'))
            console.log(a);
            
            $('#imP').attr('src', a[0].cadImg);
            $('#tiP').html(a[0].cadTitle);
            $('#suP').html(a[0].cadSub);
        } else {
            console.log('Empty')
        }

        $('.btn1').click(()=>{ 
            $('.span1').removeClass('d-none')
            $('.btn1').remove()
        })
    })
    
   
     
   

})