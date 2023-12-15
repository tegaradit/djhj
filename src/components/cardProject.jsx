const CardLooping = ({ item }) => {
   return (
      <div className="w-[24em] h-[9em] rounded-box bg-base-300">
         <img className="object-cover aspect-square h-full rounded-l-box float-left" src={item.thumnail} alt="" />
         
         <div className="overflow-hidden p-3 h-full relative">
            <h1 className="text-[1.15em] font-bold mb-2">{item.judul}</h1>
            <p className="text-[0.95em]">by {item.pembuat}</p>
            <p className="text-[0.95em]">{item.kelas}</p>
            <p className="text-base-content/70 text-[0.8em] text-right italic absolute bottom-3 right-3">{item.tanggalDibuat}</p>
         </div>
      </div>
   )
}

const CardProject = ({ data, className = '' }) => {
   return (
      <div className={className} style={{fontSize: 'clamp(14px, 1.5vw, 16px)'}}>
         {data.map(item => <CardLooping item={item} key={item.id} />)}
      </div>
   )
}
export default CardProject