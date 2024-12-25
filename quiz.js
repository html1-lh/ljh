// 示例题目数据
const quizData = {
    1: [ // 第一章 网络安全概述
        {
            question: "下列哪项不属于网络安全的主要内容？",
            options: [
                "计算机系统安全",
                "网络通信安全",
                "信息安全",
                "办公室安全"
            ],
            correct: 3
        },
        {
            question: "网络安全防护体系中，以下哪个不是技术安全的组成部分？",
            options: [
                "物理安全",
                "网络安全",
                "主机安全",
                "管理安全"
            ],
            correct: 3
        },
        {
            question: "网络安全的基本目标不包括以下哪项？",
            options: [
                "保密性",
                "完整性",
                "可用性",
                "经济性"
            ],
            correct: 3
        },
        {
            question: "以下哪项不是确保网络安全的基本措施？",
            options: [
                "身份认证",
                "访问控制",
                "数据加密",
                "系统升级"
            ],
            correct: 3
        },
        {
            question: "网络安全防护体系中，以下哪个属于管理安全的范畴？",
            options: [
                "防火墙配置",
                "安全制度建设",
                "系统补丁安装",
                "网络监控"
            ],
            correct: 1
        },
        {
            question: "网络安全的核心是什么？",
            options: [
                "数据安全",
                "系统安全",
                "信息安全",
                "设备安全"
            ],
            correct: 2
        },
        {
            question: "以下哪个不是网络安全的三大特性？",
            options: [
                "机密性",
                "完整性",
                "可用性",
                "兼容性"
            ],
            correct: 3
        },
        {
            question: "网络安全防护的最终目的是什么？",
            options: [
                "保护数据安全",
                "防止黑客入侵",
                "保护信息系统安全运行",
                "防止病毒感染"
            ],
            correct: 2
        },
        {
            question: "以下哪项不是网络安全技术防护措施？",
            options: [
                "防火墙",
                "入侵检测",
                "安全培训",
                "加密通信"
            ],
            correct: 2
        },
        {
            question: "关于网络安全，以下说法正确的是？",
            options: [
                "只需要安装防火墙就能确保安全",
                "安全防护是一个动态的过程",
                "安全防护只需要技术手段",
                "安装杀毒软件就万无一失"
            ],
            correct: 1
        },
        {
            question: "网络安全防护中最重要的环节是什么？",
            options: [
                "安装防火墙",
                "人的安全意识",
                "系统更新",
                "数据备份"
            ],
            correct: 1
        },
        {
            question: "以下哪个不是网络安全的主要威胁？",
            options: [
                "黑客攻击",
                "病毒感染",
                "系统更新",
                "数据泄露"
            ],
            correct: 2
        },
        {
            question: "网络安全防护体系中，以下哪个属于物理安全？",
            options: [
                "防火墙配置",
                "门禁系统",
                "密码管理",
                "漏洞修复"
            ],
            correct: 1
        },
        {
            question: "关于网络安全管理，以下说法错误的是？",
            options: [
                "需要制定完善的管理制度",
                "要定期进行安全培训",
                "只需要技术人员参与",
                "要建立应急响应机制"
            ],
            correct: 2
        },
        {
            question: "网络安全防护的基本原则不包括？",
            options: [
                "全面性原则",
                "经济性原则",
                "动态性原则",
                "单一性原则"
            ],
            correct: 3
        }
    ],
    2: [ // 第二章 黑客原理与防范措施
        {
            question: "以下哪个不是黑客常用的网络扫描工具？",
            options: [
                "Nmap",
                "Wireshark",
                "Word",
                "Netcat"
            ],
            correct: 2
        },
        {
            question: "DDOS攻击的主要目的是什么？",
            options: [
                "窃取数据",
                "破坏系统可用性",
                "获取系统权限",
                "植入木马"
            ],
            correct: 1
        },
        {
            question: "以下哪种不是常见的密码破解方式？",
            options: [
                "暴力破解",
                "字典攻击",
                "系统升级",
                "社会工程学"
            ],
            correct: 2
        },
        {
            question: "ARP攻击的主要目的是什么？",
            options: [
                "获取用户密码",
                "篡改MAC地址映射",
                "破坏系统文件",
                "删除用户数据"
            ],
            correct: 1
        },
        {
            question: "以下哪个不是预防木马攻击的有效方法？",
            options: [
                "安装防火墙",
                "不下载来源不明的软件",
                "频繁更换IP地址",
                "及时更新系统补丁"
            ],
            correct: 2
        },
        {
            question: "缓冲区溢出攻击主要利用了什么漏洞？",
            options: [
                "网络协议漏洞",
                "程序内存分配漏洞",
                "操作系统漏洞",
                "用户认证漏洞"
            ],
            correct: 1
        },
        {
            question: "关于网络嗅探工具的说法，错误的是？",
            options: [
                "可以捕获网络数据包",
                "可以分析网络流量",
                "可以完全防止数据泄露",
                "可以检测网络异常"
            ],
            correct: 2
        },
        {
            question: "以下哪个不是黑客攻击的常见目标？",
            options: [
                "数据库服务器",
                "Web服务器",
                "本地打印机",
                "邮件服务器"
            ],
            correct: 2
        }
    ],
    3: [ // 第三章 网络病毒防治
        {
            question: "计算机病毒的主要特征不包括以下哪项？",
            options: [
                "传染性",
                "潜伏性",
                "可控性",
                "破坏性"
            ],
            correct: 2
        },
        {
            question: "以下哪种不是计算机病毒的传播方式？",
            options: [
                "通过网络传播",
                "通过移动存储设备传播",
                "通过系统升级传播",
                "通过邮件附件传播"
            ],
            correct: 2
        },
        {
            question: "下列哪个不是病毒感染的典型现象？",
            options: [
                "系统运行速度变慢",
                "文件大小异常改变",
                "系统自动更新",
                "异常弹窗频繁出现"
            ],
            correct: 2
        },
        {
            question: "以下哪种不是常见的杀毒软件？",
            options: [
                "360杀毒",
                "金山毒霸",
                "火绒安全",
                "记事本"
            ],
            correct: 3
        },
        {
            question: "预防计算机病毒感染的最有效方法是？",
            options: [
                "安装多个杀毒软件",
                "从不联网使用",
                "养成良好的使用习惯",
                "经常重装系统"
            ],
            correct: 2
        },
        {
            question: "关于杀毒软件的说法，错误的是？",
            options: [
                "需要及时更新病毒库",
                "可以安装多个杀毒软件同时运行",
                "要定期进行全盘扫描",
                "要开启实时防护功能"
            ],
            correct: 1
        },
        {
            question: "发现计算机感染病毒后，首先应该？",
            options: [
                "立即关机",
                "断开网络连接",
                "删除所有文件",
                "继续正常使用"
            ],
            correct: 1
        },
        {
            question: "以下哪项不是病毒防治的基本原则？",
            options: [
                "预防为主",
                "及时发现",
                "彻底清除",
                "重装系统"
            ],
            correct: 3
        }
    ],
    5: [ // 第五章 防火墙技术
        {
            question: "防火墙的主要功能不包括以下哪项？",
            options: [
                "访问控制",
                "数据加密",
                "网络地址转换",
                "日志记录"
            ],
            correct: 1
        },
        {
            question: "以下哪个不是防火墙的基本类型？",
            options: [
                "包过滤防火墙",
                "应用网关防火墙",
                "状态检测防火墙",
                "入侵检测防火墙"
            ],
            correct: 3
        },
        {
            question: "关于包过滤防火墙，以下说法错误的是？",
            options: [
                "工作在网络层",
                "根据数据包头信息过滤",
                "可以检查应用层内容",
                "处理速度快"
            ],
            correct: 2
        },
        {
            question: "防火墙的部署位置通常在？",
            options: [
                "内网与外网的边界",
                "局域网内部",
                "每台主机上",
                "服务器内部"
            ],
            correct: 0
        },
        {
            question: "以下哪个不是配置防火墙规则时需要考虑的因素？",
            options: [
                "源IP地址",
                "目标端口",
                "CPU使用率",
                "协议类型"
            ],
            correct: 2
        },
        {
            question: "关于防火墙的说法，正确的是？",
            options: [
                "防火墙可以防止所有攻击",
                "防火墙只需要配置一次",
                "防火墙需要定期维护和更新",
                "防火墙会降低网络性能"
            ],
            correct: 2
        },
        {
            question: "以下哪种情况防火墙无法防护？",
            options: [
                "外部端口扫描",
                "内部用户误操作",
                "拒绝服务攻击",
                "未授权访问"
            ],
            correct: 1
        },
        {
            question: "防火墙日志记录的主要目的是？",
            options: [
                "提高系统性能",
                "记录网络活动",
                "加密数据传输",
                "优化网络配置"
            ],
            correct: 1
        }
    ],
    4: [ // 第四章 密码技术
        {
            question: "以下哪个不是密码学的基本目标？",
            options: [
                "机密性",
                "完整性",
                "可用性",
                "易用性"
            ],
            correct: 3
        },
        {
            question: "对称加密算法的特点是？",
            options: [
                "加密密钥和解密密钥相同",
                "加密速度慢",
                "密钥分发容易",
                "适合大规模网络"
            ],
            correct: 0
        },
        {
            question: "以下哪个是非对称加密算法？",
            options: [
                "DES",
                "AES",
                "RSA",
                "3DES"
            ],
            correct: 2
        },
        {
            question: "数字签名的主要作用是？",
            options: [
                "加密数据",
                "身份认证",
                "数据压缩",
                "病毒查杀"
            ],
            correct: 1
        },
        {
            question: "以下哪个不是常见的密码攻击方式？",
            options: [
                "暴力破解",
                "字典攻击",
                "系统升级",
                "中间人攻击"
            ],
            correct: 2
        },
        {
            question: "SSL协议主要用于？",
            options: [
                "文件加密",
                "网络传输加密",
                "密码存储",
                "数据压缩"
            ],
            correct: 1
        },
        {
            question: "关于散列函数，以下说法错误的是？",
            options: [
                "输出长度固定",
                "不可逆运算",
                "可用于加密数据",
                "可用于完整性校验"
            ],
            correct: 2
        },
        {
            question: "PKI体系中不包含以下哪个组件？",
            options: [
                "证书颁发机构",
                "注册机构",
                "防火墙",
                "目录服务器"
            ],
            correct: 2
        }
    ],
    6: [ // 第六章 Windows的安全与保护机制
        {
            question: "Windows系统中，以下哪个不是基本的安全机制？",
            options: [
                "用户认证",
                "访问控制",
                "审计功能",
                "远程控制"
            ],
            correct: 3
        },
        {
            question: "Windows系统中最高权限用户是？",
            options: [
                "Administrator",
                "System",
                "Guest",
                "Power User"
            ],
            correct: 1
        },
        {
            question: "关于Windows密码策略，以下说法错误的是？",
            options: [
                "密码要求最小长度",
                "密码复杂性要求",
                "密码永不过期更安全",
                "密码历史记录"
            ],
            correct: 2
        },
        {
            question: "Windows系统中，以下哪个不是有效的文件权限？",
            options: [
                "完全控制",
                "修改",
                "执行",
                "传输"
            ],
            correct: 3
        },
        {
            question: "Windows安全日志中不包含以下哪类事件？",
            options: [
                "登录事件",
                "系统事件",
                "网络连接",
                "硬件温度"
            ],
            correct: 3
        },
        {
            question: "以下哪个不是Windows系统加固的有效方法？",
            options: [
                "禁用不必要的服务",
                "安装所有更新",
                "删除所有日志",
                "配置防火墙"
            ],
            correct: 2
        },
        {
            question: "关于Windows用户组，以下说法正确的是？",
            options: [
                "用户只能属于一个组",
                "组权限优先于用户权限",
                "内置组不能修改",
                "用户可以属于多个组"
            ],
            correct: 3
        },
        {
            question: "Windows系统中，共享文件夹的最安全配置是？",
            options: [
                "允许所有人访问",
                "只允许管理员访问",
                "根据需要最小权限",
                "禁止所有访问"
            ],
            correct: 2
        }
    ],
    7: [ // 第七章 Web应用安全
        {
            question: "以下哪个不是常见的Web应用安全威胁？",
            options: [
                "SQL注入",
                "XSS攻击",
                "CSRF攻击",
                "系统重启"
            ],
            correct: 3
        },
        {
            question: "SQL注入攻击的主要目的是？",
            options: [
                "获取数据库内容",
                "使服务器崩溃",
                "篡改网页内容",
                "窃取用户密码"
            ],
            correct: 0
        },
        {
            question: "XSS攻击的主要危害不包括？",
            options: [
                "窃取用户Cookie",
                "篡改页面内容",
                "删除数据库",
                "执行恶意脚本"
            ],
            correct: 2
        },
        {
            question: "防止CSRF攻击的最有效方法是？",
            options: [
                "使用验证码",
                "添加Token验证",
                "加密数据传输",
                "限制访问频率"
            ],
            correct: 1
        },
        {
            question: "关于Web应用防火墙(WAF)，错误的是？",
            options: [
                "可以防止SQL注入",
                "可以防止XSS攻击",
                "可以防止所有攻击",
                "可以记录攻击日志"
            ],
            correct: 2
        },
        {
            question: "以下哪个不是安全的密码存储方式？",
            options: [
                "明文存储",
                "MD5+盐值",
                "bcrypt加密",
                "SHA256哈希"
            ],
            correct: 0
        },
        {
            question: "Web应用安全配置中，最重要的是？",
            options: [
                "使用HTTPS",
                "输入验证",
                "错误处理",
                "会话管理"
            ],
            correct: 1
        },
        {
            question: "关于Cookie安全，以下说法正确的是？",
            options: [
                "所有Cookie都需要加密",
                "HttpOnly可以防止XSS获取Cookie",
                "Cookie一定要存储用户密码",
                "Session ID可以存储在URL中"
            ],
            correct: 1
        }
    ]
};

