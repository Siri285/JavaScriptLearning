var titleCase = function(m) {
    return m.slice(0,1).toUpperCase()+m.slice(1);
};

console.log("batman,spider-man, iron man".replace(/\b\w+\b/g, titleCase));

