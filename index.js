// Add your code here
function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {name,email} )
      } )
      // convert to json format
      .then( function (response) {
        return response.json()
      } )
      //to post the info needed
      .then( function (object) {
        document.body.innerHTML = object["id"]
      } )
      //to catch erros
      .catch( function (error) {
        document.body.innerHTML=error.message
      } )
  }