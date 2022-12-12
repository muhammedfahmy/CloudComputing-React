

import React, { startTransition } from "react";
import {FaStar} from 'react-icons/fa'
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";
import FormatInputError from "./FormatInputError";
import {useForm} from 'react-hook-form';

let index; // The rating number 

const colors = {
    orange: "#FFA500",
    grey: "#808080"
}

const AddReview = () => {

    const { register, handleSubmit, formState } = useForm();

    const stars = Array(5).fill(0);

    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);

    const handleClick = value => {
        index = value
        setCurrentValue(value)         
    }

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }


    const getRatingNumber = () => {
        
        console.log(index)
    }

    const submitHandler = async (formData) => {
        try{
            
            const response = await fetch('http://localhost:5000/review/addReview', {
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

        <div className="flex flex-col items-center">

            <h2 className="text-center flex flex-col">Rating Us</h2>
            <div >
                {stars.map((_, index) => {
                    return(
                        <FaStar className="cursor-pointer m-5"
                            key={index}
                            size={24}
                            
                            color={(hoverValue || currentValue) > index? colors.orange: colors.grey}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                        />
                    )
                })}
            </div>

            <form
                className="flex  flex-col p-10 gap-5 bg-gray-800 w-fit"
                onSubmit={handleSubmit(submitHandler)}
                >
                <h1 className="bg-red-600 text-white font-bold">Sorry our star rating doesn't work for now. <br></br>
                                                                    Could you please tell us from 0 to 5 what you think about our system.</h1>
                <TextInput
                    label="Rating"
                    name="rating"
                    register={register}
                    validation={{ required: true }}
                />
                {formState.errors.rating && (
                    <FormatInputError>Rating must not be empty</FormatInputError>
                )}

                <TextAreaInput
                    label="Feedback"
                    name="feedback"
                    register={register}
                    validation={{ required: true }}
                />
                {formState.errors.feedback && (
                    <FormatInputError>Feedback must not be empty</FormatInputError>
                )}

                    

                <button
                    type="submit"
                    className="bg-white rounded-xl my-4 py-2 px-8 self-center"
                >
                    Submit
                </button>
            </form>

        </div>

    );
    
};


export default AddReview;