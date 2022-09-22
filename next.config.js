const withAntdLess = require('next-plugin-antd-less')
const withPWA = require('next-pwa')

module.exports = withAntdLess({
    lessVarsFilePath: './styles/variables.less',
    ...withPWA({
        pwa: {
            dest: 'public',
            register: true,
            skipWaiting: true,
        },
    }),
    webpack(config) {
        return config
    },
})
