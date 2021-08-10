module.exports = function check(str, bracketsConfig) {
  let config = [];
  for (i = 0; i < bracketsConfig.length; i ++) {
    config.push(bracketsConfig[i].join(''));
  }
  
  for (i = 0; i < config.length; i ++) {
    if (str.includes(config[i])) {
      str = str.replace(config[i],'');
      i = - 1;
    }
  }
  return str.length === 0;
}
