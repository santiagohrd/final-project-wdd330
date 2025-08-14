const API_URL = "https://mocki.io/v1/7d8ce78a-042b-465e-9c65-32962bc01a66";

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
