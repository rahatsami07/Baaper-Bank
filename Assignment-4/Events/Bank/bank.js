document.getElementById('submit-btn').addEventListener('click', function() {
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;
    const passFeild = document.getElementById('user-password');
    const password = passFeild.value;
    if (email === 'rahatsami4742@gmail.com' && password === 'rahatsamiabdus47427264') {
        console.log('Valid User');
        window.location.href = 'bank2.html'
    } else {
        console.log('Invalid User');
        alert('Incorrect username or password provided.')
    }

})