import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oroslwwauphylmxvvwca.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yb3Nsd3dhdXBoeWxteHZ2d2NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1NzE0MTIsImV4cCI6MjA0MDE0NzQxMn0.kxuR8pEatYyT6uVrAcbBk9roL4E2K0wheyQoiB0xbx4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
