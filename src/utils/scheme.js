/**
 * 运营管理-书桌推荐位配置
 */
import React from 'react'
import { Select } from 'antd'

const Option = Select.Option
const SCHEMEOBJ = {
    在读榜: '在读榜(无须填写跳转目标)',
    新书榜: '新书榜(无须填写跳转目标)',
    分类页面: '分类页(跳转目标填写分类ID)',
    书籍详情页: '书籍详情页(跳转目标填写书籍ID)',
    书评正文页面: '书评正文页(跳转目标填写书评ID)',
    写书评: '写书评(无须填写跳转目标)',
    个人主页: '个人主页(跳转目标填写用户ID)',
    内链: '内链(跳转目标填写活动页面链接)',
    外链: '外链(跳转目标填写活动页面链接)',
    书籍提问列表: '书籍提问列表(跳转目标填写书籍ID)',
    提问回答列表: '提问回答推荐(跳转目标填写回答ID，用于回答推荐)',
    问题回答页: '提问回答列表(跳转目标填写问题ID，用于问题推荐)',
    登录页面: '登录页面(无须填写跳转目标)',
    书籍正文页: '书籍正文页(跳转目标填写书籍ID)',
    我的消息页: '我的消息页(无须填写跳转目标)',
    意见反馈页: '意见反馈页(无须填写跳转目标)',
    我的粉丝列表页: '我的粉丝列表页(无须填写跳转目标)',
    设置页: '设置页(无须填写跳转目标)',
    书评分类页: '书评分类页(跳转目标可直接输入内容分类名称)',
    回答分类页: '回答分类页(跳转目标可直接输入内容分类名称)',
    时长付费页: '时长付费页(无须填写跳转目标)',
    无需跳转: '无需跳转',
    礼品卡页面: '礼品卡页面(无须填写跳转目标)'
}

export const isNotRequired = {
    在读榜: true,
    新书榜: true,
    写书评: true,
    登录页面: true,
    我的消息页: true,
    意见反馈页: true,
    我的粉丝列表页: true,
    设置页: true,
    时长付费页: true,
    无需跳转: true,
    礼品卡页面: true
}

export function getSchemeUrlOption() {
    const schemeHtml = []
    for (var key in SCHEMEOBJ) {
        schemeHtml.push(<Option key={key}>{SCHEMEOBJ[key]}</Option>)
    }

    return schemeHtml
}

export function getSchemeDirectUrl(targetType, target) {
    switch (targetType) {
        case '书籍详情页':
            return (
                <a target="_blank" rel="noopener noreferrer" href={`/?bookId=${target}#bookDetail`}>
                    {target}
                </a>
            )
        case '书评正文页面':
            return (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`/comment?bookReviewId=${target}#bookReviewDetail`}>
                    {target}
                </a>
            )
        case '个人主页':
            return (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`/user?userId=${target}#userDetail`}>
                    {target}
                </a>
            )
        case '提问回答列表':
            return (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`/comment?answerId=${target}#answer`}>
                    {target}
                </a>
            )
        case '问题回答页':
            return (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`/comment?questionId=${target}#answer`}>
                    {target}
                </a>
            )
        default:
            return target
    }
}

export function getSchemeOptionText(key) {
    return SCHEMEOBJ[key] || key
}
