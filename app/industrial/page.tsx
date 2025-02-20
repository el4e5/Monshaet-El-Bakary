import Image from "next/image";
import { IndustrialForm } from "@/components/pages/Industrial/industrial"



export default function Home() {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start sm:flex-row sm:justify-between">
        <IndustrialForm />
        
      </main>
    </div>
  );
}
