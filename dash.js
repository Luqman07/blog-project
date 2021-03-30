(function ($) {

    let addPost = []
    let news = []
    let sport = []
    let enter = []
    let politics = []
    let business = []
    let addObj;
    let j = 0
    let a = 0
    let c = ''

    let add = (a, b, c, d, e, f) => {

        let title = $('#tit').val()
        let about = $('#abt').val()
        let category = $('#cat').val()
        obj = {
            id: j,
            postTitle: title,
            postAbout: about,
            postCategory: category
        }
        // console.log(title, about, category);
        a.push(obj)
        if (category == 'News') {
            b.push(obj)
        } else if (category == 'Sport') {
            c.push(obj)
        } else if (category == 'Entertainment') {
            d.push(obj)
        } else if (category == 'Politics') {
            e.push(obj)
        } else if (category == 'Business') {
            f.push(obj)
        }


        // console.log(addPost,news,sport,enter,politics,business);

        j++
    }
    let dry = (e) => {
        f = e.target.id
        addPost.splice(f, 1)
        news.splice(f, 1)
        sport.splice(f, 1)
        enter.splice(f, 1)
        politics.splice(f, 1)
        business.splice(f, 1)
        addPost = addPost
        e.target.parentElement.parentElement.remove()
    }


    // let mainDel = (cl) => {
    //     let btn = document.querySelectorAll(`.${cl}`)
    //     btn.forEach(ele => {

    //     })
    // }
    let opt = (e) => {
        editT = e.target.parentElement.children
        editA = e.target.parentElement.children
        editC = e.target.parentElement.children
        a = editT[0].innerHTML
        b = editA[1].innerHTML
        c = editC[2].innerHTML


    }
    let loop = (x, y) => {
        x.innerHTML = ""
        for (let i = 0; i < y.length; i++) {
            x.innerHTML += `  
            <div id="${i}" class="card border mb-3 do ">
                <div class="row roo">
                    <p class="col-sm-10 pl-4 pt-2 font-weight-bold ">Post</p>
                    <i id="${i}" class="col-sm-2 fo font-weight-bold text-right pr-4 erase">&times</i>
                </div>
                <hr style="margin-top: -9px; background-color: #6C757D;">
                <div class="form-group pl-3 pr-3" action="">
                    <p id="tit1" class="yo mb-3 h4" type="text" placeholder="Title">${y[i].postTitle}</p>
                    <p id="abt1" class=" mb-3" type="text" placeholder="About">${y[i].postAbout}</p>
                    <p id="cat1" class=" mb-3" type="text" placeholder="About">${y[i].postCategory}</p>
                    <p id="fil1" class=" mb-3" placeholder=""></p>
                    <input type="button" id="${i}" class="btn1 btn btn-primary" value="Edit">    
                      
                </div>
               
            </div>
           
            </div>`

        };
    }


    let close = (e) => {
        if (e.target.classList.contains('btnAd') && $('#tit').val() !== '' && $('#abt').val() !== '' && $('#cat').val() !== '') {
            add(addPost, news, sport, enter, politics, business)
            loop(unsaved, addPost)
            $('#tit').val('')
            $('#abt').val('')
            $('#cat').val('')
            a = 0



        }
        else if (e.target.classList.contains('erase')) {
            // mainDel('erase')
            dry(e)
            loop(unsaved, addPost)
            console.log(addPost, news);

        }
        else if (e.target.classList.contains('btn1')) {
            if (a == 0) {
                // mainDel('btn1')
                opt(e)
                $('#tit').val(a)
                $('#abt').val(b)
                $('#cat').val(c)
                dry(e)
                a = 1
            } else {
                return
            }

        }
        else if (e.target.classList.contains('save')) {
           
            if (c == '') {
                console.log('hi');
                localStorage.setItem('Addpost', JSON.stringify(addPost))
                localStorage.setItem('News', JSON.stringify(news))
                localStorage.setItem('Sport', JSON.stringify(sport))
                localStorage.setItem('Entertain', JSON.stringify(enter))
                localStorage.setItem('Politics', JSON.stringify(politics))
                localStorage.setItem('Business', JSON.stringify(business))
                c = 1
            } else if(c == 1) {
                a = JSON.parse(localStorage.getItem('Addpost'))
                b = JSON.parse(localStorage.getItem('News'))
                c = JSON.parse(localStorage.getItem('Sport'))
                d = JSON.parse(localStorage.getItem('Entertain'))
                e = JSON.parse(localStorage.getItem('Politics'))
                f = JSON.parse(localStorage.getItem('Business'))
                console.log(a);

                add(a, b, c, d, e, f)
                localStorage.setItem('Addpost', JSON.stringify(a))
                localStorage.setItem('News', JSON.stringify(b))
                localStorage.setItem('Sport', JSON.stringify(c))
                localStorage.setItem('Entertain', JSON.stringify(d))
                localStorage.setItem('Politics', JSON.stringify(e))
                localStorage.setItem('Business', JSON.stringify(f))
                unsaved.innerHTML = ''
                loop(saved, a)
                console.log(a, 'hello');
              
            }



        }

    }

  if(localStorage.getItem('Addpost') == 'null'){
      alert('Localstorage is empty')
  }else{
    window.addEventListener('load', () => {
        a = JSON.parse(localStorage.getItem('Addpost'))
        console.log(a);
        $('.do').addClass('bg-dark text-white')
        $('hr').addClass('bg-white')
        loop(saved, a)
        c=1
    })
  }




    $('body').on('click', (e) => { close(e) })

})(jQuery)