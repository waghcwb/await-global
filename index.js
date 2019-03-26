function getGlobal() {
  if (typeof globalThis !== 'undefined') { return globalThis; }
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
}

module.exports =   function awaitGlobal(keys, wait = 300) {
  const root = getGlobal();
  return Promise.all([].concat(keys).map(key => {
    return new Promise((resolve, reject) => {
      let timer;
      const loop = () => {
        if (key.indexOf('.') > -1) {
          try {
            let __key = key.split('.')[0]
            if (root[__key]) {
              const __eval = eval(key.replace(/[(){};,]/g, ''))
              if (__eval) {
                resolve(__eval);
                clearInterval(timer);
              }
            }
          } catch (err) {
            reject(err)
          }
        } else if (root[key]) {
          resolve(root[key]);
          clearInterval(timer);
        }
      };
      timer = setInterval(loop, wait);
      loop();
    });
  }))
};

