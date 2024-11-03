import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <div className="contact__form">
      <div className="contacts__forms" id="forms">
        <h1>Send us a message</h1>
        <form className="formss" onSubmit={handleSubmit(onSubmit)}>
          <div className="name">
            <div className="contact__names">
              <label>Full Name</label>
              <div className="contact__input">
                <input
                  type="text"
                  name="fullName"
                  {...register("fullName", { required: true })}
                  aria-invalid={errors.fullName ? "true" : "false"}
                />
                  {errors.fullName?.type === 'required' && <p role="alert" className="errors">Full name is needed</p>}
              </div>
            </div>
            <div className="contact__names">
              <label>Email</label>
              <div className="contact__input">
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "your email is required",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                 {errors.email && <p className="errors">{errors.email.message}</p>}
              </div>
            </div>
          </div>
          <div className="text__area">
            <label>Message</label>
            <textarea name="textArea" {...register("textArea", {required: true})} aria-invalid={errors.textarea ? "true" :"false" }/>
            {errors.textArea?.type === 'required' && <p role="alert" className="errors">Message is needed</p>}
          </div>
          <div>
            <button className="contact__button">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
