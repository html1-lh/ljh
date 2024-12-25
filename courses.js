// 课程数据
const coursesData = [
    {
        id: 1,
        title: '网络安全概述',
        contents: [
            { 
                id: 1, 
                title: '1.1 网络安全简介、网络安全涉及的内容',
                pdfUrl: 'ppt/1/1.1网络安全简介、网络安全涉及的内容.pdf',
                videoUrl: 'videos/视频2/1/1.1.mp4'
            },
            { 
                id: 2, 
                title: '1.2 网络安全防护体系',
                pdfUrl: 'ppt/1/1.2网络安全防护体系.pdf',
                videoUrl: 'videos/视频2/1/1.2.mp4'
            }
        ]
    },
    {
        id: 2,
        title: '黑客原理与防范措施',
        contents: [
            { 
                id: 1, 
                title: '2.1 黑客概述及目标系统的探测(nmap)',
                pdfUrl: 'ppt/2/2.1黑客的原理与防范措施.pdf',
                videoUrl: 'videos/视频2/2/2-1.mp4'
            },
            { 
                id: 2, 
                title: '2.2 目标扫描(XSCAN)',
                pdfUrl: 'ppt/2/2.2目标扫描(xscan).pdf',
                videoUrl: 'videos/视频2/2/2-2.mp4'
            },
            { 
                id: 3, 
                title: '2.3 口令破解过程(smbcrack2)',
                pdfUrl: 'ppt/2/2.3口令破解过程.pdf',
                videoUrl: 'videos/视频2/2/2-3.mp4'
            },
            { 
                id: 4, 
                title: '2.4 网络监听工具的使用(sniffer)',
                pdfUrl: 'ppt/2/2.4网络监听工具的使用.pdf',
                videoUrl: 'videos/视频2/2/2-4.mp4'
            },
            { 
                id: 5, 
                title: '2.5 木马的攻防（冰河木马)',
                pdfUrl: 'ppt/2/2.5木马的攻防.pdf',
                videoUrl: 'videos/视频2/2/2-5.mp4'
            },
            { 
                id: 6, 
                title: '2.6 拒绝服务攻击(DDOS)',
                pdfUrl: 'ppt/2/2.6DDOS.pdf',
                videoUrl: 'videos/视频2/2/2.6.mp4'
            },
            { 
                id: 7, 
                title: '2.7 ARP攻击的防范',
                pdfUrl: 'ppt/2/2.7ARP攻击防范.pdf',
                videoUrl: 'videos/视频2/2/2.7.mp4'
            },
            { id: 8, title: '2.8 缓冲区溢出',
                pdfUrl: 'ppt/2/2.8缓冲区溢出.pdf',
                videoUrl: 'videos/视频2/2/2.8.mp4'
            }
        ]
    },
    {
        id: 3,
        title: '网络病毒防治',
        contents: [
            { id: 1, title: '3.1 病毒的基本概念、原理和分类',
                pdfUrl: 'ppt/3/3.1病毒的基本概念.pdf',
                videoUrl: 'videos/视频2/3/3.1.mp4'
            },
            { id: 2, title: '3.2 计算机感染典型病毒现象',
                pdfUrl: 'ppt/3/3.2计算机感染典型病毒的现象.pdf',
                videoUrl: 'videos/视频2/3/3.2.mp4'
            },
            { id: 3, title: '3.3 常用的杀毒软件介绍',
                pdfUrl: 'ppt/3/3.3常用的杀毒软件.pdf',
                videoUrl: 'videos/视频2/3/3.3.mp4'
            }
        ]
    },
    {
        id: 4,
        title: '密码技术',
        contents: [
            { id: 1, title: '4.1 密码学的基本概念及数据加密技术在网络安全中的应用',
                pdfUrl: 'ppt/4/4.1密码学.pdf',
                videoUrl: 'videos/视频2/4/4.1.mp4'
            },
            { id: 2, title: '4.2 数据加密、传送及解密',
                pdfUrl: 'ppt/4/4.2数据加密、传送及解密.pdf',
                videoUrl: 'videos/视频2/4/4.2.mp4'
            }
        ]
    },
    {
        id: 5,
        title: '防火墙技术',
        contents: [
            { id: 1, title: '5.1 防火墙的基本概念及掌握防火墙的工作基本原理',
                pdfUrl: 'ppt/5/5.1防火墙.pdf',
                videoUrl: 'videos/视频2/5/5.1.mp4'
            },
            { id: 2, title: '5.2 第三方防火墙的应用',
                pdfUrl: 'ppt/5/5.2第三方防火墙的应用.pdf',
                videoUrl: 'videos/视频2/5/5.2.mp4'
            },
            { id: 3, title: '5.3 VPN',
                pdfUrl: 'ppt/5/5.3VPN.pdf',
                videoUrl: 'videos/视频2/5/5.3.mp4'
            }
        ]
    },
    {
        id: 6,
        title: 'Windows的安全与保护机制',
        contents: [
            { id: 1, title: '6.1 Windows系统的安全机制,掌握Windows系统的常用安全设置',
                pdfUrl: 'ppt/6/6.1Windows系统的安全机制,掌握Windows系统的常用安全设置.pdf',
                videoUrl: 'videos/视频2/6/6.1.mp4'
            },
            { id: 2, title: '6.2 Windows Server的帐户管理',
                pdfUrl: 'ppt/6/6.2Windows Server的帐户管理.pdf',
                videoUrl: 'videos/视频2/6/6.2.mp4'
            },
            { id: 3, title: '6.3 Windows Server注册表与组策略',
                pdfUrl: 'ppt/6/6.2Windows Server的帐户管理.pdf',
                videoUrl: 'videos/视频2/6/6.3.mp4'
            },
            { id: 4, title: '6.4 Windows Server常用的系统进程和服务',
                pdfUrl: 'ppt/6/6.4Windows Server常用的系统进程和服务.pdf',
                videoUrl: 'videos/视频2/6/6.4.mp4'
            },
            { id: 5, title: '6.5 Windows server的日志管理',
                pdfUrl: 'ppt/6/6.5Windows Server的日志管理.pdf',
                videoUrl: 'videos/视频2/6/6.5.mp4'
            }
        ]
    },
    {
        id: 7,
        title: 'Web应用安全',
        contents: [
            { id: 1, title: '7.1 Web安全概述',
                pdfUrl: 'ppt/7/7.1Web安全概述.pdf',
                videoUrl: 'videos/视频2/7/7.1.mp4'
            },
            { id: 2, title: '7.2 Web应用程序安全',
                pdfUrl: 'ppt/7/7.2We应用程序的安全b.pdf',
                videoUrl: 'videos/视频2/7/7.2.mp4'
            },
            { id: 3, title: '7.3 Web服务器软件的安全',
                pdfUrl: 'ppt/7/7.3Web服务器软件的安全.pdf',
                videoUrl: 'videos/视频2/7/7.3.mp4'
            },
            { id: 4, title: '7.4 Web传输安全及SSL安全',
                pdfUrl: 'ppt/7/7.4Web传输安全及SSL安全.pdf',
                videoUrl: 'videos/视频2/7/7.4.mp4'
            }
        ]
    }
];

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    renderCourses(coursesData);
});

