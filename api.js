
fetch('https://api.publicapis.org/entries')
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err.message))

axios.get('https://api.publicapis.org/entries')
.then(res=>console.log(res.data))