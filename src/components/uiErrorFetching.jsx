const UiErrorFetching = () => {
   return (
      <div className="text-center mt-10">
         <h1 className="text-3xl font-bold text-red-500 mb-6">Error X_X</h1>
         <p>Gagal memuat data, coba untuk...</p>
         <a href="javascript:window.location.reload()" className="mt-4 min-h-0 h-8 btn btn-ghost btn-outline">muat ulang</a>
      </div>
   )
}

export default UiErrorFetching