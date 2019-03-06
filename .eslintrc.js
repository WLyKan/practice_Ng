// "off" or 0
// "warn" or 1
// "error" or 2
// 单行禁用:
// eslint-disable-next-line no-alert
module.exports = {
    "root": true,
    "extends": "airbnb-base",
    "rules": {
        "no-undef":["off"],
        "no-underscore-dangle":["off","allow"],
        "indent": ["off"],
        "no-param-reassign": ["error", { "props": false }],
        "semi": ["error", "never"],
        "consistent-return": ["off"],
        "no-unused-expressions": ["error", { "allowShortCircuit": true }],
        'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
        "no-else-return": ["error", { "allowElseIf": true }]
    }
};
