import crawler from '../crawler';

const getResolvedResult = (resolve, reject, error, res) => {
  if (error) {
    reject(error);
  } else {
    const $ = res.$;
    // $('.row.result').each(function getDetails() {
    //   console.log($(this).html());
    // });
    // resolve({ description: $('span.fav-toggle').html() });
    const result = [];
    $('.row.result').each(function getDetails() {
      result.push(
        {
          title: $(this).find('h2.jobtitle  a').attr('title'),
          link: $(this).find('h2.jobtitle  a').attr('href'),
          company: $(this).find('span.company').text().replace(/\n/g, '')
            .replace(/\r/g, '')
            .trim(),
        },
      );
    });
    resolve(result);
  }
};

const searchJobs = async input => new Promise((resolve, reject) => {
  crawler.queue([{
    uri: `https://www.indeed.com/jobs?q=${input.keyWord}&l=${input.location}&start=${10 * parseInt((input.pageNumber - 1), 10)}`,

    // The global callback won't be called
    callback(error, res) {
      getResolvedResult(resolve, reject, error, res);
    },
  }]);
});

export { searchJobs };
