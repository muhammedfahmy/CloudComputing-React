import {useForm} from 'react-hook-form';

import FormInputError from './FormatInputError';
import TextAreaInput from './TextAreaInput';
import TextInput from './TextInput';


const AddComplainForm = (props) => {
    const { register, handleSubmit, formState } = useForm();

    const submitHandler = async (formData) => {
        try{
            const response = await fetch('http://localhost:5000/complain/addComplains', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (!response.ok) {
                throw Error(data.error);
            }
            console.log(data);
        }catch (err) {
            console.log(err.message);
          }

    }
    
    return(
        <form
      className="flex  flex-col p-10 gap-5 bg-gray-800 w-fit"
      onSubmit={handleSubmit(submitHandler)}
    >
      <TextInput
        label="Name"
        type="text"
        name="name"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Complain name must not be empty</FormInputError>
      )}


      <TextInput
        label="Phone Number"
        type="number"
        name="phoneNumber"
        register={register}
        validation={{ required: true}}
      />
      {formState.errors.PhoneNumber && (
        <FormInputError>Complain phone number must not be empty.</FormInputError>
      )}

      
      <TextInput
        label="Email"
        type="email"
        name="email"
        register={register}
        validation={{ required: true}}
      />
      {formState.errors.email && (
        <FormInputError>Complain email must not be empty.</FormInputError>
      )}

      <TextAreaInput
        label="Description"
        name="description"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.description && (
        <FormInputError>Complain description must not be empty</FormInputError>
      )}


      <button
        type="submit"
        className="bg-white rounded-xl my-4 py-2 px-8 self-center"
      >
        Add Product
      </button>
    </form>
    );

};

export default AddComplainForm;