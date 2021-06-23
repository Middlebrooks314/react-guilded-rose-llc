// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "globals": {
        "Promise": true,
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
        "react",
        "react-hooks"
    ],
    "rules": {
        "react/prop-types": "off",
        "react/jsx-uses-react": "error",
        "no-unused-vars": "off",
        "jsx-quotes": [2, "prefer-double"]
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
    
};
