# How to make Api calls

## Using fetch

fetch('')
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err.message))

## using Axios

### To use axios we must install axios (can be used in react )

npm install axios

axios.get('https://api.publicapis.org/entries')
.then(res=>console.log(res.data))
