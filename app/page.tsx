// app/page.tsx
'use client';  // Esto marca el componente como un componente del cliente

import supabase from '@/lib/supabaseClient';  // Importa la instancia de supabase
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [waterLevel, setWaterLevel] = useState<number | null>(null);

  useEffect(() => {
    const fetchWaterLevel = async () => {
      const { data, error } = await supabase
        .from('lecturas_sensor')
        .select('nivel')
        .order('created_at', { ascending: false })
        .limit(1);

      if (error) console.error('Error fetching data:', error);
      else if (data && data.length > 0) setWaterLevel(data[0].nivel);
    };

    fetchWaterLevel();
  }, []);

  return (
    <div>
      <h1>Nivel de Agua</h1>
      {waterLevel !== null ? (
        <p>El nivel de agua actual es: {waterLevel}</p>
      ) : (
        <p>Cargando nivel de agua...</p>
      )}
    </div>
  );
}
