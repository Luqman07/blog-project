(function ($) {

    let addPost = []
    let addObj;
    let j = 0
    let a = 0


    let add = () => {

        let title = $('#tit').val()
        let about = $('#abt').val()
        addObj = {
            id: j,
            postTitle: title,
            postAbout: about
        }
        addPost.push(addObj)
        console.log(title, about);
        j++
    }
    let dry = (e) => {
        f = e.target.id
        g = addPost.splice(f, 1)
        addPost = addPost
        unsaved.innerHTML = ''
        for (let i = 0; i < addPost.length; i++) {
            unsaved.innerHTML += ` 
                     <div class="card border mb-3 do">
                    <div class="row roo">
                        <p class="col-sm-10 pl-4 pt-2 font-weight-bold ">Post</p>
                        <i id="${i}" class="col-sm-2 fo font-weight-bold text-right pr-4 erase">&times</i>
                    </div>
                    <hr style="margin-top: -9px; background-color: #6C757D;">
                    <div class="form-group pl-3 pr-3" action="">
                        <p id="tit1" class="yo mb-3 h4" type="text" placeholder="Title">${addPost[i].postTitle}</p>
                        <p id="abt1" class=" mb-3" type="text" placeholder="About">${addPost[i].postAbout}</p>
                        <p id="fil1" class=" mb-3" placeholder=""></p>
                        <input type="button" id="${i}" class="btn1 btn btn-primary" value="Edit">    
                        <input type="button" id="${i}" class="btn2 btn btn-primary" value="Save">    
                    </div>
                </div>`

        }
    }

    let mainDel = (cl) => {
        let btn = document.querySelectorAll(`.${cl}`)
        btn.forEach(ele => {
        })
    }
    let opt = (e) => {
        editT = e.target.parentElement.children
        editA = e.target.parentElement.children
        a = editT[0].innerHTML
        b = editA[1].innerHTML
    }


    let close = (e) => {
        if (e.target.classList.contains('btn') && $('#tit').val() !== '' && $('#abt').val() !== '') {
            add()
            unsaved.innerHTML = ""
            for (let i = 0; i < addPost.length; i++) {
                unsaved.innerHTML += `  
                <div id="${i}" class="card border mb-3 do">
                    <div class="row roo">
                        <p class="col-sm-10 pl-4 pt-2 font-weight-bold ">Post</p>
                        <i id="${i}" class="col-sm-2 fo font-weight-bold text-right pr-4 erase">&times</i>
                    </div>
                    <hr style="margin-top: -9px; background-color: #6C757D;">
                    <div class="form-group pl-3 pr-3" action="">
                        <p id="tit1" class="yo mb-3 h4" type="text" placeholder="Title">${addPost[i].postTitle}</p>
                        <p id="abt1" class=" mb-3" type="text" placeholder="About">${addPost[i].postAbout}</p>
                        <p id="fil1" class=" mb-3" placeholder=""></p>
                        <input type="button" id="${i}" class="btn1 btn btn-primary" value="Edit">    
                          
                    </div>
                   
                </div>
               
                </div>`

            };
            $('#tit').val('')
            $('#abt').val('')
            $('#fil').val('')



        }
        else if (e.target.classList.contains('erase')) {
            mainDel('erase')
            dry(e)
            console.log(addPost);

        }
        else if (e.target.classList.contains('btn1')) {
            console.log('Hi')
            mainDel('btn1')
            opt(e)
            $('#tit').val(a)
            $('#abt').val(b)
            dry(e)
            e.target.parentElement.parentElement.remove()


        }
        else if (e.target.classList.contains('save')) {
            editT = e.target.parentElement.parentElement.children
            editA = e.target.parentElement.parentElement.children
            a = editT[0].innerHTML
            b = editA[1].innerHTML
            par = e.target.parentElement.previousElementSibling.children
            console.log(par);
            for (let i = 0; i< par.length; i++) {
                par[i].classList.add('bg-light')
            }
            console.log(addPost) 
            localStorage.setItem('addPost', JSON.stringify(addPost))

        }

    }






    $('body').on('click', (e) => { close(e) })

})(jQuery)