import {
  storiesOf
} from '@storybook/html';

import {
  renderContent
} from '../../.storybook/rendering-service';

import cardStyles from './card.scss';

export const sampleContent = {
  '@id': 'http://content.cms.amplience.com/29bd9901-691f-4f35-adb2-ad93c85cd01b',
  '_meta': {
    'schema': 'https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/card.json',
    'name': 'accelerator-card-1'
  },
  'cardImage': {
    'image': {
      'image': {
        'id': 'f46fecc5-945c-451c-879e-5c974a821891',
        'name': 'pexels-photo-128939',
        'endpoint': 'csdemo',
        'defaultHost': 'i1.adis.ws',
        'mediaType': 'image'
      },
      'aspectLock': 'poi',
      'rot': 0,
      'sat': 0,
      'query': 'poi=0.5107,0.3196,0,0&scaleFit=poi',
      'bri': 0,
      'hue': 0,
      'flipv': false,
      'fliph': false,
      'poi': {
        'x': 0.510654490106545,
        'y': 0.31963470319634707
      },
      'crop': [
        0,
        0,
        0,
        0
      ]
    },
    "imageAltText": "alt",
    "seoText": "seo",
    "_meta": {
      "schema": "http://inventory.com/image.json"
    }
  },
  'cardName': 'Card 1',
  'link': {
    'value': 'http://google.com',
    '_meta': {
      'schema': 'https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/link.json'
    },
    'label': 'link card 1'
  },
  'description': 'Card 1 description',
  '@type': 'https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/card.json'
};

storiesOf('Card', module)
  .add('Example content', () => renderContent('acc-template-card', sampleContent));