let currentQuiz = null;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 绑定章节选择事件
    const subjectSelect = document.getElementById('subject');
    if (subjectSelect) {
        subjectSelect.addEventListener('change', function() {
            const chapter = this.value;
            if (chapter) {
                startQuiz(parseInt(chapter));
            }
        });
    }

    // 绑定下一题按钮事件
    const nextButton = document.getElementById('nextQuestion');
    if (nextButton) {
        nextButton.addEventListener('click', nextQuestion);
    }

    // 绑定提交按钮事件
    const submitButton = document.getElementById('submitQuiz');
    if (submitButton) {
        submitButton.addEventListener('click', submitQuiz);
    }
});

function startQuiz(chapter) {
    currentQuiz = {
        chapter: chapter,
        questions: quizData[chapter] || [],
        currentIndex: 0,
        answers: [],
        score: 0
    };
    
    if (currentQuiz.questions.length === 0) {
        alert('该章节的题目正在准备中...');
        return;
    }

    // 获取测试窗口元素
    const quizWindow = document.getElementById('quizWindow');
    const quizContent = quizWindow.querySelector('#quizContent');
    const quizResult = quizWindow.querySelector('#quizResult');
    const nextButton = quizWindow.querySelector('#nextQuestion');
    const submitButton = quizWindow.querySelector('#submitQuiz');

    // 初始化测试界面
    quizContent.style.display = 'block';
    quizResult.style.display = 'none';
    nextButton.style.display = currentQuiz.questions.length > 1 ? 'block' : 'none';
    submitButton.style.display = currentQuiz.questions.length === 1 ? 'block' : 'none';
    nextButton.disabled = true;
    submitButton.disabled = true;
    
    // 显示第一题
    showQuestion(0);
}

