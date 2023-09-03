"use client"

import { barlow } from "@/app/fonts"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import React, { useRef } from "react"

export default function Experience() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleMouseEnter = () => {
    videoRef.current!.play()
  }

  const handleMouseLeave = () => {
    videoRef.current!.pause()
    videoRef.current!.currentTime = 0
  }

  return (
    <div>
      <div
        className={
          "mt-4 max-w-[96rem] mx-auto py-4 px-4 sm:px-8 " + barlow.className
        }
      >
        <p className="uppercase italic text-4xl">Recent Projects</p>
      </div>
      <div className="flex flex-col lg:grid grid-cols-3 w-full lg:h-[28rem] gap-8 py-4 px-4 sm:px-8">
        <div className="relative aspect-square lg:aspect-auto">
          <Image
            src="/images/underdev.png"
            fill
            alt="afifcodes"
            sizes="auto"
            className="object-cover"
          />
          <Button>NxUI</Button>
        </div>
        <div
          className="relative aspect-square lg:aspect-auto cursor-pointer"
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/images/underdev.png"
            fill
            alt="afifcodes"
            sizes="auto"
            className="object-cover"
          />
          {/* <video
            muted
            loop
            playsInline
            ref={videoRef}
            className="object-cover h-full w-full"
          >
            <source src="/videos/unvolds-mobile.mp4" type="video/mp4" />
          </video> */}
          <Button>Unvolds</Button>
        </div>
        <div className="relative aspect-square lg:aspect-auto">
          <Image
            src="/images/lenjhelenan.png"
            fill
            alt="afifcodes"
            sizes="auto"
            className="object-cover"
          />
          <Button>Lenjhelenan</Button>
        </div>
      </div>
    </div>
  )
}

interface ButtonInterface {
  children: React.ReactNode
}

const Button = ({ children }: ButtonInterface) => {
  return (
    <div className="uppercase text-sm absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end p-8">
      <Link
        href="#"
        className="transition-all px-4 py-2.5 bg-neutral-900 text-white flex items-center justify-center gap-4 hover:gap-6 relative"
      >
        <div className="absolute left-0.5 top-0.5 w-full h-full border border-neutral-900" />
        <span>{children}</span>
        <IconArrowNarrowRight className="h-6 w-6" />
      </Link>
    </div>
  )
}
