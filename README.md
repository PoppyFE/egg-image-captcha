# egg-image-captcha

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-image-captcha.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-image-captcha
[travis-image]: https://img.shields.io/travis/eggjs/egg-image-captcha.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-image-captcha
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-image-captcha.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-image-captcha?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-image-captcha.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-image-captcha
[snyk-image]: https://snyk.io/test/npm/egg-image-captcha/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-image-captcha
[download-image]: https://img.shields.io/npm/dm/egg-image-captcha.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-image-captcha

<!--
Description here.
-->

## Install

```bash
$ npm i egg-image-captcha --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.imageCaptcha = {
  enable: true,
  package: 'egg-image-captcha',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.imageCaptcha = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
