/**
 * Created by alex on 2017/9/19.
 */

'use strict';

const crypto = require('crypto');

const ms = require('ms');
const svgCaptcha = require('svg-captcha');
const uuid = require('uuid');

const Service = require('egg').Service;

class ImageCaptchaService extends Service {

  * svgImageCaptcha() {
    const imageToken = this.ctx.query.token;
    if (!imageToken) return;

    const { redis } = this.app;
    const captcha = yield redis.get(imageToken);
    if (!captcha) return;

    const captchaSVG = svgCaptcha(captcha);

    // 资源文件类型
    this.ctx.type = 'image/svg+xml; charset=utf-8';
    this.ctx.body = captchaSVG;
  }

  * createCaptcha() {
    const { redis } = this.app;
    const { logger } = this.ctx;

    const captcha = svgCaptcha.randomText() || '';
    const imageCaptchaTokenMaxAge = this.config.imageCaptcha.maxAge;
    const imageCaptchaToken = crypto.createHash('md5').update(uuid()).digest('hex');

    yield redis.set(imageCaptchaToken, captcha, 'EX', ms(imageCaptchaTokenMaxAge) * 0.001);
    logger.info(`请求创建 imageCaptchaToken 成功 imageCaptchaToken: ${imageCaptchaToken} captcha: ${captcha} 过期时间: ${imageCaptchaTokenMaxAge}`);

    return {
      img_captcha_token: imageCaptchaToken,
      img_url: `${this.config.imageCaptcha.captchaImagUrlPrefix}?token=${imageCaptchaToken}`,
      captcha: this.config.env === 'local' ? captcha : undefined,
    };
  }
}

module.exports = ImageCaptchaService;
