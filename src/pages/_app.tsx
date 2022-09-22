import type { AppProps } from 'next/app'
require('../styles/variables.less')
import '../styles/globals.css'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import { Button, MenuProps, PageHeader } from 'antd'
import { Breadcrumb, Layout, Menu } from 'antd'
import React from 'react'

const { Header, Content, Sider } = Layout

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}))

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1)

    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,

        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1
            return {
                key: subKey,
                label: `option${subKey}`,
            }
        }),
    }
})

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout className="h-screen">
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
            <Layout>
                <Sider width={200}>
                    <Menu className="h-full" mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} items={items2} />
                </Sider>
                <Layout className="bg-white">
                    <Component {...pageProps} />
                </Layout>
            </Layout>
        </Layout>
    )
}

export default MyApp
