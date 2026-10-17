import Link from 'next/link';

import LogoSquare from 'components/logo-square';

const { COMPANY_NAME, SITE_NAME } = process.env;
const storeName = SITE_NAME || 'Spin The Lighter';

export default async function Footer() {
  const copyrightName = COMPANY_NAME || storeName;

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <Link className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
            <LogoSquare size="sm" />
            <span className="uppercase">{storeName}</span>
          </Link>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/pages/privacy-policy" className="hover:text-black dark:hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/pages/terms-of-service" className="hover:text-black dark:hover:text-white">
              Terms of Service
            </Link>
            <Link href="/pages/returns-faq" className="hover:text-black dark:hover:text-white">
              Returns & FAQ
            </Link>
            <Link href="/pages/contact" className="hover:text-black dark:hover:text-white">
              Contact
            </Link>
          </div>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p className="md:ml-auto">
            <a href="https://fourthwall.com" className="text-black dark:text-white">
              Checkout powered by Fourthwall
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {new Date().getFullYear()} {copyrightName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
