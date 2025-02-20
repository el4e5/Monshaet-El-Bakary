import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Link from "next/link"


const Hero: React.FC = () => {
    return (

        <section className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-center h-full w-full rtl">
                <div className="flex flex-col items-center sm:items-start justify-center w-full sm:w-1/2">
                    <h1 className="text-center sm:text-right font-[family-name:var(--font-geist-mono)] text-2xl sm:text-4xl" style={{ fontFamily: 'Aref Ruqaa' }}>
                        أفضل
                        <span className="text-primary"> الصنايعية  </span>
                        في  منشأة البكاري
                    </h1>
                    <p className="text-xs sm:text-sm text-center sm:text-right">
                    </p>
                    <div className="flex gap-2 sm:gap-4 items-center sm:flex-row pt-6 sm:pt-10">
                        <Button variant="default" className="w-full sm:w-auto">
                            <Link href="/industrial">ابحث الآن</Link>
                        </Button>
                        <Button variant="ghost" className="w-full sm:w-auto">
                            <Link href="/signup">سجل الآن</Link>
                        </Button>
                    </div>
                </div>
                <Image
                    src="/svg/undraw_qa-engineers_kgp8.svg"
                    alt="engineers"
                    width={600}
                    height={600}
                    priority
                    className="w-full max-w-xl sm:w-1/2"
                />
            </div>
        </section>

    );
};

export default Hero;
