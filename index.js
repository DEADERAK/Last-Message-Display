// 引入必要的模块
import { getContext } from "../../../extensions.js";

// 扩展名称和路径
const extensionName = "lastMessageDisplay";
const extensionFolderPath = `scripts/extensions/third-party/${extensionName}`;

// 初始化插件
async function initLastMessageDisplay() {
    // 加载HTML并将其添加到界面中
    const settingsHtml = await $.get(`${extensionFolderPath}/example.html`);
    $("#extensions_settings").append(settingsHtml);

    // 监听新消息的添加事件
    eventSource.on(event_types.MESSAGE_ADDED, updateLastMessage);
}

// 更新左侧消息内容
function updateLastMessage() {
    const context = getContext();
    const chat = context.chat;

    // 检查是否有消息，并获取最后一条
    if (chat && chat.length > 0) {
        const lastMessage = chat[chat.length - 1].mes; // 获取最后一条消息的内容

        // 更新左侧容器的内容
        const messageContentElement = document.getElementById("last-message-content");
        if (messageContentElement) {
            messageContentElement.innerText = lastMessage;
        }
    }
}

// 插件加载时调用初始化
jQuery(async () => {
    await initLastMessageDisplay();
});
