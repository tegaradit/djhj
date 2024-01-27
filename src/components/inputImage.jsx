import { useRef, useState } from "react";

const InputImage = ({ stateSetter, className, fallbackImagePreview = null, name, text }) => {
	const dataTransfer = new DataTransfer()

   const inputRef = useRef()
   const [previewImg, setPreviewImg] = useState(fallbackImagePreview ? true : false)
   const upload = files => {
      if (stateSetter) stateSetter(files[0])
      setPreviewImg(files[0])
   }

   // Input manual
   const handleButtonClick = () => inputRef.current.click()

   // Input drag'n drop
   const [dragging, setDragging] = useState(false);
   const handleDragEnter = (e) => {
         e.preventDefault();
         setDragging(true);
   };
   const handleDragLeave = () => setDragging(false)
   const handleDragOver = (e) => e.preventDefault()
   const handleDrop = (e) => {
         e.preventDefault();
         setDragging(false);
         const files = [...e.dataTransfer.files];

			const file = new File([files[0]], "image")
			dataTransfer.items.add(file)
			inputRef.current.files = dataTransfer.files
         
			upload(files);
   };

	return (
		<div
			className={`${dragging ? "border" : ""} relative group overflow-hidden text-center cursor-pointer ` + className}
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
			onDragOver={handleDragOver}
			onDrop={handleDrop}
			onClick={handleButtonClick}
		>
			{dragging ? (
				<span>Jatuhkan Gambar</span>
			) : (
				<span className={previewImg && `group-hover:inline hidden`}>{text}</span>
			)}

			<input
				onChange={(e) => upload(e.target.files)}
				ref={inputRef}
				className="w-full px-2 py-1 rounded-lg"
				accept=".jpg,.jpeg,.png,.webp"
				required
				type="file"
				hidden
				name={name || ""}
			/>
			{previewImg ? (
				<img
					className={`${dragging ? "opacity-10" : "opacity-100"} w-full h-full object-cover absolute top-0 group-hover:opacity-10 transition-opacity duration-300`}
					src={previewImg instanceof Blob ? URL.createObjectURL(previewImg) : fallbackImagePreview}
				/>
			) : ""}
		</div>
	);
};

export default InputImage;
