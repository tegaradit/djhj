const ErrorFetching = ({children, fallback, data}) => {
   if (data == null | data == undefined | data instanceof Error)
      return fallback

	return children(data)
}

export default ErrorFetching