import React from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { header_content } from '@/utils/contentUtils';
import { MobileMenuComponents, PropsMobileMenu } from '@/utils/typesUtils';

export default function MobileMenu({ mobileMenu }: PropsMobileMenu) {
    return (
        <AnimatePresence>
            {
                mobileMenu && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1 }}
                        className='absolute z-20 w-full bg-bgBlack md:hidden'
                    >
                        <div className='flex flex-col divide-y-2 divide-customPurple text-center' >
                            {header_content &&
                                header_content.menu.map((item) => (
                                    <MobileMenuComponent key={item.title} title={item.title} active={item.active} />
                                ))}
                            <a href='#' className="flex text-xl justify-center items-center py-8 font-medium leading-9">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    transition={{ delay: 0.4 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1 }}
                                    className='cursor-pointer'
                                >
                                    {header_content.link.title}
                                </motion.div>
                            </a>
                        </div>
                    </motion.div>
                )
            };
        </AnimatePresence>
    );
}

function MobileMenuComponent({ title, active }: MobileMenuComponents) {
    return (
        <a href='#' className={`${active ? "text-customPurple" : "text-gray-600"} text-xl py-8 transition hover:text-customPurple`} key={title}>
            <motion.span
                initial={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                className='cursor-pointer'>{title}
            </motion.span>
        </a>
    );
}