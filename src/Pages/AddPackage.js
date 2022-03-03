import { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddPackage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    fetch('http://localhost:4000/packages',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=> {
        if(data.insertedId){
            alert('New Package Added Successfully')
        }
    })
  };

  console.log(watch("example"));

  return (
    <div style={{ minHeight:'60vh' }}>
      <Container >
          <h2 className="my-3">Add a New package</h2>
        <form className="d-flex flex-column w-50 mx-auto bg-secondary p-5 package-from mb-3 " onSubmit={handleSubmit(onSubmit)}>
          <input  {...register("packageName")} placeholder="enter package name" />
          <input {...register("price", { required: true })} placeholder="price" />
          <textarea type='textarea' {...register("details", { required: true })}  placeholder="package details"/>
         
          <input type="submit" />
        </form>
      </Container>
    </div>
  );
};

export default AddPackage;