// 渲染课程列表
function renderCourses(courses) {
    const coursesList = document.querySelector('.courses-list');
    if (!coursesList) return;
    
    coursesList.innerHTML = '';

    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.innerHTML = `
            <div class="course-header">
                <h3 class="course-title">${course.title}</h3>
            </div>
            <ul class="content-list">
                ${course.contents.map(item => `
                    <li class="content-item">
                        <span class="content-title" onclick="viewCourse(${course.id}, ${item.id})">${item.title}</span>
                        <button class="preview-button" onclick="previewVideo(${course.id}, ${item.id})">
                            预览视频
                        </button>
                    </li>
                `).join('')}
            </ul>
        `;
        coursesList.appendChild(courseItem);
    });
}

// 下载资源
function downloadResource(courseId) {
    const resource = coursesData.find(c => c.id === courseId);
    if (!resource) return;
    
    // 这里可以添加下载统计或其他逻辑
    alert('开始下载资源...');
    window.location.href = resource.downloadUrl;
}

// 查看课程详情
function viewCourse(courseId, contentId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;
    
    const content = course.contents.find(c => c.id === contentId);
    if (!content) return;
    
    // 检查是否有 PDF 链接
    if (!content.pdfUrl) {
        alert('PDF文件暂未上传');
        return;
    }
    
    const previewArea = document.querySelector('.preview-area');
    if (!previewArea) return;

    previewArea.innerHTML = `
        <div class="course-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${content.title}</h2>
                    <button onclick="closeModal(this)">×</button>
                </div>
                <div class="modal-body">
                    <embed src="${content.pdfUrl}" type="application/pdf" width="100%" height="100%">
                </div>
            </div>
        </div>
    `;

    // 添加 embed 加载错误处理
    const embed = previewArea.querySelector('embed');
    embed.onerror = function() {
        alert('PDF文件加载失败，请检查文件路径是否正确');
        previewArea.innerHTML = '<p>PDF文件加载失败</p>';
    };
}

// 关闭预览窗口
function closeModal(button) {
    const modal = button.closest('.course-modal');
    if (modal) {
        modal.remove();
    }
}

// 添加模块下载功能
function downloadModule(courseId, moduleId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;
    
    const module = course.modules.find(m => m.id === moduleId);
    if (!module) return;
    
    alert('开始下载章节资源...');
    window.location.href = module.downloadUrl;
}

function previewVideo(chapter, sectionId) {
    const previewArea = document.querySelector('.preview-area');
    if (!previewArea) return;

    // 清空预览区域
    previewArea.innerHTML = '';

    // 获取课程和章节信息
    const course = coursesData.find(c => c.id === chapter);
    const section = course?.contents.find(c => c.id === sectionId);
    if (!course || !section) return;

    // 检查是否有视频链接
    if (!section.videoUrl) {
        alert('视频暂未上传');
        return;
    }

    // 添加标题
    const title = document.createElement('h2');
    title.textContent = section.title;
    title.style.marginBottom = '1rem';
    previewArea.appendChild(title);

    // 创建视频播放器
    const videoPlayer = document.createElement('video');
    videoPlayer.style.width = '100%';
    videoPlayer.style.height = 'auto';
    videoPlayer.style.maxHeight = '70vh';
    videoPlayer.controls = true;
    videoPlayer.style.marginBottom = '1rem';
    
    // 设置视频源
    const videoSource = document.createElement('source');
    videoSource.src = section.videoUrl;
    videoSource.type = 'video/mp4';
    
    videoPlayer.appendChild(videoSource);
    previewArea.appendChild(videoPlayer);
    
    // 添加关闭按钮
    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.textContent = '关闭预览';
    closeButton.onclick = () => previewArea.innerHTML = '';
    previewArea.appendChild(closeButton);

    // 添加错误处理
    videoPlayer.onerror = function() {
        alert('视频加载失败，请检查文件是否存在');
        previewArea.innerHTML = '<p>视频加载失败</p>';
    };
}