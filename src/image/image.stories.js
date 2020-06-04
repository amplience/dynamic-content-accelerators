import {
  storiesOf
} from '@storybook/html';

import { renderContent } from '../../.storybook/rendering-service';

import imageStyles from './image.scss';

export const sampleContent = {
  '@id': 'http://content.cms.amplience.com/38476590-9594-4d46-8f5a-c54e293fd094',
  '_meta': {
    'schema': 'https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/image.json',
    'name': 'accelerator-image-1'
  },
  'image': {
    '@id': 'http://image.cms.amplience.com/f46fecc5-945c-451c-879e-5c974a821891',
    '_meta': {
      'schema': 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link'
    },
    'id': 'f46fecc5-945c-451c-879e-5c974a821891',
    'name': 'pexels-photo-128939',
    'endpoint': 'csdemo',
    'defaultHost': 'i1.adis.ws',
    'mediaType': 'image'
  },
  'roundel': [{
    'roundel': {
      'id': 'cad6cb31-1936-4193-82de-1844a1235c91',
      'name': 'shutterstock_151174712',
      'endpoint': 'solutions',
      'defaultHost': 'i1.adis.ws',
      'mediaType': 'image',
      '_meta': {
        'schema': 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link'
      }
    }
  }],
  'imageAltText': 'pexels-photo-128939',
  'seoText': 'pexels-photo-128939',
  '@type': 'https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/image.json'
};

export const sampleEditorContent = {
  '@id': 'http://content.cms.amplience.com/38476590-9594-4d46-8f5a-c54e293fd094',
  '_meta': {
    'schema': 'https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/image.json',
    'name': 'accelerator-image-1'
  },
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
    'aspectLock': '4:3',
    'rot': 0,
    'sat': 0,
    'query': 'crop={22.85%},{0%},{52.55%},{100%}',
    'bri': 0,
    'hue': 0,
    'flipv': false,
    'fliph': false,
    'poi': {
      'x': -1,
      'y': -1
    },
    'crop': [
      407,
      0,
      936,
      702
    ]
  },
  'roundel': [{
    'roundel': {
      'id': 'cad6cb31-1936-4193-82de-1844a1235c91',
      'name': 'shutterstock_151174712',
      'endpoint': 'solutions',
      'defaultHost': 'i1.adis.ws',
      'mediaType': 'image',
      '_meta': {
        'schema': 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link'
      }
    }
  }],
  'imageAltText': 'pexels-photo-128939',
  'seoText': 'pexels-photo-128939',
  '@type': 'https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/image.json'
};


storiesOf('Image', module)
  .add('Example with POI', () => renderContent('acc-template-image', sampleContent))
  .add('Example with Editor', () => renderContent('acc-template-image', sampleEditorContent));