function showQuestion(index) {
    const question = currentQuiz.questions[index];
    if (!question) return;

    // 更新进度
    document.getElementById('currentQuestion').textContent = index + 1;
    document.getElementById('totalQuestions').textContent = currentQuiz.questions.length;

    // 显示题目和选项
    document.getElementById('questionText').textContent = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, i) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;
        button.onclick = () => selectOption(i);
        optionsContainer.appendChild(button);
    });
}

// 选择答案
function selectOption(optionIndex) {
    if (!currentQuiz) return;
    
    currentQuiz.answers[currentQuiz.currentIndex] = optionIndex;
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === optionIndex) {
            btn.classList.add('selected');
        }
    });
   
    // 启用下一题/提交按钮
    if (currentQuiz.currentIndex === currentQuiz.questions.length - 1) {
        document.getElementById('submitQuiz').disabled = false;
    } else {
        document.getElementById('nextQuestion').disabled = false;
    }
}

// 下一题功能
function nextQuestion() {
    if (!currentQuiz || currentQuiz.currentIndex >= currentQuiz.questions.length - 1) return;
    
    currentQuiz.currentIndex++;
    showQuestion(currentQuiz.currentIndex);
    
    // 重置按钮状态
    document.getElementById('nextQuestion').disabled = true;
    
    // 如果是最后一题，切换到提交按钮
    if (currentQuiz.currentIndex === currentQuiz.questions.length - 1) {
        document.getElementById('nextQuestion').style.display = 'none';
        document.getElementById('submitQuiz').style.display = 'block';
        document.getElementById('submitQuiz').disabled = true;
    }
}

