import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import FormInput from "./FormInput";

const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      emailjs
        .send(
          "service_w8b9b1r",
          "template_k1zhdl8",
          {
            from_name: values.name,
            to_name: "Bharath",
            from_email: values.email,
            to_email: "contact.bharathdev@gmail.com",
            message: values.message,
          },
          "WNSNElqGlyMB-dyFM"
        )
        .then(
          () => {
            alert(
              "Thank you for your message. I will get back to you as soon as possible."
            );
            resetForm();
          },
          (error) => {
            console.log(error);
            alert("Something went wrong. Please try again after some time.");
          }
        )
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <div className={`xl:mt-12 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] black-gradient p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Sorry, contact is disabled</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={formik.handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <FormInput
            title="Your Name"
            value={formik.values.name}
            type="text"
            name="name"
            placeholder="What's your name?"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name}
            input
          />
          <FormInput
            title="Your Email"
            value={formik.values.email}
            type="email"
            name="email"
            placeholder="What's your email?"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
            input
          />
          <FormInput
            title="Your Message"
            value={formik.values.message}
            name="message"
            placeholder="What do you want to say?"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && formik.errors.message}
            textArea
          />

          <button
            type="submit"
            className="bg-black py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            disabled={true}
          >
            {formik.isSubmitting ? "Sending..." : "Send (Disabled)"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
