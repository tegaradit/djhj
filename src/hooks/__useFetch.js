export default async function (url, method, contentType = null, body = null) {
   let response
   try {

      let formData = null
      if (contentType) if (contentType.toLowerCase() == 'multipart/form-data') {
         formData = new FormData()
         Object.entries(body).forEach( ([ key, val ]) => formData.append(`${key}`, val) )
      }

      const options = {
         method: method,
         mode: "cors",
         cache: "no-cache",
         redirect: "follow",
         headers: {
            "Content-Type": contentType,
         },
         redirect: "follow",
         body: formData ? formData : JSON.stringify(body) || body
      }

      if (!body) delete options.body

      return await fetch(url, options)

   } catch (err) {
      return {err, response}
   }
}