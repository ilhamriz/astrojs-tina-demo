const ReactEditBlog = () => {
	return process.env.NODE_ENV === 'production' && (
		<a
			href={`http://localhost:4321/admin/index.html`}
			target='_blank'
			className='fixed bottom-5 right-5 z-50 flex w-[120px] border-2 border-gray-500 rounded-full items-center justify-center py-[2.5px] font-bold text-[12px] uppercase text-black bg-white shadow-2xl'
		>
			Edit in CMS
		</a>
	)
}

export default ReactEditBlog
