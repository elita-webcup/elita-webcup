import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {cn} from "@/lib/utils/cn";
import {IMission} from "@/data/mission";

export const HoverEffect = ({
                                items,
                                className,
                            }: {
    items: IMission[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href={`/mission/${item?.id}`}
                    key={item?.id}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card props={item.status}>
                        <CardTitle>{item.designation}</CardTitle>
                        <CardDescription>{`${item.description} ${item.ressource}`}</CardDescription>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
                         className,
                         children,
                        props
                     }: {
    className?: string;
    children: React.ReactNode;
    props: string
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >

            <div className="relative z-50">
                <div className="flex flex-end px-4 absolute right-0">
                    {
                        props === "Planifiée" && (
                            <p className="text-white bg-[#C0B7E8] rounded-full px-2 py-1">
                                {props}
                            </p>
                        )
                    }
                    {
                        props === "En cours" && (
                            <p className="text-white bg-[#E8C6B7] rounded-full px-2 py-1">
                                {props}
                            </p>
                        )
                    }
                    {
                        props === "Terminée" && (
                            <p className= "text-white bg-[#C1E8B7] rounded-full px-2 py-1">
                            {props}
                        </p>
                    )
                }
                </div>

                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
                              className,
                              children,
                          }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
                                    className,
                                    children,
                                }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
