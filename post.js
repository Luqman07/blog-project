$(document).ready(() => {
    $('#toggle-demo').bootstrapToggle()
    addEventListener('load', () => {
        if (localStorage.getItem('posts') !== '') {
            let j = 0
            a = JSON.parse(localStorage.getItem('posts'))
            console.log(a);

            console.log(a[j].cadImg, a[j].cadTitle, a[j].cadSub);
            $('#imP').attr('src', a[j].cadImg);
            $('#tiP').html(a[j].cadTitle);
            $('#suP').html(a[j].cadSub);


        } else {
            console.log('Empty')

        }

        $('.btn1').click(()=>{ 
            $('.span1').removeClass('d-none')
            $('.btn1').remove()
        })
    })
    
   
     
   

})