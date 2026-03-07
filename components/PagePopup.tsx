// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function PagePopup() {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setOpen(true);
//     }, 500);
//   }, []);

//   if (!open) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
//       onClick={() => setOpen(false)}
//     >
//       <div
//         className="relative w-[90%] max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={() => setOpen(false)}
//           className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow"
//         >
//           ✕
//         </button>

//         <Image
//           src="/images/mastermind_2026.png"
//           alt="Popup"
//           width={800}
//           height={600}
//           priority
//           className="w-full h-auto"
//         />
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PagePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-[90%] max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
        >
          ✕
        </button>

        <Image
          src="/images/mastermind_2026.png"
          alt="SVKM Mastermind 2026"
          width={800}
          height={600}
          priority
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}