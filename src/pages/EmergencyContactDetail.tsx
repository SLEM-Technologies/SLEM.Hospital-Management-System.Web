import { Patients } from "../data/constant";
import { useParams } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
// import Button from "@/components/Button";
import { FaRegPenToSquare } from "react-icons/fa6";
import {Modal} from './Modal';
import { useForm,Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addNewContact } from "../components/addDoctor/formSchemas";
import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

export default function EmergencyContactDetails() {
  const { id } = useParams();
  const selectedID = Number(id);
  const ContactDetails = Patients; // Assume Patients is imported and defined

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addNewContact),
    mode: 'all',
  });

  const [currentContact, setCurrentContact] = useState([]);
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [contactToDelete, setContactToDelete] = useState(null);

  const openAddEditModal = () => {
    setIsEditing(false);
    reset(); // Clear form fields
    setIsAddEditModalOpen(true);
  };

  const openEditModal = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    const contactToEdit = currentContact[index];
    reset(contactToEdit); // Populate form with existing data
    setIsAddEditModalOpen(true);
  };

  const openDeleteModal = (index) => {
    setContactToDelete(index);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteClick = () => {
    if (contactToDelete !== null) {
      const updatedContacts = currentContact.filter((_, i) => i !== contactToDelete);
      setCurrentContact(updatedContacts);
      setContactToDelete(null);
      setIsDeleteModalOpen(false);
    }
  };

  const onSubmit = (data) => {
    if (isEditing && editIndex !== null) {
      const updatedContacts = [...currentContact];
      updatedContacts[editIndex] = data;
      setCurrentContact(updatedContacts);
    } else {
      setCurrentContact([data, ...currentContact]);
    }
    setIsAddEditModalOpen(false); // Close the add/edit modal
  };

  return (
    <div>
      {ContactDetails.map((item, index) => {
        return selectedID === index ? (
          <div className='w-full relative min-h-screen' key={index}>
            <h1 className='leading-tight tracking-wide text-lg md:text-xl font-semibold text-center'>
              Emergency Contacts
            </h1>
            <AddNewContact
              currentContact={currentContact}
              onEditClick={openEditModal}
              onDeleteClick={openDeleteModal}
            />
            <div className='w-full md:w-[30%] shadow border border-white rounded-md bg-white flex space-x-6 justify-between items-start md:items-center p-4 mx-auto mt-6'>
              <div className='flex flex-col '>
                <h2 className='font-bold leading-tight tracking-wide text-primaryBlue text-base mb-2 '>
                  {item.primaryContactName}
                </h2>
                <p className='text-gray-500 mb-2'>{item.primaryContactRelationship}</p>
                <p className='text-gray-400'>{item.primaryContactPhone}</p>
              </div>
              <FaRegPenToSquare size={25} className="text-primaryBlue cursor-pointer" onClick={openEditModal} />
            </div>
            <div className='absolute bottom-0 md:bottom-0 w-full flex flex-col justify-end items-end mb-6 md:pr-12'>
              <FaCirclePlus
                size={55}
                className='text-primaryBlue cursor-pointer'
                onClick={openAddEditModal}
              />
            </div>

            {/* Add/Edit Contact Modal */}
            <Modal
              title={isEditing ? 'Edit Contact' : 'Add New Contact'}
              isOpen={isAddEditModalOpen}
              onClose={() => setIsAddEditModalOpen(false)}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col justify-center items-center'
              >
                <div className='w-full'>
                  <div className='px-4 mt-4'>
                    <Controller
                      name='name'
                      control={control}
                      render={({ field }) => (
                        <input
                          id='name'
                          type='text'
                          className='w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded'
                          placeholder='Name'
                          {...field}
                        />
                      )}
                    />
                    {errors.name && (
                      <p className='text-red-500 text-xs'>{errors.name.message}</p>
                    )}
                  </div>

                  <div className='px-4 mt-4'>
                    <Controller
                      name='relationship'
                      control={control}
                      render={({ field }) => (
                        <input
                          id='relationship'
                          type='text'
                          className='w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded'
                          placeholder='Relationship'
                          {...field}
                        />
                      )}
                    />
                    {errors.relationship && (
                      <p className='text-red-500 text-xs'>
                        {errors.relationship.message}
                      </p>
                    )}
                  </div>

                  <div className='px-4 mt-4'>
                    <Controller
                      name='phone'
                      control={control}
                      render={({ field }) => (
                        <input
                          id='phone'
                          type='text'
                          className='w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded'
                          placeholder='Contact Number'
                          {...field}
                        />
                      )}
                    />
                    {errors.phone && (
                      <p className='text-red-500 text-xs'>{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className='mt-6 w-full text-center'>
                  <button
                    type='submit'
                    className='btn w-full md:w-auto bg-primaryBlue text-white hover:bg-primaryBlue/90 p-2 mb-4 md:mr-6'
                  >
                    {isEditing ? 'Save Changes' : 'Add New Contact'}
                  </button>
                  <button
                    type='button'
                    className='btn w-full md:w-auto mt-4 text-center border text-gray-700 py-2 px-3 rounded-md hover:bg-gray-200'
                    onClick={() => setIsAddEditModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </Modal>

            {/* DELETE CONTACT MODAL */}
            <Modal
              title='Delete Contact'
              isOpen={isDeleteModalOpen}
              onClose={() => setIsDeleteModalOpen(false)}
            >
              <p className="text-lg text-center">Are you sure you want to delete this contact?</p>
              <div className='mt-4  flex justify-end items-end space-x-6 pr-6'>
                <button
                  type='button'
                  className='w-full md:w-auto  text-center text-primaryBlue'
                  onClick={() => setIsDeleteModalOpen(false)}
                >
                  CANCEL
                </button>
                <button
                  type='button'
                  className='w-full md:w-auto  text-center text-red-500'
                  onClick={handleDeleteClick}
                >
                  OK
                </button>
              </div>
            </Modal>
          </div>
        ) : null;
      })}
    </div>
  );
}

function AddNewContact({ currentContact, onEditClick, onDeleteClick }) {
  return (
    <div>
      {currentContact.map((item, index) => (
        <div
          className='w-full md:w-[30%] shadow border border-white rounded-md bg-white flex space-x-6 justify-between items-start md:items-center p-4 mx-auto mt-6'
          key={index}
        >
          <div className='flex flex-col '>
            <h2 className='font-bold leading-tight tracking-wide text-primaryBlue text-base mb-2 '>
              {item.name}
            </h2>
            <p className='text-gray-500 mb-2'>{item.relationship}</p>
            <p className='text-gray-400'>{item.phone}</p>
          </div>
          <div className="flex space-x-4">
            <FaRegPenToSquare size={25} className='text-primaryBlue cursor-pointer' onClick={() => onEditClick(index)} />
            <FaTrashCan size={25} className='text-red-500 cursor-pointer' onClick={() => onDeleteClick(index)} />
          </div>
        </div>
      ))}
    </div>
  );
}
