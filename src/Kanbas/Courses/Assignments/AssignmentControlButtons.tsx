import { useState } from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';
import { FaTrash } from 'react-icons/fa';
import GreenCheckmark from './GreenCheckmark';

export default function AssignmentControlButtons({ onDelete }: { onDelete: () => void }) {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    setShowModal(false);
    onDelete();
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div className="checkmark-container">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <FaTrash className="text-danger ms-2 cursor-pointer" onClick={handleDeleteClick} />

      {showModal && (
        <div className="modal fade show" tabIndex={-1} style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button type="button" className="btn-close" onClick={handleCancelDelete}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this assignment?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCancelDelete}>No</button>
                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Yes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
