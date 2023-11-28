var jsbody = document.querySelector('.jsbody');
var changejsbtn = document.getElementsByClassName('changejsbtn')[0];
var textbox = document.getElementById('textbox');
var textboxcontent = '';


const changejsback = () => {
    let bkcolor = jsbody.style.backgroundColor;

    if (bkcolor === 'white' || bkcolor === '') { 
        jsbody.style.backgroundColor = 'black';
        jsbody.style.color = 'white';
        changejsbtn.textContent= 'لایت مود '
    } else {
        jsbody.style.backgroundColor = 'white';
        jsbody.style.color = 'black';
        changejsbtn.textContent= 'دارک مود '
    }
};

const submitbtn = () =>{
    console.log('document.body.innerHTML');
    console.log(document.body.innerHTML);
    console.log('document.body.innerText');
    console.log(document.body.innerText);
    console.log('document.body.textContent');
    console.log(document.body.textContent);
    console.log('document.body.firstChild');
    console.log(document.body.firstChild);
    console.log('document.body.lastChild');
    console.log(document.body.lastChild);
    console.log('document.all[4].textContent');
    console.log(document.all[4].textContent);
    console.log('document.all[4].innerText');
    console.log(document.all[4].innerText);
    console.log('document.all[10].textContent');
    console.log(document.all[10].textContent);
    console.log('document.all[10].innerText');
    console.log(document.all[10].innerText);
    console.log('document.all[10].innerHTML');
    console.log(document.all[10].innerHTML);
    console.log(document.all);
    console.log(document.all[10]);
    document.all[10].textContent = 'Hello';
    console.log(document.forms[0]);
    textboxcontent = textbox.textContent;
    console.log(textboxcontent);
}



