
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
// Temporary: keep precompiled CSS while migrating, then remove
import "./index.css";
// Tailwind v4 entry + project tokens
import "./tailwind.css";
import "./styles/globals.css";

  createRoot(document.getElementById("root")!).render(<App />);
  
