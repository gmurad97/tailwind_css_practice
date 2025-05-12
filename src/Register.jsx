import "./index.css";

const Register = () => {
	return (
		<div className="flex flex-col items-center justify-center bg-amber-300 h-[100vh]">
			<div className="flex flex-col items-center bg-green-400 border-2 border-black rounded-2xl p-5 ">
				<h1 className="text-3xl mb-2">Register</h1>
				<div className="flex flex-col">
					<label htmlFor="">First Name</label>
					<input className="border-2 border-blue-600 rounded-2xl px-2" type="text" />
				</div>
				<div className="flex flex-col">
					<label htmlFor="">Last Name</label>
					<input className="border-2 border-blue-600 rounded-2xl px-2" type="text" />
				</div>
				<div className="flex flex-col">
					<label htmlFor="">Username</label>
					<input className="border-2 border-blue-600 rounded-2xl px-2" type="text" />
				</div>
				<div className="flex flex-col">
					<label htmlFor="">Username</label>
					<input className="border-2 border-blue-600 rounded-2xl px-2" type="text" />
				</div>
			</div>
		</div>
	);
};

export default Register;