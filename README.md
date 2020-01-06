# react-pure-css-loaders
[![Build Status](https://travis-ci.com/sandylib/react-pure-css-loaders.svg?branch=master)](https://travis-ci.com/sandylib/react-pure-css-loaders)

[![Coverage Status](https://coveralls.io/repos/github/sandylib/react-pure-css-loaders/badge.svg?branch=master)](https://coveralls.io/github/sandylib/react-pure-css-loaders?branch=master)

react components wrapper of pure css loaders

--example

```sh
import { Ellipsis, Ring, DualRing } from 'react-pure-css-loaders'

import '../node_modules/react-pure-css-loaders/dist/style.css'

function App() {
  return (
    <div className="App">
      <Ellipsis />
      <Ring  />
      <DualRing  />
    </div>
  );
}



```

-- example change color
```sh
import { Ellipsis, Ring, DualRing } from 'react-pure-css-loaders'

import '../node_modules/react-pure-css-loaders/dist/style.css'

function App() {
  return (
    <div className="App">
      <Ellipsis color={'white'} />
      <Ring  color={'white'}/>
      <DualRing  color={'white'}/>
    </div>
  );
}

```





