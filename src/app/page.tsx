"use client";

import { useState } from "react";
import { Form } from "./components/Form";
import cotizaciones from "./cotizaciones.json";

export default function Home() {
  const [amount, setAmount] = useState(0);
  return (
    <main className="grid gap-8">
      <section className="flex-1">
        <Form
          value={amount}
          onChange={(_amount: number) => setAmount(_amount)}
        />
      </section>
      <section className="bg-emerald-800 rounded-3xl flex-1 p-8 text-white">
        <ul className="flex flex-col gap-4">
          {Object.entries(cotizaciones).map(
            ([name, value]: [string, { compra: number; venta: number }]) => {
              const total = amount ? Number(amount / value.venta) : value.venta;

              return (
                <li
                  key={name}
                  className="flex gap-4 justify-between items-center"
                >
                  <div className="text-emerald-100">{name}</div>
                  <div className="flex items-center gap-4">
                    {amount ? (
                      <div className="text-emerald-500 text-xl font-bold">
                        {Number(total).toLocaleString("es-AR", {
                          style: "currency",
                          currency: "ARS",
                        })}
                      </div>
                    ) : null}
                    <div className="text-emerald-300 text-3xl font-bold">
                      {Number(value.venta).toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </div>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </section>
    </main>
  );
}
