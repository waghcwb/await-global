# await-global
Promised wait for globals

## Install
`yarn install await-global`

## Usage
```javascript
  import awaitGloabl from 'await-global';
  
  awaitGlobal('SomeGlobal').then(SomeGlobal => {
    console.log(SomeGlobal);
  });
  
  async function globalCheck() {
    const AnotherGlobal = await awaitGlobal('AnotherGlobal');
    console.log(AnotherGlobal);
  }
  
  // custom timeout
  awaitGlobal('SomeGlobal', 500).then(SomeGlobal => {
    console.log(SomeGlobal);
  });
  
  // array of globals
  awaitGlobal(['SomeGlobal', 'AnotherGlobal']).then(globals => {
    const [ SomeGlobal, AnotherGlobal ] = globals
    console.log(SomeGlobal);
    console.log(AnotherGlobal);
  });
```
