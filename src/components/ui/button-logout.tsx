import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const ButtonLogout = () => {
	const handleLogout = async () => {
		try {
			await signOut(auth);
			alert("Berhasil logout");
		} catch (err) {
			console.error("Logout error", err);
			alert("Gagal logout.");
		}
	}

	return (
		<button onClick={handleLogout} className=" card-nav-cta-button hidden md:inline-flex border-0 text-white !bg-red-500 rounded-[calc(0.75rem-0.2rem)] px-4 h-full font-medium cursor-pointer transition-colors duration-300 items-center justify-center text-[15px] md:text-[16px] hover:opacity-75 order-3">
			Logout
		</button>
	)
}

export default ButtonLogout;