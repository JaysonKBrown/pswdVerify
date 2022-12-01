/*
    CREATE password variable to take input from user
    ACCESS submit btn
    ADD EVENT LISTENER to submit btn
    CREATE a regex that contains all requirements for password input
    CREATE a function that checks to see if password input passes test
    DISPLAY message inside display element
*/

let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    // console.log('click');
    test();
})

const test =()=> {
    let password = document.getElementById('pswd').value;
    let password2 = document.getElementById('pswd2').value;
    let display = document.getElementById('display');

    let regExpWeak = /[a-zA-Z]/;
    let regExpMedium = /[\d+]/;
    let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

    let min_weak_password = 5;
    let min_medium_password = 7;
    let min_strong_password = 8;

    let input_weak = password.match(regExpWeak);
    let input_medium = password.match(regExpMedium);
    let input_strong = password.match(regExpStrong);

    if(password === password2) {
        if(password.length <= min_weak_password || (input_weak || input_medium || input_strong)) {
            display.innerText = 'Your password is too weak.';
            display.style.color = 'red';
        }
        if(password.length >= min_medium_password && ((input_weak && input_medium) || (input_medium && input_strong) || (input_weak && input_strong))) {
            display.innerText = 'Your password is medium strength.';
            display.style.color = 'orange';
        }
        if(password.length >= min_strong_password && input_weak && input_medium && input_strong){
            display.innerText = 'Your password is strong!';
            display.style.color = 'green';
        }
    } else {
        display.innerText = 'Enter a valid password.'
    }
}