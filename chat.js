// 示例消息数据
const messages = [];

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.getElementById('sendMessage');
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');

    // 发送消息
    sendButton.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message) {
            sendMessage(message);
            messageInput.value = '';
        }
    });

    // 按Enter发送消息
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendButton.click();
        }
    });

    // 切换讨论区
    const rooms = document.querySelectorAll('.chat-rooms li');
    rooms.forEach(room => {
        room.addEventListener('click', function() {
            rooms.forEach(r => r.classList.remove('active'));
            this.classList.add('active');
            // 这里可以添加切换房间的逻辑
        });
    });

    // 添加欢迎消息
    const welcomeMessage = {
        user: 'System',
        text: '欢迎来到讨论区！',
        time: new Date().toLocaleTimeString()
    };
    displayMessage(welcomeMessage);
});

function sendMessage(text) {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (!currentUser) return;

    const message = {
        user: currentUser.username,
        text: text,
        time: new Date().toLocaleTimeString()
    };

    messages.push(message);
    displayMessage(message);
}

function displayMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${message.user === JSON.parse(sessionStorage.getItem('currentUser')).username ? 'self' : ''}`;
    messageDiv.innerHTML = `
        <div class="message-header">
            <span class="message-user">${message.user}</span>
            <span class="message-time">${message.time}</span>
        </div>
        <div class="message-text">${message.text}</div>
        <div class="message-status">已发送</div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // 2秒后更新状态为"已读"
    setTimeout(() => {
        const status = messageDiv.querySelector('.message-status');
        if (status) {
            status.textContent = '已读';
            status.style.color = '#4CAF50';
        }
    }, 2000);
} 