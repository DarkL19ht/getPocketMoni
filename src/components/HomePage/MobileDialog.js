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
                          <span className=" translate-x-1 flex items-center justify-center">
                            <span className=" bg-navy-100 p-2 rounded-full">Mobile App</span>
                            <span className="bg-white text-navy-200 w-[100px] h-[40px] rounded-full p-2">
                              POS
                            </span>
                          </span>
                        ) : (
                          <span className=" translate-x-1 flex items-center justify-center rounded-full gap-5">
                            <span className="w-[120px] h-[40px] bg-white text-navy-200 rounded-full p-2">
                              Mobile App
                            </span>
                            <span className="bg-navy-100">POS</span>
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
                          className=""
                          width={400}
                          height={2}
                          priority
                          onClick={handleClick}
                        />
                      </div>
                      {showModal && (
                        <div className="absolute -mt-80 ml-[75px]">
                          <div className="modal-content w-[195px] h-[200px] shadow-2xl">
                            {/* Content for your modal */}
                            <div
                              className="flex justify-between mb-2"
                              style={{ paddingTop: '12px' }}
                            >
                              <p className="text-[13px] font-bold">Send Money</p>{' '}
                              <span
                                onClick={handleClick}
                                className="text-navy-400 text-[13px] pr-1 pl-1  bg-mob cursor-pointer rounded"
                              >
                                x
                              </span>
                            </div>
                            <div className="flex gap-5 pt-4 bg-mob rounded pb-1">
                              <Image
                                src="/pkmsmall.svg"
                                alt="Mobile"
                                // className={`relative mx-auto inset-0 ${isFocused ? ' bg-navy-100 opacity-50' : ''}`}
                                width={15}
                                height={1}
                                priority
                              />
                              <div className="mr-4">
                                <h2 className="text-[8px] font-bold">To PocketMoni</h2>
                                <p className="text-[6px]">Best Way to send money </p>
                              </div>
                              <span className="text-[5px] flex items-center justify-center">
                                <LiaGreaterThanSolid />
                              </span>
                            </div>
                            <div className="flex gap-5 pt-5 pb-2">
                              <BsFillPersonFill />
                              <div className="mr-4">
                                <h2 className="text-[8px] font-bold">To Sub Wallet</h2>
                                <p className="text-[6px]">Best Way to send money </p>
                              </div>
                              <span className="text-[5px] flex items-center justify-center">
                                <LiaGreaterThanSolid />
                              </span>
                            </div>
                            <div className="flex gap-5 pt-5 bg-mob rounded pb-1">
                              <PiBank />
                              <div className="mr-4">
                                <h2 className="text-[8px] font-bold">To Other Banks</h2>
                                <p className="text-[6px]">Best Way to send money </p>
                              </div>
                              <span className="text-[5px] flex items-center justify-center">
                                <LiaGreaterThanSolid />
                              </span>
                            </div>
                          </div>
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
