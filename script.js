// 导航栏响应式菜单
document.addEventListener('DOMContentLoaded', function() {
    // 试题加载功能
    if (document.getElementById('questions-list')) {
        loadQuestions();
    }

    // 聊天功能
    if (document.getElementById('chat-container')) {
        initChat();
    }
});

function loadQuestions() {
    const questionsList = document.getElementById('questions-list');
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    
    // 模拟试题数据
    const questions = [
        {
            title: '数学题1',
            content: '1 + 1 = ?',
            options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
            answer: 'B' // 答案只对管理员可见
        },
        // 更多试题...
    ];

    questions.forEach(q => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        
        // 根据用户角色显示不同内容
        let questionHTML = `
            <h3>${q.title}</h3>
            <p>${q.content}</p>
            <div class="options">
                ${q.options.map(opt => `<div>${opt}</div>`).join('')}
            </div>
        `;
        
        // 管理员可以看到答案和编辑按钮
        if (currentUser && currentUser.role === 'admin') {
            questionHTML += `
                <div class="admin-options">
                    <p class="answer">正确答案: ${q.answer}</p>
                    <button onclick="editQuestion(this)">编辑</button>
                    <button onclick="deleteQuestion(this)">删除</button>
                </div>
            `;
        }
        
        questionDiv.innerHTML = questionHTML;
        questionsList.appendChild(questionDiv);
    });
}

function initChat() {
    const chatContainer = document.getElementById('chat-container');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message) {
            addMessage('user', message);
            messageInput.value = '';
        }
    });
}

function addMessage(type, content) {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.textContent = content;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
} 