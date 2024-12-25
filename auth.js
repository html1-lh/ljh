// 用户数据（实际应用中应该使用后端数据库）
const users = {
    admin: {
        username: 'admin',
        password: 'admin123',
        role: 'admin'
    },
    user: {
        username: 'user',
        password: 'user123',
        role: 'user'
    }
};

// 登录表单处理
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (authenticateUser(username, password)) {
                alert('登录成功！');
                window.location.href = 'index.html';
            } else {
                alert('用户名或密码错误！');
            }
        });
    }

    // 检查用户权限并显示/隐藏相应功能
    checkUserPermissions();
});

function authenticateUser(username, password) {
    const user = users[username];
    if (user && user.password === password) {
        // 保存用户信息到 sessionStorage
        sessionStorage.setItem('currentUser', JSON.stringify({
            username: user.username,
            role: user.role
        }));
        return true;
    }
    return false;
}

function checkUserPermissions() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (currentUser) {
        // 显示用户名
        const userDisplay = document.createElement('span');
        userDisplay.className = 'user-display';
        userDisplay.textContent = `欢迎, ${currentUser.username}`;
        document.querySelector('.main-nav').appendChild(userDisplay);

        // 管理员特殊权限
        if (currentUser.role === 'admin') {
            showAdminControls();
        }
    }
}

function showAdminControls() {
    // 在试题库页面显示管理员控件
    if (window.location.pathname.includes('questions.html')) {
        const adminControls = document.createElement('div');
        adminControls.className = 'admin-controls visible';
        adminControls.innerHTML = `
            <h3>管理员控制面板</h3>
            <button onclick="addQuestion()">添加新试题</button>
            <button onclick="manageUsers()">用户管理</button>
        `;
        document.querySelector('.questions-container').insertBefore(
            adminControls,
            document.querySelector('.question-filters')
        );
    }
}

// 管理员功能
function addQuestion() {
    // 添加试题的实现
    alert('打开添加试题表单');
}

function manageUsers() {
    // 用户管理的实现
    alert('打开用户管理面板');
}

function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}