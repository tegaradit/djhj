import useCache from "../hooks/useCache"
import useFetch from "../hooks/useFetch"

/**
 * 
 * @param {string} url 
 * @param {string} cacheName
 * @returns {Function}
 */
const loaderApi = (url, cacheName) => {
   return async () => {
      const cache = useCache()
   
      if (!cache.getCache(cacheName)) {
         try {
            const { result } = await useFetch(url)
            // console.log('api call')
            cache.setCache(cacheName, result)
            return result
         } catch (err) {
            return new Error(err)
         }
      } else {
         return Promise.resolve(cache.getCache(cacheName))
      }
   }
}

export default loaderApi