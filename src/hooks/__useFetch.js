export default async function (url, method, ContentType = null, body = null) {
   let response
   try {
      if (method.toLowerCase() == 'get') {
         response = await fetch(url, {
            method: 'get',
            mode: "cors",
            cache: "no-cache",
            redirect: "follow",
         })
      } else if (ContentType.toLowerCase() == 'multipart/form-data') {
         const formData = new FormData()
         Object.entries(body).forEach(([key, val]) => {
            formData.append(`${key}`, val)
         })

         response = await fetch(url, {
            method: method,
            mode: "cors",
            cache: "no-cache",
            headers: {
               "Content-Type": 'multipart/form-data',
            },
            redirect: "follow",
            body: formData
         })
      } else if (ContentType.toLowerCase() == 'application/json') {
         response = await fetch(url, {
            method: method,
            mode: "cors",
            cache: "no-cache",
            headers: {
               "Content-Type": 'application/json',
            },
            redirect: "follow",
            body: JSON.stringify(body)
         })
      } else {
         response = await fetch(url, {
            method: method,
            mode: "cors",
            cache: "no-cache",
            headers: {
               "Content-Type": ContentType,
            },
            redirect: "follow",
            body: body
         })
      }

      return response
   } catch (err) {
      return {err, response}
   }
}