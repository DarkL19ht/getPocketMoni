import { Dialog, Transition, Switch } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { LiaGreaterThanSolid } from 'react-icons/lia';
import { PiBank } from 'react-icons/pi';

export default function MobileDialog() {
  let [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setShowModal(!showModal);
    // alert('God is good');
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="bg-navy-100 text-navy-200 pt-3 pb-3 pr-4 pl-4 rounded-full"
      >
        Try Demo
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="" onClose={closeModal}>
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
            <div className="flex h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full max-w-md transform overflow-hidden bg-white p-6 text-left align-middle transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    <div className="text-center mt-10">
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className="bg-navy-100 inline-flex h-[50px] w-[220px] items-center rounded-full"
                      >
                        {enabled ? (
                          <span className=" translate-x-28 w-[100px] h-[40px] bg-white text-navy-200 flex items-center justify-center rounded-full">
                            POS
                          </span>
                        ) : (
                          <span className=" translate-x-1 w-[104px] h-[40px] bg-white text-navy-200 flex items-center justify-center rounded-full">
                            Mobile App
                          </span>
                        )}
                      </Switch>
                    </div>
                  </Dialog.Title>
                  {enabled ? (
                    <div className="ml-10 mb-[66px]">
                      <Image
                        src="/dialogPOS.png"
                        alt="Mobile"
                        className="relative mx-auto inset-0"
                        width={230}
                        height={1}
                        priority
                      />
                    </div>
                  ) : (
                    <div>
                      <div className="w-[550px] h-[580px] -ml-7">
                        <Image
                          src="/mobile.svg"
                          alt="Mobile"
                        //   className={`${isOpen ? '' : 'relative'}`}
                          width={400}
                          height={2}
                          priority
                          onClick={handleClick}
                        />
                      </div>
                      {showModal && (
                        <div className="modal-over">
                          <h2>Hello 4rm here</h2>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="text-center">
                    <button
                      type="button"
                      className="bg-navy-100 text-navy-200 pt-3 pb-3 pr-4 pl-4 rounded-full"
                      onClick={closeModal}
                    >
                      Back to Landing Page
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
