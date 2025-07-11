import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Resume() {
  return (
    <main className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-2 md:gap-12">
        <div className="flex flex-col gap-8">
          <span className="font-medium text-lg">Professional Experiences</span>

          <div className="flex flex-col gap-6">
            {/* Opinly */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src="/opinlylogo.png"
                      alt="Opinly Logo"
                      width={48}
                      height={48}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex flex-col">
                      <h3 className="text-base font-medium">Opinly</h3>
                      <p className="text-sm text-low-contrast-text">
                        Senior Software Engineer
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-2xl text-xs font-medium border border-[#374151] text-yellow-800 dark:text-yellow-200">
                      📅 May 2025 — Present
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Hamilton Robson */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src="/hamrob.png"
                      alt="Hamilton Robson Logo"
                      width={48}
                      height={48}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex flex-col">
                      <h3 className="text-base font-medium">Hamilton Robson</h3>
                      <p className="text-sm text-low-contrast-text">
                        Software Engineer
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-2xl text-xs font-medium border border-[#374151] text-yellow-800 dark:text-yellow-200">
                      📅 Jul 2023 — May 2025
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Ulster University */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src="/ulsterUni.png"
                      alt="Ulster University Logo"
                      width={48}
                      height={48}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex flex-col">
                      <h3 className="text-base font-medium">
                        Ulster University
                      </h3>
                      <p className="text-sm text-low-contrast-text">
                        Web Developer (Placement)
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-2xl text-xs font-medium border border-[#374151] text-yellow-800 dark:text-yellow-200">
                      📅 May 2021 — May 2022
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
