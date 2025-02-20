import * as React from "react"

import Image from 'next/image';
import { Filter } from './tempFilter';

export function IndustrialForm() {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col sm:flex-row items-center justify-center h-full w-full">
        <div className="flex flex-col items-center sm:items-start justify-center w-full sm:w-1/2">
          <Image
            src="/svg/undraw_checking-boxes_j0im.svg"
            alt="engineers"
            width={600}
            height={600}
            priority
            className="w-full max-w-xl pl-20 hidden sm:block"
          />
      
        </div>
        <div>
          <Filter />
        </div>
      </div>
    </section>
  )
}

