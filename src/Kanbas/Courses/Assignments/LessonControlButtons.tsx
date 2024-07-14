import { IoEllipsisVertical } from 'react-icons/io5';
import GreenCheckmark from './GreenCheckmark';

export default function LessonControlButtons() {
  return (
    <div className="d-flex align-items-center checkmark-container">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}