export default function FormAddTodo() {
	return (
		<>
			<label className="input w-full h-14">
				Tambah Task
				<input
					type="text"
					className="grow "
					placeholder="Coba tulis 'Buat Kopi'"
				/>
				{/* <span className="badge badge-neutral badge-xs">Optional</span> */}
			</label>
		</>
	);
}