// 提交答案功能
function submitQuiz() {
    if (!currentQuiz) return;
    
    // 计算得分
    currentQuiz.score = 0;
    currentQuiz.answers.forEach((answer, index) => {
        if (answer === currentQuiz.questions[index].correct) {
            currentQuiz.score++;
        }
    });
    
    // 显示结果
    const quizContent = document.getElementById('quizContent');
    const quizResult = document.getElementById('quizResult');
    const scoreElement = document.getElementById('score');
    
    quizContent.style.display = 'none';
    quizResult.style.display = 'block';
    
    // 根据得分显示不同的评价
    let evaluation = '';
    if (currentQuiz.score === currentQuiz.questions.length) {
        evaluation = '优秀！';
    } else if (currentQuiz.score >= currentQuiz.questions.length * 0.7) {
        evaluation = '良好！';
    } else if (currentQuiz.score >= currentQuiz.questions.length * 0.6) {
        evaluation = '及格！';
    } else {
        evaluation = '继续努力！';
    }
    
    scoreElement.innerHTML = `
        <div class="score-number">${currentQuiz.score} / ${currentQuiz.questions.length}</div>
        <div class="score-evaluation">${evaluation}</div>
    `;
    
    // 添加按钮容器
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'quiz-result-buttons';
    
    // 添加重新开始按钮
    const restartButton = document.createElement('button');
    restartButton.className = 'quiz-controls-button';
    restartButton.textContent = '重新开始';
    restartButton.onclick = () => {
        // 清除旧的按钮容器
        const oldContainer = quizResult.querySelector('.quiz-result-buttons');
        if (oldContainer) {
            oldContainer.remove();
        }
        startQuiz(currentQuiz.chapter);
    };
    
    // 添加返回选择按钮
    const backButton = document.createElement('button');
    backButton.className = 'quiz-controls-button secondary';
    backButton.textContent = '返回选择';
    backButton.onclick = () => {
        // 重置选择框
        document.getElementById('subject').value = '';
        // 隐藏结果
        document.getElementById('quizResult').style.display = 'none';
        // 重置测试窗口
        const quizWindow = document.getElementById('quizWindow');
        const quizContent = quizWindow.querySelector('#quizContent');
        
        // 重置题目显示
        document.getElementById('questionText').textContent = '';
        document.getElementById('options').innerHTML = '';
        document.getElementById('currentQuestion').textContent = '1';
        document.getElementById('totalQuestions').textContent = '10';
        
        // 重置按钮状态
        const nextButton = document.getElementById('nextQuestion');
        const submitButton = document.getElementById('submitQuiz');
        nextButton.style.display = 'block';
        submitButton.style.display = 'none';
        nextButton.disabled = true;
        
        // 显示题目区域
        quizContent.style.display = 'block';
        
        // 重置当前测试状态
        currentQuiz = null;
    };
    
    // 将按钮添加到容器
    buttonContainer.appendChild(restartButton);
    buttonContainer.appendChild(backButton);
    quizResult.appendChild(buttonContainer);
} 