import {
  storiesOf
} from '@storybook/html';

import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import {
  renderContent
} from '../../.storybook/rendering-service';

import bannerStyles from './banner.scss';

/*export const sampleContent = {
  "@id": "http://content.cms.amplience.com/04125527-a0b0-415e-9b83-0791d7669638",
  "_meta": {
    "schema": "https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/banner.json",
    "name": "accelerator-banner-1"
  },
  "button": {
    "label": "Read More",
    "_meta": {
      "schema": "https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/link.json"
    },
    "value": "http://dev-solutions.s3.amazonaws.com/dc-demo-site/dist/blog/index.html?c=54db7a18-1768-400f-8e96-bbd2e35e4b9c&s=e6bdb253-db3c-4458-b5cc-0d90aa02e114"
  },
  "bannerImage": {
    "@id": "http://content.cms.amplience.com/38476590-9594-4d46-8f5a-c54e293fd094",
    "@type": "https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/image.json",
    "_meta": {
      "schema": "https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/image.json",
      "name": "accelerator-image-1"
    },
    "image": {
      "@id": "http://image.cms.amplience.com/f46fecc5-945c-451c-879e-5c974a821891",
      "_meta": {
        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
      },
      "id": "f46fecc5-945c-451c-879e-5c974a821891",
      "name": "blue-and-pink",
      "endpoint": "csdemo",
      "defaultHost": "i1.adis.ws",
      "mediaType": "image"
    },
    "imageAltText": "lady-in-red",
    "seoText": "lady-in-red"
  },
  "textPositionLeft": "55",
  "textPositionTop": "50",
  "textColor": "rgb(255,255,255)",
  "header": "Pretty in Pink",
  "description": "Exploring Spring & Summer Looks in London",
  "stackMobileLayout": true,
  "bannerColor": "rgb(255,0,0)",
  "@type": "https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/banner.json"
};*/

export const sampleContent = {
  '@id': 'http://content.cms.amplience.com/0a2dc2e6-c7c4-454c-b71e-f74d0012fc39',
  'button': {
    'label': 'click me',
    'value': 'http://www.google.com'
  },
  'textPositionTop': '45',
  'bannerImage': {
    'image': {
      'image': {
        '@id': 'http://image.cms.amplience.com/41f2d659-6f6b-4e50-9cf1-0f780b3efd86',
        'endpoint': 'csdemo',
        'defaultHost': 'i1.adis.ws',
        'name': 'IMG_5437',
        '_meta': {
          'schema': 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link'
        },
        'id': '41f2d659-6f6b-4e50-9cf1-0f780b3efd86',
        'mediaType': 'image'
      },
      "aspectLock": "poi",
      "rot": 0,
      "sat": 0,
      "query": "poi=0.9606,0.9404,0,0&scaleFit=poi",
      "bri": 0,
      "hue": 0,
      "flipv": false,
      "fliph": false,
      "poi": {
        "x": 0.96060606060606058,
        "y": 0.9404040404040405
      },
      "crop": [
        0,
        0,
        0,
        0
      ]
    },
    'roundel': [
      {
        'roundel': {
          '@id': 'http://image.cms.amplience.com/914c3c21-d301-411f-8887-29f7a4b0d996',
          'endpoint': 'csdemo',
          'defaultHost': 'i1.adis.ws',
          'name': 'demo_01-roundel_be_inspired',
          '_meta': {
            'schema': 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link'
          },
          'id': '914c3c21-d301-411f-8887-29f7a4b0d996',
          'mediaType': 'image'
        },
        'roundelRatio': 0.1,
        'roundelPosition': 'Center'
      }
    ],
    'imageAltText': 'alt text',
    'seoText': 'seo',
    '_meta': {
      'schema': 'http://test.com/imageEditor'
    }
  },
  'subheader': 'subheader',
  'textPositionLeft': '12',
  '_meta': {
    'schema': 'http://test.com/banner',
    'name': 'banner-test'
  },
  'header': 'header',
  'description': 'description text',
  'stackMobileLayout': true,
  'bannerColor': 'rgb(71, 216, 38)',
  'textColor': 'rgba(211, 64, 64, 0.89)',
  '@type': 'http://test.com/banner'
};

