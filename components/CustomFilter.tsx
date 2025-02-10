'use client'

import { updateSearchParams } from "@/utils";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

type Options = { title: string; value: string };

interface CustomFilterProps {
  title: string;
  options: Options[];
}

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter()
  const [selected, setSelected] = useState(options[0])

  const handleUpdateParams = (e: Options) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase())
    router.push(newPathName)
  }

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e)
          handleUpdateParams(e)
        }}
      >
        <div className="relative w-fit z-10">
          <ListboxButton className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="chevron_up-down"
              width={20}
              height={20}
              className="ml-4 object-contain" />
          </ListboxButton>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="custom-filter__options">
              {options.map((option) => (
                <ListboxOption
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-semibold" : "font-normal"}`}>{option.title}
                        {option.title}
                      </span>
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter