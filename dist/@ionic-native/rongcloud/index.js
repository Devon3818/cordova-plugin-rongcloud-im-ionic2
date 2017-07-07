var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
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
var RongCloudLibPlugin = (function (_super) {
    __extends(RongCloudLibPlugin, _super);
    function RongCloudLibPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    RongCloudLibPlugin.prototype.functionName = function (arg1, arg2) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.init = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.connect = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getConnectionStatus = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.disconnect = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.logout = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getCurrentUserId = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.setConnectionStatusListener = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.setOnReceiveMessageListener = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getConversationList = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getConversation = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getLatestMessages = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getHistoryMessages = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.removeConversation = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.clearConversations = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.setConversationToTop = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.sendTextMessage = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.sendVoiceMessage = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.sendImageMessage = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.sendRichContentMessage = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.sendLocationMessage = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.sendCommandNotificationMessage = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.sendCommandMessage = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.setMessageSentStatus = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.setMessageReceivedStatus = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getTextMessageDraft = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.saveTextMessageDraft = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.clearTextMessageDraft = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getRemoteHistoryMessages = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getHistoryMessagesByObjectName = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.deleteMessages = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.clearMessages = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getTotalUnreadCount = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getUnreadCount = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getUnreadCountByConversationTypes = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.clearMessagesUnreadStatus = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.setMessageExtra = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.setNotificationQuietHours = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.removeNotificationQuietHours = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getNotificationQuietHours = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.setConversationNotificationStatus = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getConversationNotificationStatus = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.syncGroup = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.joinGroup = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.quitGroup = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.createDiscussion = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.addMemberToDiscussion = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.removeMemberFromDiscussion = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.quitDiscussion = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getDiscussion = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.setDiscussionName = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.setDiscussionInviteStatus = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.joinChatRoom = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.quitChatRoom = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.addToBlacklist = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.removeFromBlacklist = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getBlacklistStatus = function (options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RongCloudLibPlugin.prototype.getBlacklist = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    return RongCloudLibPlugin;
}(IonicNativePlugin));
RongCloudLibPlugin.decorators = [
    { type: Injectable },
];
/** @nocollapse */
RongCloudLibPlugin.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "functionName", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "init", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "connect", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getConnectionStatus", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "disconnect", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "logout", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getCurrentUserId", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "setConnectionStatusListener", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "setOnReceiveMessageListener", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getConversationList", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getConversation", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getLatestMessages", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getHistoryMessages", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "removeConversation", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "clearConversations", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "setConversationToTop", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "sendTextMessage", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "sendVoiceMessage", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "sendImageMessage", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "sendRichContentMessage", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "sendLocationMessage", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "sendCommandNotificationMessage", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "sendCommandMessage", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "setMessageSentStatus", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "setMessageReceivedStatus", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getTextMessageDraft", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "saveTextMessageDraft", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "clearTextMessageDraft", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getRemoteHistoryMessages", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getHistoryMessagesByObjectName", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "deleteMessages", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "clearMessages", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getTotalUnreadCount", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getUnreadCount", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getUnreadCountByConversationTypes", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "clearMessagesUnreadStatus", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "setMessageExtra", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "setNotificationQuietHours", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "removeNotificationQuietHours", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getNotificationQuietHours", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "setConversationNotificationStatus", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getConversationNotificationStatus", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "syncGroup", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "joinGroup", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "quitGroup", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "createDiscussion", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "addMemberToDiscussion", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "removeMemberFromDiscussion", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "quitDiscussion", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getDiscussion", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "setDiscussionName", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "setDiscussionInviteStatus", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "joinChatRoom", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "quitChatRoom", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "addToBlacklist", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "removeFromBlacklist", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getBlacklistStatus", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RongCloudLibPlugin.prototype, "getBlacklist", null);
RongCloudLibPlugin = __decorate([
    Plugin({
        pluginName: 'rongcloud',
        plugin: 'cordova-plugin-rongcloud-im',
        pluginRef: 'RongCloudLibPlugin',
        repo: 'https://github.com/rongcloud/cordova-plugin-rongcloud-im',
        platforms: ['Android', 'iOS'],
        install: 'ionic cordova plugin add cordova-plugin-rongcloud-im',
    })
], RongCloudLibPlugin);
export { RongCloudLibPlugin };
//# sourceMappingURL=index.js.map