// public/site-helper.js
(function() {
    'use strict';

    // 配置数据
    const config = {
        siteUrl: 'https://mainhome-i-game.com.cn',
        keyword: '爱游戏',
        badgeColors: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6']
    };

    // 页面提示卡片数据
    const tips = [
        { icon: '💡', title: '欢迎访问', content: '探索无限乐趣，尽在' + config.keyword },
        { icon: '🔍', title: '快速导航', content: '使用菜单查找您感兴趣的内容' },
        { icon: '📱', title: '移动适配', content: '本站在手机和电脑上均可流畅浏览' },
        { icon: '🔒', title: '安全提示', content: '请认准官方地址: ' + config.siteUrl }
    ];

    // 关键词徽章数据
    const badges = [
        { label: '热门', text: config.keyword + '推荐' },
        { label: '新游', text: config.keyword + '专区' },
        { label: '攻略', text: config.keyword + '秘籍' },
        { label: '社群', text: config.keyword + '论坛' }
    ];

    // 访问说明列表
    const instructions = [
        '本站仅提供信息展示，不涉及任何付费内容',
        '部分内容需要JavaScript支持，请确保浏览器已启用',
        '如遇到问题，可刷新页面或清除浏览器缓存',
        '所有内容均来自公开信息，仅供学习交流',
        '建议使用最新版Chrome、Firefox或Edge浏览器'
    ];

    // 创建样式
    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .sh-card-container {
                display: flex;
                flex-wrap: wrap;
                gap: 16px;
                margin: 20px 0;
                justify-content: center;
            }
            .sh-tip-card {
                background: #ffffff;
                border: 1px solid #e0e0e0;
                border-radius: 12px;
                padding: 16px 20px;
                width: 220px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                transition: transform 0.2s, box-shadow 0.2s;
                cursor: default;
            }
            .sh-tip-card:hover {
                transform: translateY(-4px);
                box-shadow: 0 6px 16px rgba(0,0,0,0.12);
            }
            .sh-tip-card .sh-icon {
                font-size: 28px;
                margin-bottom: 8px;
            }
            .sh-tip-card .sh-title {
                font-size: 16px;
                font-weight: 600;
                color: #2c3e50;
                margin-bottom: 6px;
            }
            .sh-tip-card .sh-content {
                font-size: 14px;
                color: #555;
                line-height: 1.5;
            }
            .sh-badge-wrapper {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin: 16px 0;
                justify-content: center;
            }
            .sh-badge-item {
                display: inline-block;
                padding: 6px 14px;
                border-radius: 20px;
                font-size: 13px;
                font-weight: 500;
                color: #fff;
                background: #3498db;
                transition: opacity 0.2s;
            }
            .sh-badge-item:hover {
                opacity: 0.85;
            }
            .sh-instructions {
                background: #f8f9fa;
                border-left: 4px solid #2ecc71;
                padding: 14px 20px;
                margin: 20px 0;
                border-radius: 0 8px 8px 0;
                font-size: 14px;
                line-height: 1.8;
                color: #333;
            }
            .sh-instructions strong {
                color: #2c3e50;
            }
        `;
        document.head.appendChild(style);
    }

    // 渲染提示卡片
    function renderTipCards(container) {
        const wrapper = document.createElement('div');
        wrapper.className = 'sh-card-container';

        tips.forEach(function(tip) {
            const card = document.createElement('div');
            card.className = 'sh-tip-card';
            card.innerHTML = `
                <div class="sh-icon">${tip.icon}</div>
                <div class="sh-title">${tip.title}</div>
                <div class="sh-content">${tip.content}</div>
            `;
            wrapper.appendChild(card);
        });

        container.appendChild(wrapper);
    }

    // 渲染关键词徽章
    function renderBadges(container) {
        const wrapper = document.createElement('div');
        wrapper.className = 'sh-badge-wrapper';

        badges.forEach(function(badge, index) {
            const span = document.createElement('span');
            span.className = 'sh-badge-item';
            span.textContent = badge.text;
            span.style.background = config.badgeColors[index % config.badgeColors.length];
            span.title = badge.label;
            wrapper.appendChild(span);
        });

        container.appendChild(wrapper);
    }

    // 渲染访问说明
    function renderInstructions(container) {
        const div = document.createElement('div');
        div.className = 'sh-instructions';

        const strong = document.createElement('strong');
        strong.textContent = '📖 访问说明：';
        div.appendChild(strong);

        const list = document.createElement('ul');
        list.style.margin = '8px 0 0 0';
        list.style.paddingLeft = '20px';

        instructions.forEach(function(text) {
            const li = document.createElement('li');
            li.textContent = text;
            list.appendChild(li);
        });

        div.appendChild(list);
        container.appendChild(div);
    }

    // 主初始化函数
    function initSiteHelper() {
        // 防止重复执行
        if (document.querySelector('.sh-helper-root')) return;

        injectStyles();

        const root = document.createElement('div');
        root.className = 'sh-helper-root';
        root.style.maxWidth = '960px';
        root.style.margin = '0 auto';
        root.style.padding = '10px 16px';

        // 查找页面主体插入位置
        const main = document.querySelector('main') || document.querySelector('article') || document.querySelector('.content') || document.body;
        main.appendChild(root);

        renderTipCards(root);
        renderBadges(root);
        renderInstructions(root);
    }

    // 在DOM加载完成后执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSiteHelper);
    } else {
        initSiteHelper();
    }
})();