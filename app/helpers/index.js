exports.capitaliseFirstLetter = function(string) {
    if (string === 'css') {
        return 'CSS';
    } else if (string == 'nodejs') {
        return 'Node.js';   
    } else if (string == 'product') {
        return 'Product Development';   
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
};