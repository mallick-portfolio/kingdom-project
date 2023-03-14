import { useContext } from "react";
import { contactContext } from "@/context/ContactContext";

const Form = () => {
  const { contact, setContact, pstContact, contactInitial } =
    useContext(contactContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContact(contactInitial);
    pstContact();
  };

  return (
    <div className="lg:p-10 p-2 container mx-auto scroll-smooth  transition-all duration-200 "  id="contact" >
      <form action="submit" onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name <span className="text-red">*</span>
            </label>
            <input
              className="shadow border-[#ccc]  border rounded w-full py-4 px-3 text-gray-700 "
              id="name"
              type="text"
              placeholder="Your name"
              value={contact.Name}
              onChange={(e) => setContact({ ...contact, Name: e.target.value })}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Phone
            </label>
            <input
              className="shadow border-[#ccc] border rounded w-full py-4 px-3 text-gray-700"
              id="phone"
              type="text"
              placeholder="Your Actual Phone Number"
              value={contact.Phone}
              onChange={(e) =>
                setContact({ ...contact, Phone: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Email <span className="text-red">*</span>
            </label>
            <input
              className="shadow border-[#ccc] border rounded w-full py-4 px-3 text-gray-700"
              id="email"
              type="email"
              placeholder="Your Working Email"
              value={contact.Email}
              onChange={(e) =>
                setContact({ ...contact, Email: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="mt-7">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Message
          </label>
          <textarea
            className="resize border border-[#ccc] rounded-md w-full h-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            placeholder="Enter your message"
            value={contact.Message}
            onChange={(e) =>
              setContact({ ...contact, Message: e.target.value })
            }
          ></textarea>
        </div>
        <button
          type="submit"
          className=" bg-[#eee] mt-2 text-[#fff] border-solid border-2 border-[#ddd] py-2.5 px-3.5 hover:bg-red"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
