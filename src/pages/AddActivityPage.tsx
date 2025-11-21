// src/pages/AddActivityPage.tsx
import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/lib/useAuth";
import { useNavigate } from "react-router-dom";

export default function AddActivityPage() {
  const { user } = useAuth();
  const [label, setLabel] = useState("");
  const [href, setHref] = useState("");
  const [ariaLabel, setAriaLabel] = useState("");
  const [saving, setSaving] = useState(false);
  const nav = useNavigate();

  const save = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!label || !href) return alert("Label dan URL wajib diisi.");

    try {
      setSaving(true);
      await addDoc(collection(db, "activities"), {
        label,
        href,
        ariaLabel: ariaLabel || label,
        createdAt: serverTimestamp(),
        uid: user?.uid || null,
      });
      setLabel("");
      setHref("");
      setAriaLabel("");
      setSaving(false);
      // opsional: kembali ke home
      nav("/");
    } catch (err) {
      console.error("save activity error", err);
      setSaving(false);
      alert("Gagal menyimpan kegiatan.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Tambah Kegiatan</h2>
      <form onSubmit={save} className="flex flex-col gap-3">
        <label>
          <div className="text-sm font-medium">Label Kegiatan</div>
          <input value={label} onChange={(e) => setLabel(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Contoh: Workshop AI" />
        </label>

        <label>
          <div className="text-sm font-medium">URL Kegiatan</div>
          <input value={href} onChange={(e) => setHref(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="https://example.com/event" />
        </label>

        <label>
          <div className="text-sm font-medium">Aria Label (opsional)</div>
          <input value={ariaLabel} onChange={(e) => setAriaLabel(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Contoh: Workshop AI - GDGOC" />
        </label>

        <div className="flex gap-2">
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded" disabled={saving}>
            {saving ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </form>
    </div>
  );
}
