(function(modules) {
  // 缓存，防止重复执行
  var cache = {};

  function require(moduleId) {
    if (cache[r]) return cache[r].exports;
    const installModule = {
      moduleId,
      l: false,
      exports: {},
    }

    modules[moduleId].call(installModule.exports, installModule, require);

    installModule.l = true;

    return installModule.exports;
  }

  require(0);
})([function(module, require) {
  const name = require(1);

  console.log(name);
}, function(module, require) {
  module.exports = {
    name: 'test',
  };
}]);