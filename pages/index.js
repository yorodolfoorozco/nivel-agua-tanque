import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Home() {
  const [nivelAgua, setNivelAgua] = useState(null);

  useEffect(() => {
    const fetchNivelAgua = async () => {
      // Consulta para obtener el último nivel de agua registrado
      const { data, error } = await supabase
        .from('lecturas_sensor')
        .select('nivel')
        .order('created_at', { ascending: false })
        .limit(1);

      if (error) {
        console.error('Error al obtener el nivel de agua:', error);
      } else if (data.length > 0) {
        setNivelAgua(data[0].nivel);
      }
    };

    fetchNivelAgua();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Nivel de Agua en el Tanque</h1>
      {nivelAgua !== null ? (
        <p>El nivel actual de agua es: {nivelAgua} %</p>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
