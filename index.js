const _matchOne = (pattern, text) => {
    if(!pattern) return true;
    if(!text) return false;
    if(pattern === '.') return true;
    if(pattern === text) return true;
};

const _matchStar(pattern, text) {
    return (matchOne(pattern[0], text[0]) && match(pattern, text.slice(1))) || match(pattern.slice(2), text);
}

const _matchQuestion = (pattern, text) => {
    return matchOne(pattern[0], text[0]) 
    && match(pattern.slice(2), text.slice(1))
    || match(pattern.slice(2), text);
}

const match = (pattern, text) => {
    if(pattern === "") return true;
    if(pattern === "$" && text === "") return true;
    if(pattern[1] === "?")
        return _matchQuestion(pattern, text);
    if(pattern[1] === "*")
        return _matchStar(pattern, text);
    return _matchOne(pattern[0], text[0]) && match(pattern.slice(1), text.slice(1))
}

const search = (pattern, text) => {

};

module.exports = {
    match,
    search
}