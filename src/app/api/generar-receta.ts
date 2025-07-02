export async function generarReceta(ingredientes: string) {
  const res = await fetch("http://localhost:5000/receta", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredientes }),
  });

  if (!res.ok) throw new Error("No se pudo generar la receta");

  const data = await res.json();
  return data.receta;
}
