// app/page.tsx

import { createClient } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';

const supabase = createClient();

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
