const useFetch = async (url, method = 'get', contentType = null, body = null, authorization = null) => {
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
            "authorization": authorization
         },
         redirect: "follow",
         body: formData ? formData : JSON.stringify(body) || body
      }

      if (!body) delete options.body
      if (!authorization) delete options.headers.authorization

      return await fetch(url, options).then(async res => {
         return {
            result: await res.json() || null,
            status: res.status,
            ok: res.ok
         }
      })

   } catch (err) {
      throw new Error('USEFETCH_ERROR; ' + err)
   }
}
export default useFetch