import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date()

    fetch("http://localhost:5000/addAppointment", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(success => {
        if(success){
          closeModal()
        }
      })

  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center text-brand">{appointmentOn}</h2>
        <p className="text-secondary text-center">ON {date.toDateString()}</p>
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <input {...register("name", { required: true })} placeholder="Your Name" className="form-control" />
            {errors.name && <span className="text-danger">This field is required</span>}
          </div>


          <div className='form-group'>
            <input {...register("phone", { required: true })} placeholder="Phone Number" className="form-control" />
            {errors.phone && <span className="text-danger">This field is required</span>}
          </div>

          <div className='form-group'>
            <input {...register("email", { required: true })} placeholder="Email" className="form-control" />
            {errors.email && <span className="text-danger">This field is required</span>}
          </div>

          <div className="form-group row mt-3">

            <div className="col-4">
              <select className="form-control" {...register("gender", { required: true })}>
                <option disabled={true} value="Not set">Select gender</option>
                <option value="male">Male</option>
                <option value="female">FeMale</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span className="text-danger">This field is required</span>}
            </div>

            <div className="col-4">
              <input type="number" {...register("age", { required: true })} className="form-control" placeholder="Your Age" />
              {errors.age && <span className="text-danger">This field is required</span>}
            </div>

            <div className="col-4">
              <input type="number" {...register("weight", { required: true })} className="form-control" placeholder="Your weight" />
              {errors.weight && <span className="text-danger">This field is required</span>}
            </div>

          </div>
          <div className="form-group text-end mt-2">
            <button className="btn btn-primary" type="submit">Send</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;