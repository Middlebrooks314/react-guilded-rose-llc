// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "globals": {
        "Promise": "off",
        "process": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": "off",
        "react/jsx-uses-react": "error",
        "no-unused-vars": "off",
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
    
};
