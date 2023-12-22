import useCache from "../hooks/useCache"
import useFetch from "../hooks/useFetch"

/**
 * 
 * @param {string} url 
 * @param {string} cacheName
 * @returns 
 */
const loaderApi = async (url, cacheName) => {
   const cache = useCache()

   if (!cache.getCache(cacheName)) {
      try {
         const { result } = await useFetch(url)
         cache.setCache(cacheName, result)
      } catch (err) {
         return new Error(err)
      }
   }

   return cache.getCache(cacheName)
}

export default loaderApi