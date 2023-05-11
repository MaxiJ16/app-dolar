"use client";

import React from "react";

export function Form({ value, onChange }: { value: number; onChange: (amount: number) => void }) {
  return (
    <form className="w-full">
      <label className="block space-y-3 text-lg">
        <span>Monto en ARS:</span>
        <input
          className="p-2 text-right text-2xl block rounded-full bg-gray-200 w-full"
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </label>
    </form>
  );
}
