const submit = document;
const storage = localStorage;

submit.getElementById('submitin').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    const id = 'user' + Date.now();

    var data = {
        name: submit.getElementById('name').value,
        surname: submit.getElementById('surname').value,
        password: submit.getElementById('password').value,
        email: submit.getElementById('email').value,
    };

    if (!check(data.email)) {
        return alert("This account already exists");
    }

    var jsonData = JSON.stringify(data);
    storage.setItem(id, jsonData);

    // Создаем URL с параметрами запроса на основе данных формы
    var url = 'cab.html?' + new URLSearchParams(data);

    // Перенаправляем пользователя на страницу cab.html с параметрами запроса
    window.location.href = url;
});

function check(mail) {
    for (let key in storage) {
        if (!storage.hasOwnProperty(key)) continue; // To avoid iterating over non-own properties
        var item = JSON.parse(storage.getItem(key));
        if (mail === item.email) {
            return false;
        }
    }
    return true;
}


submit.getElementById('signin').addEventListener('click', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию

  var email = submit.getElementById('email').value;
  var password = submit.getElementById('password').value;

 if(!check()){
  
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      let obj = JSON.parse(value)
      if(obj.password===password){
        var url = 'cab.html?' + new URLSearchParams(data);
        window.location.href = url;
      }
      if(obj.email==='moldakhmetov00@bk.ru' && obj.password===password){
        window.location.assign = 'admin.html'
      } 
  }
 }
});

function validateEmail(email) {
  
}

function checkCredentials(email, password) {
  // Проверка соответствия введенного email и пароля с существующими данными
  // Вернуть true, если вход успешен, в противном случае вернуть false
}

