import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contact = ({ contact }) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <li>
      {contact.name}:<span>{contact.number}</span>
      <button
        className={isActive ? 'isLoading' : undefined}
        type="button"
        disabled={isActive}
        onClick={() => {
          setIsActive(true);
          handleDelete(contact.id);
        }}
      >
        delete
      </button>
    </li>
  );
};
