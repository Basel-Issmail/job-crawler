import crawler from '../../crawler';

const getJobs = async () => new Promise((resolve, reject) => {
  crawler.queue([{
    uri: 'https://stackoverflow.com/jobs',

    // The global callback won't be called
    callback(error, res) {
      if (error) {
        reject(error);
      } else {
        const $ = res.$;
        // resolve({ description: $('span.fav-toggle').html() });
        const result = [];
        $('span.fav-toggle').each(function () {
          result.push({ description: $(this).attr('data-ga-label') });
        });
        resolve(result);
      }
    },
  }]);
});

export { getJobs };
