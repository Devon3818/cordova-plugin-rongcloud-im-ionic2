import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name rongcloud
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { rongcloud } from '@ionic-native/rongcloud';
 *
 *
 * constructor(private rongcloud: rongcloud) { }
 *
 * ...
 *
 *
 * this.rongcloud.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class RongCloudLibPlugin extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    functionName(arg1: string, arg2: number): Promise<any>;
    init(options: any): Promise<any>;
    connect(options: any): Promise<any>;
    getConnectionStatus(): Promise<any>;
    disconnect(options: any): Promise<any>;
    logout(): Promise<any>;
    getCurrentUserId(): Promise<any>;
    setConnectionStatusListener(): Promise<any>;
    setOnReceiveMessageListener(): Promise<any>;
    getConversationList(): Promise<any>;
    getConversation(options: any): Promise<any>;
    getLatestMessages(options: any): Promise<any>;
    getHistoryMessages(options: any): Promise<any>;
    removeConversation(options: any): Promise<any>;
    clearConversations(options: any): Promise<any>;
    setConversationToTop(options: any): Promise<any>;
    sendTextMessage(options: any): Promise<any>;
    sendVoiceMessage(options: any): Promise<any>;
    sendImageMessage(options: any): Promise<any>;
    sendRichContentMessage(options: any): Promise<any>;
    sendLocationMessage(options: any): Promise<any>;
    sendCommandNotificationMessage(options: any): Promise<any>;
    sendCommandMessage(options: any): Promise<any>;
    setMessageSentStatus(options: any): Promise<any>;
    setMessageReceivedStatus(options: any): Promise<any>;
    getTextMessageDraft(options: any): Promise<any>;
    saveTextMessageDraft(options: any): Promise<any>;
    clearTextMessageDraft(options: any): Promise<any>;
    getRemoteHistoryMessages(options: any): Promise<any>;
    getHistoryMessagesByObjectName(options: any): Promise<any>;
    deleteMessages(options: any): Promise<any>;
    clearMessages(options: any): Promise<any>;
    getTotalUnreadCount(options: any): Promise<any>;
    getUnreadCount(options: any): Promise<any>;
    getUnreadCountByConversationTypes(options: any): Promise<any>;
    clearMessagesUnreadStatus(options: any): Promise<any>;
    setMessageExtra(options: any): Promise<any>;
    setNotificationQuietHours(options: any): Promise<any>;
    removeNotificationQuietHours(): Promise<any>;
    getNotificationQuietHours(): Promise<any>;
    setConversationNotificationStatus(options: any): Promise<any>;
    getConversationNotificationStatus(options: any): Promise<any>;
    syncGroup(options: any): Promise<any>;
    joinGroup(options: any): Promise<any>;
    quitGroup(options: any): Promise<any>;
    createDiscussion(options: any): Promise<any>;
    addMemberToDiscussion(options: any): Promise<any>;
    removeMemberFromDiscussion(options: any): Promise<any>;
    quitDiscussion(options: any): Promise<any>;
    getDiscussion(options: any): Promise<any>;
    setDiscussionName(options: any): Promise<any>;
    setDiscussionInviteStatus(options: any): Promise<any>;
    joinChatRoom(options: any): Promise<any>;
    quitChatRoom(options: any): Promise<any>;
    addToBlacklist(options: any): Promise<any>;
    removeFromBlacklist(options: any): Promise<any>;
    getBlacklistStatus(options: any): Promise<any>;
    getBlacklist(): Promise<any>;
}
