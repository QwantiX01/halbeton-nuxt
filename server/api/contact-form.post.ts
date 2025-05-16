// import axios from "axios";
//
// interface feedbackForm {
//   firstName: string;
//   phoneNumber: string;
//   email: string;
//   topic: string;
//   message: string;
// }
//
//
// export default defineEventHandler(async (event) => {
//   let data = await readFormData(event);
//   let formData : feedbackForm = {
//     firstName: data.get("firstName")?.toString() || "",
//     email: data.get("email")?.toString() || "",
//     message: data.get("message")?.toString() || "",
//     phoneNumber: data.get("phoneNumber")?.toString() || "",
//     topic: data.get("topic")?.toString() || ""
//   };
//
//   console.log(formData);
//
//   await axios.post(`http://localhost:8080/api/feedback-form`, formData).then(
//     value => {
//       console.log(value.status)
//     }
//   ).catch(error => console.log(error));
// })