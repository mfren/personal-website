import { Dialog, Transition } from "@headlessui/react";
import { Fragment, PropsWithChildren, useState } from "react"
import { SKILLS, Skill, SkillType } from "@/content/skills";
import { HomePageSection } from "@/components/HomePageSection";

function SkillModal(props: PropsWithChildren<{ showModal: boolean, setShowModal: (showModal: boolean) => void, skill: Skill }>) {
    return (
        <Transition appear show={props.showModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => props.setShowModal(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-homepage-light p-6 text-left align-middle shadow-xl transition-all">
                                <div className="flex flex-row flex-nowrap justify-start items-center gap-2">
                                    <i className={`${props.skill.logoFont} colored`} />
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-homepage-light"
                                    >
                                        {props.skill.name}
                                    </Dialog.Title>
                                    <button
                                        type="button"
                                        className="ml-auto bg-none rounded-md text-homepage-light hover:text-gray-500 focus:outline-none transition ease-in-out"
                                        onClick={() => props.setShowModal(false)}
                                    >
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <hr className="mt-2 mb-2"/>
                                <div>
                                    {props.children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

function SkillBox(props: { skill: Skill }) {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div onClick={() => setShowModal(true)} className="flex flex-row gap-2 items-center pt-1 pb-1 pl-2 pr-4 rounded bg-white dark:bg-slate-800 drop-shadow-md hover:drop-shadow-xl hover:cursor-pointer">
                <i className={`${props.skill.logoFont} colored text-2xl`} />
                <p className="font-light text-center select-none">{props.skill.name}</p>
            </div>
            <SkillModal 
                showModal={showModal} 
                setShowModal={setShowModal}
                skill={props.skill} 
            >
                <p className="text-gray-500 text-sm">{props.skill.description}</p>
            </SkillModal>
        </>
    )
}

export default function Skills() {

    return (
        <HomePageSection id="skills" title="Skills" dark>
            <div className="flex flex-row flex-wrap justify-center gap-4">
                {SKILLS.filter(s => s.type === SkillType.Language).map((skill, index) => (
                    <SkillBox skill={skill} key={index} />
                ))}
            </div>
            <hr className="mt-5 mb-5"/>
            <div className="flex flex-row flex-wrap justify-center gap-4">
                {SKILLS.filter(s => s.type !== SkillType.Language).map((skill, index) => (
                    <SkillBox skill={skill} key={index} />
                ))}
            </div>
        </HomePageSection>
    )
}