import { Input } from 'components/ContactForm/ContactForm.styled'
import React from "react";
import { useDispatch } from 'react-redux';
import { filterContacts } from 'store/filter/filterSlice';
import { Label } from './Filter.styled';



export const Filter = () => {
  const dispatch = useDispatch()

  const handleFilter = ({ currentTarget }) => {
    dispatch(filterContacts(currentTarget.value));
  };

    return (
      <div>
        <Label style={{ marginRight: '14px' }} htmlFor="filter">Find contacts by name</Label>
        <Input type="text" name="input" id="filter" onChange={handleFilter} />
      </div>
    )
}
 