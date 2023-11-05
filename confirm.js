function validateName(name) {
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(name)) {
        alert('Invalid name format');
    }
}

function validateUIN(uin) {
    const numberRegex = /^\d+$/;
    if (!numberRegex.test(uin)) {
        alert('Please enter only numbers');
    }
    if (uin.length >16) {
        alert('UIN must be max 16 characters long');
    }
}

function checkcvv(cvv) {
    const numberRegex = /^\d+$/;
    if (!numberRegex.test(cvv)) {
        alert('Please enter only numbers');
    }
    if (cvv.length > 3) {
        alert('CVV must be 3 digits');
    }
}
function checkpswd(pswd) {
    if(pswd.length<5   ){
        alert('Get your password longer')
        document.getElementById('password').value = ''
    }
}