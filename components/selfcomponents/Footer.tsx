import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { PinContainer } from "@/components/ui/3d-pin";


const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-mono text-2xl font-bold text-white mb-4">HACK TO THE HIVE</h3>
            <p className="text-white/60 font-sans pb-4">
              Join us in building the future of Web3 technology and decentralized innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* location */}
          <div className="flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
          
          <div>
            <h4 className="font-mono text-lg font-bold text-white mb-4">Connect With Us</h4>
            <h5>test@gmail.com</h5>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 font-sans">© 2024 Hack to the Hive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;