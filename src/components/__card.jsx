export default function ({ datas=[], image }) {
	return (
		<div className="">
			<div className="avatar">
				<div className="w-52 rounded-full">
					<img src={image} />
				</div>
			</div>
         {
            datas.forEach((key, val) => {
               return `${key} : ${val}`
            })
         }
		</div>
	)
}