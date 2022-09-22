import { Breadcrumb, Button, Layout, PageHeader } from 'antd'
import React from 'react'

const { Content } = Layout

const Home: React.FC = () => (
    <Layout className="bg-white">
        <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>Example</Breadcrumb.Item>
        </Breadcrumb>
        <PageHeader className="site-page-header" title="Title" subTitle="This is a subtitle" />
        <Content>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <Button type="primary">Primary Button</Button>
        </Content>
    </Layout>
)

export default Home
