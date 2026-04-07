import Link from "next/link";
import Typography from "../../components/common/Typography";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-10 md:p-20 flex items-center justify-center">
      <div className="max-w-xl w-full space-y-12 text-center">
        <Typography variant="h1" className="text-6xl md:text-7xl font-berkshire mb-4">
          Root Beverages
        </Typography>
        
        <div className="bg-slate-50/50 backdrop-blur-sm rounded-[2rem] p-10 md:p-14 border border-slate-100 shadow-xl shadow-slate-200/50">
          <Typography variant="h2" className="text-3xl mb-6">
            Design & Components
          </Typography>
          <Typography variant="body" className="text-slate-500 mb-10 leading-relaxed">
            A premium collection of high-craft components and typography rules. 
            Experience our visual language and structural elements in action.
          </Typography>
          
          <Link 
            href="/components" 
            className="inline-flex items-center justify-center px-10 py-4 bg-black text-white rounded-full font-semibold transition-all duration-300 hover:bg-slate-800 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0"
          >
            Explore Showcase
          </Link>
        </div>

        <div className="pt-8">
          <Typography variant="label" className="text-slate-400 tracking-widest uppercase text-[10px]">
            Google Deepmind &times; Root Beverages
          </Typography>
        </div>
      </div>
    </main>
  );
}
