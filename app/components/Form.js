import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qzk2xnj",
        "template_9q33afm",
        form.current,
        "Nsx4ux97eaNqdEKJC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // const Form = () => {
  //   const [data, setData] = useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   });

  //   const handleChange = (e) => {
  //     const name = e.target.value;
  //     const value = e.target.value;
  //     setData({ ...data, [name]: value });
  //   };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     alert(data);
  //   };

  return (
    <form
      className="flex flex-col mt-4 mx-4 md:w-1/2 xl:w-1/3 text-white"
      ref={form}
      onSubmit={sendEmail}
    >
      <label className="text-[#191d2b] font-bold">Name</label>
      <input
        type="text"
        name="user_name"
        className="bg-[#191d2b] p-2 mb-2 mt-2 rounded-xl"
        required
      />
      <label className="text-[#191d2b] font-bold">Email</label>
      <input
        type="email"
        name="user_email"
        className="bg-[#191d2b] p-2 mb-2 mt-2 rounded-xl"
        required
      />
      <label className="text-[#191d2b] font-bold">Phone</label>
      <input
        type="phone"
        name="user_phone"
        className="bg-[#191d2b] p-2 mb-2 mt-2 rounded-xl"
      />
      <label className="text-[#191d2b] font-bold">Message</label>
      <textarea
        name="message"
        className="bg-[#191d2b] p-2 mb-8 mt-2 rounded-xl"
        rows="6"
        required
      ></textarea>
      <input
        type="submit"
        className="rounded-full
        bg-[#dbe1e8] font-bold
        border border-solid border-white
        text-[#191d2b]
        hover:bg-white
        h-auto px-6
        items-center
        text-center
        py-1 cursor-pointer
        xl:w-[33%]"
        value="Submit"
      />{" "}
    </form>
  );
};

export default Form;
