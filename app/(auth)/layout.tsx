import React, { ReactNode } from "react";
import Image from "next/image";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-3">
            <Image src="/icons/logo.svg" alt="logo" width={37} height={37} />
            <h1 className="text-2xl font-semibold text-white">BookSage</h1>
          </div>
          <div>
            {children}
          </div>
        </div>
      </section>

      <section className="auth-illustration">

      </section>
    </main>
  );
};

export default layout;
