const API_URL = "https://mocki.io/v1/8b7f80d6-ce5c-42c2-a1da-0cbd4ec506d6";

export async function obtenerAlojamientos() {
  try {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) throw new Error("Error al obtener los datos");
    const datos = await respuesta.json();
    return datos.data || datos;
  } catch (error) {
    console.error("Error al obtener alojamientos:", error);
    return [];
  }
}
