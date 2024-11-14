import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// Configuración de Supabase
const supabaseUrl = 'https://hezpvzttzrefafnyolhi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlenB2enR0enJlZmFmbnlvbGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExMDM1NjgsImV4cCI6MjA0NjY3OTU2OH0.8JydsFX6mXuoYI1uXwcfhqq5U0VZwA_-NY6YZP7fRXg';

// Crear instancia del cliente de Supabase
const supabase = createSupabaseClient(supabaseUrl, supabaseAnonKey);

// Exporta la instancia creada
export default supabase;
