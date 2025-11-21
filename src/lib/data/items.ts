// src/lib/data/items.ts
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { ABOUT_CARD, CONTACT_CARD } from "./staticItems";
import type { CardNavItem } from "@/components/CardNav";

// struktur data Firestore
export interface ActivityLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export const useNavItems = (): CardNavItem[] => {
  const [activities, setActivities] = useState<ActivityLink[]>([]);

  useEffect(() => {
    const q = query(collection(db, "activities"), orderBy("createdAt", "desc"));

    const unsub = onSnapshot(q, (snap) => {
      const arr: ActivityLink[] = snap.docs.map((d) => ({
        label: d.data().label,
        href: d.data().href,
        ariaLabel: d.data().ariaLabel || d.data().label,
      }));
      setActivities(arr);
    });

    return () => unsub();
  }, []);

  const ACTIVITY_CARD: CardNavItem = {
    label: "Kegiatan",
    bgColor: "#3B82F6",
    textColor: "#fff",
    links: activities,
  };

  return [ABOUT_CARD, ACTIVITY_CARD, CONTACT_CARD];
};
