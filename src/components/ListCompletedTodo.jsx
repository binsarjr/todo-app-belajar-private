export default function ListCompletedTodo() {
	return (
		<div className="w-full">
			<p className="text-center text-2xl mb-4"> Completed</p>
			<div className="flex gap-3 border px-4 py-2 border-gray-500 rounded items-center group">
				<div>
					<div className="size-5 border-2 border-white rounded-full group-hover:bg-white"></div>
				</div>
				<div className="grow">tengah</div>
				<div>
					<button className="btn btn-sm btn-error invisible group-hover:visible">
						Hapus
					</button>
				</div>
			</div>
		</div>
	);
}
