const submit = document;
const storage = localStorage;

submit.getElementById('submitup').addEventListener('click', function(event) {
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

