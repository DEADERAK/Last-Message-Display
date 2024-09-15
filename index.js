// 插件的核心脚本

// 插件初始化
async function initVerticalRectangleDisplay() {
    // 加载 HTML 文件并添加到页面中
    const settingsHtml = await $.get(`${extensionFolderPath}/example.html`);
    $("body").append(settingsHtml); // 插入到页面主体

    console.log("竖直长方形插件已加载！");
}

// 插件加载时调用初始化函数
jQuery(async () => {
    await initVerticalRectangleDisplay();
});
