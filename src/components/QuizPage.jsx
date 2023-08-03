import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://xuolctxxojjlgcsvjsfk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1b2xjdHh4b2pqbGdjc3Zqc2ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2Nzk4MTMsImV4cCI6MjAwNjI1NTgxM30.ZoEkwe-DaX1j_RmLcEQYDgWHCp2JA1vbQGzSSbDmh50");

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("users").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;