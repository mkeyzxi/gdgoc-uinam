// src/pages/AddActivityPage.tsx
import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/lib/useAuth";
import {  useNavigate } from "react-router-dom";
import { useNavItems } from "@/lib/data/items";
import logo from "../assets/icon-GDG.svg";

import CardNav from "@/components/CardNav";

interface Activity {
  id: string;
  label: string;
  href: string;
  ariaLabel: string;
}

export default function AddActivityPage() {
  const { user } = useAuth();
  const nav = useNavigate();
  const itemsNav = useNavItems();

  const [label, setLabel] = useState("");
  const [href, setHref] = useState("");
  const [ariaLabel, setAriaLabel] = useState("");
  const [saving, setSaving] = useState(false);

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
    const ok = confirm("Yakin ingin menghapus kegiatan ini?");
    if (!ok) return;

    try {
      await deleteDoc(doc(db, "activities", id));
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus data.");
    }
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!label || !href) return alert("Label dan URL wajib diisi.");

    try {
      setSaving(true);
      await addDoc(collection(db, "activities"), {
        label,
        href,
        ariaLabel: ariaLabel || label,
        createdAt: serverTimestamp(),
        uid: user?.uid,
      });

      setLabel("");
      setHref("");
      setAriaLabel("");

      nav("/");
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan data.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="">
      {/* Navbar */}
      <CardNav
        logo={logo}
        logoAlt="GDG ON UIN Alauddin Makassar"
        items={itemsNav}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        className="fixed top-0 w-full z-50 px-4"
      ><button onClick={() => nav('/')} className=" card-nav-cta-button hidden md:inline-flex border-0 text-white !bg-blue-500 rounded-[calc(0.75rem-0.2rem)] px-4 h-full font-medium cursor-pointer transition-colors duration-300 items-center justify-center text-[15px] md:text-[16px] hover:opacity-75 order-3">
			Beranda
		</button></CardNav>

      <div className="max-w-3xl mx-auto pt-32 px-6 pb-20">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Manajemen Kegiatan
          </h1>
        </div>

        {/* LIST KEGIATAN */}
        <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-200 mb-10">
          <h2 className="text-xl font-semibold mb-4">Daftar Kegiatan</h2>

          {items.length === 0 && (
            <p className="text-gray-500 text-sm">Belum ada kegiatan ditambahkan.</p>
          )}

          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="p-4 rounded-lg bg-gray-50 border flex justify-between items-start hover:bg-gray-100 transition"
              >
                <div className="flex flex-col gap-1 max-w-[65%]">
                  <p className="font-semibold text-gray-800">{item.label}</p>

                  <p className="text-sm text-blue-600 underline line-clamp-2">
                    {/* {item.href.length > 45 ? item.href.slice(0, 45) + "..." : item.href} */}
                    {item.href}
                  </p>
                </div>

                <button
                  onClick={() => deleteItem(item.id)}
                  className="px-3 py-1.5 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>

        </div>

        {/* FORM TAMBAH */}
        <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-6">Tambah Kegiatan Baru</h2>

          <form className="space-y-4" onSubmit={save}>
            <div>
              <label className="block text-sm font-medium mb-1">
                Label Kegiatan
              </label>
              <input
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Contoh: Workshop AI"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                URL Kegiatan
              </label>
              <input
                value={href}
                onChange={(e) => setHref(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="https://example.com/event"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Deskripsi (opsional)
              </label>
              <input
                value={ariaLabel}
                onChange={(e) => setAriaLabel(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Contoh: Workshop AI - GDGOC"
              />
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
            >
              {saving ? "Menyimpan..." : "Simpan Kegiatan"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
