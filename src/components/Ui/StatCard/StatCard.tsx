import type React from "react";

interface StatCardProps{
    title:string;
    value?:string;
    icon:React.ReactNode;
    iconClassName?:string;
}

function StatCard({
    title,
    value = "--",
    icon,
    iconClassName = "bg-blue-100 text-primary",
  }: StatCardProps) {

    return (
        

        <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
            {/* İstatistik Kartları */}
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-secondary">
                        {title}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-text">
                        {value}
                    </p>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-full text-xl ${iconClassName}`}>
                    {icon}
                </div>
            </div>
            <div className="mt-4 text-xs text-secondary">
                Veriler Gelicek
            </div>
        </div>

    )

  }

export default StatCard