export const sampleContent2 = {
  '@id': 'http://content.cms.amplience.com/0a2dc2e6-c7c4-454c-b71e-f74d0012fc39',
  'button': {
    'label': 'click me',
    'value': 'http://www.google.com'
  },
  'textPositionTop': '45',
  'bannerImage': {
    'image': {
      'image': {
        '@id': 'http://image.cms.amplience.com/41f2d659-6f6b-4e50-9cf1-0f780b3efd86',
        'endpoint': 'csdemo',
        'defaultHost': 'i1.adis.ws',
        'name': 'IMG_5437',
        '_meta': {
          'schema': 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link'
        },
        'id': '41f2d659-6f6b-4e50-9cf1-0f780b3efd86',
        'mediaType': 'image'
      },
      "aspectLock": "none",
      "rot": 0,
      "sat": 0,
      "query": "",
      "bri": 0,
      "hue": 0,
      "flipv": false,
      "fliph": false,
      "poi": {
        "x": 0.96060606060606058,
        "y": 0.9404040404040405
      },
      "crop": [
        0,
        0,
        0,
        0
      ]
    },
    'roundel': [
      {
        'roundel': {
          '@id': 'http://image.cms.amplience.com/914c3c21-d301-411f-8887-29f7a4b0d996',
          'endpoint': 'csdemo',
          'defaultHost': 'i1.adis.ws',
          'name': 'demo_01-roundel_be_inspired',
          '_meta': {
            'schema': 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link'
          },
          'id': '914c3c21-d301-411f-8887-29f7a4b0d996',
          'mediaType': 'image'
        },
        'roundelRatio': 0.1,
        'roundelPosition': 'Center'
      }
    ],
    'imageAltText': 'alt text',
    'seoText': 'seo',
    '_meta': {
      'schema': 'http://test.com/imageEditor'
    }
  },
  'subheader': 'subheader',
  'textPositionLeft': '12',
  '_meta': {
    'schema': 'http://test.com/banner',
    'name': 'banner-test'
  },
  'header': 'header',
  'description': 'description text',
  'stackMobileLayout': true,
  'bannerColor': 'rgb(71, 216, 38)',
  'textColor': 'rgba(211, 64, 64, 0.89)',
  '@type': 'http://test.com/banner'
};

export const sampleContent3 = {
  '@id': 'http://content.cms.amplience.com/0a2dc2e6-c7c4-454c-b71e-f74d0012fc39',
  'button': {
    'label': 'click me',
    'value': 'http://www.google.com'
  },
  'textPositionTop': '45',
  'bannerImage': {
    'image': {
      'image': {
        '@id': 'http://image.cms.amplience.com/41f2d659-6f6b-4e50-9cf1-0f780b3efd86',
        'endpoint': 'csdemo',
        'defaultHost': 'i1.adis.ws',
        'name': 'IMG_5437_no',
        '_meta': {
          'schema': 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link'
        },
        'id': '41f2d659-6f6b-4e50-9cf1-0f780b3efd86',
        'mediaType': 'image'
      },
      "aspectLock": "none",
      "rot": 0,
      "sat": 0,
      "query": "",
      "bri": 0,
      "hue": 0,
      "flipv": false,
      "fliph": false,
      "poi": {
        "x": 0.96060606060606058,
        "y": 0.9404040404040405
      },
      "crop": [
        0,
        0,
        0,
        0
      ]
    },
    'roundel': [
      {
        'roundel': {
          '@id': 'http://image.cms.amplience.com/914c3c21-d301-411f-8887-29f7a4b0d996',
          'endpoint': 'csdemo',
          'defaultHost': 'i1.adis.ws',
          'name': 'demo_01-roundel_be_inspired',
          '_meta': {
            'schema': 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link'
          },
          'id': '914c3c21-d301-411f-8887-29f7a4b0d996',
          'mediaType': 'image'
        },
        'roundelRatio': 0.1,
        'roundelPosition': 'Center'
      }
    ],
    'imageAltText': 'alt text',
    'seoText': 'seo',
    '_meta': {
      'schema': 'http://test.com/imageEditor'
    }
  },
  'subheader': 'subheader',
  'textPositionLeft': '12',
  '_meta': {
    'schema': 'http://test.com/banner',
    'name': 'banner-test'
  },
  'header': 'header',
  'description': 'description text',
  'stackMobileLayout': true,
  'bannerColor': 'rgb(71, 216, 38)',
  'textColor': 'rgba(211, 64, 64, 0.89)',
  '@type': 'http://test.com/banner'
};


storiesOf('Banner', module)
  .add('Example Content', () => renderContent('acc-template-banner', sampleContent))