import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

export default function ({ data }) {
	// console.log(data)
	const avatarControls = useAnimationControls()
	const [justify, setjustify] = useState('start')
	const [direction, setdirection] = useState('start')

	const [showDetails, setShowDetails] = useState(false)

	return (
		<motion.div
			initial={{
				width: '24rem',
				height: '8rem'
			}}

			style={{
				justifyContent: justify,
				flexDirection: direction
			}}

			whileHover={{
				height: '25rem',
			}}

			onMouseOver={() => {
				setjustify('center')
				setdirection('column')
				avatarControls.start('grow')
				setShowDetails(true)
			}}
			onMouseLeave={() => {
				setjustify('start')
				setdirection('row')
				avatarControls.start('shrink')
				setShowDetails(false)
			}}
			className="grid grid-cols-6 items-center p-4 rounded-xl shadow-md bg-gradient-to-br from-transparent to-black/5 gap-4 mt-8"
		>
			<div className="col-span-2 col-end-3 avatar">
				<motion.div
					layout
					initial={{width: '5rem'}}

					variants={{
						shrink: {
							width: '5rem'
						},
						grow: {
							width: '8rem'
						}
					}}
					animate={avatarControls}

					className="rounded-full"
				>
					<img src={data.foto_profil} />
				</motion.div>
			</div>
			<motion.div layout className="col-start-3 col-end-7">
				<h2>{data.nama}</h2>
				<p className="text-black/50 text-sm">{data.jabatan}</p>
			</motion.div>

			<AnimatePresence>
				{showDetails && <motion.div
					initial={{
						y: -20,
						opacity: 0
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					exit={{
						y: -20,
						opacity: 0,
					}}
					transition={{
						duration: 0.3,
						ease: 'easeInOut'
					}}

					className="flex col-start-1 col-end-7"
				>
					<ul>
						<li>mapel</li>
						<li>alamat</li>
						<li>hoby</li>
						<li>motto hidup</li>
						<li>sosmed</li>
					</ul>
					<ul>
						<li> : {data.mapel}</li>
						<li> : {data.alamat}</li>
						<li> : {data.hoby}</li>
						<li> : {data.motto_hidup}</li>
						<li> : {data.sosmed}</li>
					</ul>
				</motion.div>}
			</AnimatePresence>
		</motion.div>
	)	
}
