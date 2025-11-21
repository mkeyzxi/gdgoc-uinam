/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/lib/useAuth";

interface Activity {
	id: string;
	label: string;
	href: string;
	ariaLabel: string;
}

export default function ActivityListPage() {
	const { user } = useAuth();
	const [items, setItems] = useState<Activity[]>([]);

	useEffect(() => {
		const q = query(collection(db, "activities"), orderBy("createdAt", "desc"));

		const unsub = onSnapshot(q, (snap) => {
			setItems(
				snap.docs.map((d) => ({
					id: d.id,
					label: d.data().label,
					href: d.data().href,
					ariaLabel: d.data().ariaLabel || d.data().label,
				}))
			);
		});

		return () => unsub();
	}, []);

	const deleteItem = async (id: string) => {
		const yes = confirm("Yakin ingin menghapus kegiatan ini?");
		if (!yes) return;

		try {
			await deleteDoc(doc(db, "activities", id));
			alert("Berhasil dihapus ✨");
		} catch (err) {
			console.error("Delete error", err);
			alert("Gagal menghapus data.");
		}
	};

	return (
		<div className="max-w-xl mx-auto p-6">
			<h2 className="text-2xl font-semibold mb-4">Daftar Kegiatan</h2>

			<ul className="space-y-4">
				{items.map((item) => (
					<li key={item.id} className="p-4 rounded border flex justify-between items-center">
						<div>
							<p className="font-semibold">{item.label}</p>
							<p className="text-sm text-gray-600">{item.href}</p>
						</div>

						<button
							onClick={() => deleteItem(item.id)}
							className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
						>
							Hapus
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
