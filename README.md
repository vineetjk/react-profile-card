# Profile UI Card Library for React


[![NPM](https://img.shields.io/npm/v/react-profile-card.svg)](https://www.npmjs.com/package/react-profile-card) [![Contibutors](https://img.shields.io/github/contributors/vineetjk/react-profile-card)](https://github.com/vineetjk/react-profile-card/graphs/contributors)

---

## Intro

<p align="center">
  <img width="250" src="/src/media/profile.png">
</p>

## Features

- Easy-to-use
- Custom Name
- Designation

## Upcomming Features

- Links to social media
- Custom theme


## Install into your react project

This package requires `node >= 10`.

```bash
npm install react-profile-card --save
```

## Usage

In Your Example.js file

```javascript
import React from 'react';
import ProfileUi from 'react-profile-card';


function Example() {
  return (
    <div> 
      <ProfileUi 
          imgUrl='https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg' 
          name='vineet jk' 
          designation='designer' 
          />
    </div>
  );
}

export default Example;

```

![](https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif)

## License

MIT © [Vineet J Karni](https://github.com/vineetjk)
