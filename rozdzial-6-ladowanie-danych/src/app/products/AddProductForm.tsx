"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

export function AddProductForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price || !category) return;

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          price: Number(price),
          category,
        }),
      });

      if (res.ok) {
        setStatusMessage("Produkt został pomyślnie wysłany!");
        setTitle("");
        setPrice("");
        setCategory("");
      } else {
        setStatusMessage("Wystąpił błąd podczas wysyłania.");
      }
    } catch {
      setStatusMessage("Wystąpił błąd sieciowy.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full mb-8 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Dodaj nowy produkt</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input
              type="text"
              placeholder="Tytuł produktu"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Input
              type="number"
              placeholder="Cena"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Kategoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center gap-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Wysyłanie..." : "Dodaj produkt"}
            </Button>
            {statusMessage && (
              <p
                className={`text-sm ${
                  statusMessage.includes("pomyślnie")
                    ? "text-emerald-600 font-medium"
                    : "text-destructive"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}