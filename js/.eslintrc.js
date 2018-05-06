module.exports = {
    root: true, // do not refer parent folder lint configurations
    extends: ['airbnb'],
    env: {
        browser: true,
        node: true,
        jest: true,
    },
};
