$(document).ready(() => {
     
 
    addEventListener('load', () => {
        if (localStorage.getItem('posts') == 'null'){
            console.log('Empty');
            
        }else {
            a = JSON.parse(localStorage.getItem('posts'))
            console.log(a);
            
            // $('#imP').attr('src', a[0].cadImg);
            $('#tiP').html(a[0].cadTitle);
            $('#suP').html(a[0].cadSub);
        } 

        $('.btn1').click(()=>{ 
            $('#span1').fadeIn('3000')
            $('.btn1').remove()
        })
    })
    
   
     
   

})