

    const url = "https://reqres.in/api/users?";


    function getUsers_localStorege(){
        if(localStorage.getItem('page=1')){
            let page=JSON.parse(localStorage.getItem('page=1'));
       
             let users = document.getElementById('users')
                            const   card = page.slice(0,6).map(n=>'<div class="card"><figure><img src=" '+`${n.avatar}`+' " alt="profile"></figure><div class="content"><p>'+ n.first_name +'</p><p>'+ n.last_name +'</p><button class="open">Ver mas</button></div></div>').join('')
                                  users.innerHTML = card;
        }else{
            fetch(url).then((response) => response.json())
            .then(json =>{
              const  data= json.data;
              const   card = data.slice(0,6).map(n=>'<div class="card"><figure><img src=" '+`${n.avatar}`+' " alt="profile"></figure><div class="content"><p>'+ n.first_name +'</p><p>'+ n.last_name +'</p><button class="open">Ver mas</button></div></div>').join('')
                      users.innerHTML = card;
              localStorage.setItem('page=1',JSON.stringify(data));
            });
        }
  
    }

    getUsers_localStorege();


    let mostrar=document.querySelector('.mostrar');
    let button=document.getElementById('button');

    button.addEventListener('click', () => {
        if(button.value=='Siguiente'){
            Cargar_users();
            button.value='Anterior';
        }else if(button.value=='Anterior'){
            button.value='Siguiente'
             getUsers_localStorege();
        }
       
    });
    


function Cargar_users(){
 
    if(localStorage.getItem('page=2')){
        let page=JSON.parse(localStorage.getItem('page=2'));
   
         let users = document.getElementById('users')
                        const   card = page.slice(0,6).map(n=>'<div class="card"><figure><img src=" '+`${n.avatar}`+' " alt="profile"></figure><div class="content"><p>'+ n.first_name +'</p><p>'+ n.last_name +'</p><button class="open">Ver mas</button></div></div>').join('')
                              users.innerHTML = card;
    }else{
        fetch(url+'page=2').then((response) => response.json())
        .then(json =>{
          const  data= json.data;
          localStorage.setItem('page=2',JSON.stringify(data));
        });
    }
}

// modal 


let modal = document.getElementById('c_modal');
let contenido = document.getElementById('modal');
let open_modal = document.querySelectorAll('.open');
let close_modal = document.getElementById('close');

open_modal.forEach(listElement => {

    listElement.addEventListener('click', () => {
    modal.style.display = 'flex';
    contenido.classList.add('modal_close');
});

});

close_modal.addEventListener('click', function(){
    modal.style.display = 'none';
    contenido.classList.remove('modal_close');
});




