import $ from 'jquery';
import ApiClient from './ApiClient';

const $sampleContainer = $('.sample-container');

const apiClient = new ApiClient();

apiClient.getSamples().then((samples) => {
  const sortLimit = new Date().getTime() - 14 * 24 * 60 * 60 * 1000;

  samples.sort((sample1, sample2) => {
    if (sample1.mtime > sortLimit || sample2.mtime > sortLimit) {
      return sample2.mtime - sample1.mtime;
    }

    return 2 * Math.floor(2 * Math.random()) - 1;
  }).forEach((sample) => {
    $sampleContainer.append(sample.$sample);
  });
});
