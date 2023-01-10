# json2csv

json data to csv

referance - [https://github.com/letswritetw/letswrite-json-to-csv](https://github.com/letswritetw/letswrite-json-to-csv)

## Usage

```javascript

var jsonData = [
  {
    key: 'value1',
    num: 1
  },
  {
    key: 'value2',
    num: 2
  }
]

buildData(jsonData).then((jsonData) => {
  downloadCSV(jsonData)
})
```