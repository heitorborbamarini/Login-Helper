function showPassword(){
const eye = document.getElementById('eye');
const eyeSlash = document.getElementById('eye-slash');
const fieldsetPassword = document.getElementById('fieldset-password');

if(eye.style.display === 'none'){
    eye.style.display = 'block';
    eyeSlash.style.display = 'none';
    fieldsetPassword.type = 'text';

} else{
    eye.style.display = 'none';
    eyeSlash.style.display = 'block';
    fieldsetPassword.type = 'password';
}
};

document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    alert('Login concluido');

})