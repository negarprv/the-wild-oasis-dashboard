import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wcyoghsxvqdkdobbhpad.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjeW9naHN4dnFka2RvYmJocGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzNzg5ODgsImV4cCI6MjAwNzk1NDk4OH0.TA0dKx94ucrrlluIA4Zgsq5Nnz7z2SBIoR7gLUPynNs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
