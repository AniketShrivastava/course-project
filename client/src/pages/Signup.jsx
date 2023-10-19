import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import toast from "react-hot-toast";
import { isEmail, isValidPassword } from "../helpers/regexMatcher";
import { useDispatch } from "react-redux";
import { createAccount } from "../redux/slices/authSlice";

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [signupDetails, setSignupDetails] = useState({
        email: "",
        fullName: "",
        password: "",
        avatar: ""
    });
    const [previewImage, setPreviewImage] = useState("");

    function handleUserInput(e) {
        const { name, value } = e.target
        setSignupDetails({
            ...signupDetails,
            [name]: value
        })

    }

    function handleImage(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0]
        if (!uploadedImage) return;
        setSignupDetails({
            ...signupDetails,
            avatar: uploadedImage
        });
        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadedImage);
        fileReader.addEventListener("load", function () {
            setPreviewImage(this.result);
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        console.log(signupDetails)
        if (signupDetails.email || signupDetails.password || signupDetails.fullName) {
            toast.error("Please fill all the details");
            return;
        }
        if (signupDetails.fullName > 5) {
            toast.error("Name should be atleast of 5 characters");
            return;
        }
        if (!isEmail(signupDetails.email)) {
            toast.error("Invalid email provided");
            return;
        }
        if (!isValidPassword(signupDetails.password)) {
            toast.error("Invalid password provided, password should 6-16 character long with atleast a number and a special character");
            return;
        }
         // password validation using regex
    if (!signupData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)) {
        toast.error(
          "Minimum password length should be 8 with Uppercase, Lowercase, Number and Symbol"
        );
        return;
      }
  
      // creating the form data from the existing data
      const formData = new FormData();
      formData.append("fullName", signupData.fullName);
      formData.append("email", signupData.email);
      formData.append("password", signupData.password);
      formData.append("avatar", signupData.avatar);
  
      // calling create account action
      const res = await dispatch(createAccount(formData));
  
      // redirect to login page if true
      if (res.payload.success) navigate("/login");
  
      // clearing the signup inputs
      setSignupDetails({
        fullName: "",
        email: "",
        password: "",
        avatar: "",
      });
      setImagePreview("");
    };
  

    return (
        <HomeLayout>
            <div className="flex overflow-auto items-center justify-center h-[100vh]">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col gap-3 justify-center rounded-lg p-4 text-white w-35">
                    <h1 className="text-2xl text-center font-bold">Registration Page</h1>

                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />
                        ) : (
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
                        )}
                    </label>
                    <input
                        onChange={handleImage}
                        type="file"
                        className="hidden"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg, .jpeg, .png, .svg"
                    />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="font-semibold">Name</label>
                        <input type="text"
                            onChange={handleUserInput}
                            value={signupDetails.fullName}
                            required
                            name="fullName"
                            placeholder="enter your username..."
                            id="fullName"
                            className="bg-transparent px-2 py-1 border"

                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input type="text"
                            onChange={handleUserInput}
                            required
                            name="email"
                            placeholder="enter your email..."
                            id="email"
                            value={signupDetails.email}
                            className="bg-transparent px-2 py-1 border"

                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">password
                        </label>
                        <input type="password"
                            onChange={handleUserInput}
                            required
                            name="password"
                            placeholder="enter your password..."
                            id="password"
                            value={signupDetails.password}
                            className="bg-transparent px-2 py-1 border"

                        />
                    </div>
                    <button className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg">
                        Create Account
                    </button>
                    <p className="text-center">
                        Already have an account ? <Link to="/login" className="cursor-pointer  text-accent">Login</Link>
                    </p>
                </form>


            </div>

        </HomeLayout>
    );
}

export default Signup;