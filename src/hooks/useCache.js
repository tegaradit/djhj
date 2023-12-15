const __caches = {}

const useCache = () => {
   return {
      getCache: (key) => {
         return __caches[key]
      },

      setCache: (key, val) => {
         __caches[key] = val
      },

      deleteCache: (key) => {
         delete __caches[key]
      }
   }
}

export default useCache