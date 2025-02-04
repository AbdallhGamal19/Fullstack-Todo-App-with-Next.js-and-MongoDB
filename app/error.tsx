"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="fixed inset-0 flex items-center justify-center p-5 w-full">
          <div className="text-center">
            <div className="inline-flex rounded-full bg-red-100 p-4">
              <div className="rounded-full stroke-red-600 bg-red-200 p-4">
                <svg
                  className="w-16 h-16"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 8H6.01M16 16H6.01M6 12H18C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4H6C3.79086 4 2 5.79086 2 8C2 10.2091 3.79086 12 6 12ZM17 16L22 21M22 16L17 21"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M17 16L22 21M22 16L17 21"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className=" mt-3 space-y-3">
              <h1>Something Went Wrong</h1>
              <p>
                Oops somethin went wrong.Try to refresh this page or <br /> feel
                free to contact us if this problem presists
              </p>
              <Button onClick={() => reset()}>Try again</Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
