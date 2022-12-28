const buildData = (data) => {

  return new Promise((resolve, reject) => {
    let arrayData = []

    let arrayTitle = Object.keys(data[0])
    arrayData.push(arrayTitle)

    Array.prototype.forEach.call(data, (d) => {
      let items = [];
      Array.prototype.forEach.call(arrayTitle, (title) => {
        let item = d[title] || '';
        if (typeof(item) === 'string') {
          item = item.replace(/\n/g, ' ') // handle "\n" in value
          item = `"${item}"` // handle "," in value, use " include as string
        }
        items.push(item);
      });
      arrayData.push(items)
    })

    resolve(arrayData);
  })

}

const downloadCSV = (data) => {
  let csvContent = '';
  Array.prototype.forEach.call(data, (d) => {
    let dataString = d.join(',') + '\n';
    csvContent += dataString;
  })

  let fileName = 'download_' + (new Date()).getTime() + '.csv';

  let link = document.createElement('a');
  link.setAttribute('href', 'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURI(csvContent));
  link.setAttribute('download', fileName);
  link.click();
}