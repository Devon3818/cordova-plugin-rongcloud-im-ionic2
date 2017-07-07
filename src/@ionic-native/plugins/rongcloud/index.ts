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
@Plugin({
  pluginName: 'rongcloud',
  plugin: 'cordova-plugin-rongcloud-im', // npm package name, example: cordova-plugin-camera
  pluginRef: 'RongCloudLibPlugin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/rongcloud/cordova-plugin-rongcloud-im', // the github repository URL for the plugin
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
  install: 'ionic cordova plugin add cordova-plugin-rongcloud-im', // OPTIONAL install command, in case the plugin requires variables
})
@Injectable()
export class RongCloudLibPlugin extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  functionName(arg1: string, arg2: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  init(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  connect(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getConnectionStatus(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  disconnect(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  logout(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getCurrentUserId(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setConnectionStatusListener(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setOnReceiveMessageListener(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getConversationList(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getConversation(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getLatestMessages(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getHistoryMessages(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  removeConversation(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  clearConversations(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setConversationToTop(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  sendTextMessage(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  sendVoiceMessage(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  sendImageMessage(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  sendRichContentMessage(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  sendLocationMessage(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  sendCommandNotificationMessage(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  sendCommandMessage(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setMessageSentStatus(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setMessageReceivedStatus(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getTextMessageDraft(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  saveTextMessageDraft(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  clearTextMessageDraft(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getRemoteHistoryMessages(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getHistoryMessagesByObjectName(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  deleteMessages(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  clearMessages(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getTotalUnreadCount(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getUnreadCount(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getUnreadCountByConversationTypes(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  clearMessagesUnreadStatus(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setMessageExtra(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setNotificationQuietHours(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  removeNotificationQuietHours(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getNotificationQuietHours(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setConversationNotificationStatus(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getConversationNotificationStatus(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  syncGroup(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  joinGroup(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  quitGroup(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  createDiscussion(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  addMemberToDiscussion(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  removeMemberFromDiscussion(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  quitDiscussion(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getDiscussion(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setDiscussionName(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setDiscussionInviteStatus(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  joinChatRoom(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  quitChatRoom(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  addToBlacklist(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  removeFromBlacklist(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getBlacklistStatus(options: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getBlacklist(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }




}
