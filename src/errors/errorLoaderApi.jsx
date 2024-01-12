const ErrorLoaderApi = ({childern, fallback, data}) => {
   if (data == null | data == undefined | data instanceof Error)
      return fallback

	return childern(data)
}

export default ErrorLoaderApi