import {WebSocialSharePinterestAttributes} from '../types/web-social-share-attributes';

import {shareEncodedUrl} from './utils';

export const pinterest = async (attrs: WebSocialSharePinterestAttributes) => {
  window.open(
    'https://www.pinterest.com/pin/create/button/?url=' +
      shareEncodedUrl(attrs.socialShareUrl) +
      '&media=' +
      encodeURIComponent(attrs.socialShareMedia) +
      '&description=' +
      encodeURIComponent(attrs.socialShareText),
    'Pinterest',
    'toolbar=0,status=0,resizable=yes,width=' +
      attrs.socialSharePopupWidth +
      ',height=' +
      attrs.socialSharePopupHeight +
      ',top=' +
      (window.innerHeight - attrs.socialSharePopupHeight) / 2 +
      ',left=' +
      (window.innerWidth - attrs.socialSharePopupWidth) / 2
  );
};
