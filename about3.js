
    window.addEventListener('DOMContentLoaded', (event) => {
        fetch('/session')
            .then(response => response.json())
            .then(data => {
                const loginSignList = document.getElementById('login-sign-list');
                if (data.user && data.user.name) {
                    loginSignList.innerHTML = `
                        <button class="consult">Consult Now</button>
                        
                        <li class="login-sign"> <span style="font-size: 18px; font-weight: bold;">Welcome, ${data.user.name}</span></li>
                        <li class="login-sign"><a href="/logout" id="logout"><span style="font-size: 20px; font-weight: bold;">Log out</span></a></li>
                    `;
                } else {
                    loginSignList.innerHTML = `
                        <button class="consult">Consult Now</button>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
                        <li class="login-sign"><i class="fa fa-fw fa-sign-in-alt"></i> <a href="/login" id="login">Log in</a></li>
                        <li class="login-sign"><i class="fa fa-user-plus" aria-hidden="true"></i> <a href="/signup" id="sign-in">Sign up</a></li>
                    `;
                }   
            });
    });

