import ButtonLink from "components/ButtonLink/ButtonLink";
import Link from "next/link";
import React from "react";

// Funktion zur Umwandlung einer flachen Liste in eine verschachtelte Menüstruktur
const buildMenuTree = (menuItems) => {
  const menuMap = new Map();
  const rootMenu = [];

  // Menü-Objekte in Map speichern
  menuItems.forEach((item) => menuMap.set(item.id, { ...item, children: [] }));

  // Eltern-Kind-Struktur aufbauen
  menuItems.forEach((item) => {
    if (item.parentId) {
      menuMap.get(item.parentId)?.children.push(menuMap.get(item.id));
    } else {
      rootMenu.push(menuMap.get(item.id));
    }
  });

  return rootMenu;
};

export const MainMenu = ({ items }) => {
  const menu = buildMenuTree(items); // Menüstruktur aufbauen

  return (
    <div className="bg-slate-800 text-white px-5 h-16 sticky top-0 z-50 flex justify-between items-center">
      {/* Logo */}
      <div className="py-4 pl-5 text-2xl font-bold text-pink-300">
        <Link href="/"> Homes </Link>
      </div>

      {/* Navigation */}
      <div className="flex gap-8 items-center">
        {menu.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
        <div>
          {" "}
          <ButtonLink destination={"/"} label={"asd"} />{" "}
        </div>
      </div>
    </div>
  );
};

// Einzelnes Menü-Item mit rekursiver Darstellung von Untermenüs
const MenuItem = ({ item }) => {
  return (
    <div className="relative group">
      <Link
        href={item.url}
        className="hover:bg-pink-300 px-4 py-5 rounded-md cursor-pointer inline-block"
      >
        {item.label}
      </Link>

      {/* Dropdown-Menü für Unterpunkte */}
      {item.children.length > 0 && (
        <div className="absolute left-0  mt-[-1px] bg-slate-800 shadow-lg rounded-md hidden group-hover:flex flex-col w-[200%] hover:bg-pink-300">
          {item.children.map((child) => (
            <MenuItem className="px-10" key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};
