'use strict';

const mock = require('egg-mock');

describe('test/image-captcha.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/image-captcha-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, imageCaptcha')
      .expect(200);
  });
});
