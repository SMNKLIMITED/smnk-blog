"use client";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href={"/"} className="text-3xl">
              <span className="text-blue-600">S</span>MNK
            </Link>
            <p className="max-w-xs mt-4 text-sm">
              We Connect, You Collect
            </p>
            <div className="flex mt-8 space-x-6">
              <Link
                href=""
                target="_blank"
              >
                <FacebookOutlinedIcon className="hover:text-blue-600 hover:-translate-y-1 transition-all" />
              </Link>
              
              <Link
                href=""
                target="_blank"
              >
                <LinkedInIcon className="hover:text-blue-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link href="" target="_blank">
                <TwitterIcon className="hover:text-blue-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link
                href=""
                target="_blank"
              >
                <InstagramIcon className="hover:text-blue-600 hover:-translate-y-1 transition-all" />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  href="https://www.smnklimited.com/about-us"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  About
                </Link>
                <Link
                  href="https://www.smnklimited.com/vision"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Our Vision
                </Link>
                <Link
                  href="https://www.smnklimited.com/mission"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Our Mission
                </Link>
                <Link
                  href="https://www.smnklimited.com/team"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Our Team
                </Link>
              </nav>
            </div>
            
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Contact
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  FAQs
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Live Chat
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Terms &amp; Conditions
                </Link>
                
               
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs">© 2023 SMNK  All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
