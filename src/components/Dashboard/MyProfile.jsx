import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { AiFillEdit } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { auth } from "../../config/firebase";
import { setAccountType } from "../../slices/authSlice";
import { setProfileData } from "../../slices/profileSlice";
import Loader from "../../common/Loader";

const MyProfile = () => {
  const { signupData } = useSelector((state) => state.auth);

  const { profileData } = useSelector((state) => state.profile);

  const user = profileData;

  const [loading, setLoading] = useState(true);

  // console.log(profileData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { accountType } = useSelector((state) => state.auth);

  const fetchData = async () => {
    if (auth.currentUser) {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const userDataArray = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        console.log("chl rha hun main");
        console.log("All user data:", userDataArray);

        const userWithUid = userDataArray.find(
          (user) => user.id === auth.currentUser.uid
        );

        console.log("User with uid:", userWithUid);

        dispatch(setAccountType(userWithUid.accountType));
      } catch (error) {
        console.error("Error fetching account type:", error.message);
      }
    } else {
      navigate("/login");
    }
  };

  const fetchUserData = async () => {
    if (auth.currentUser) {
      try {
        console.log("1");
        console.log(accountType);
        const querySnapshot = await getDocs(
          collection(db, accountType.toLowerCase())
        );
        const userDataArray = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));

        console.log("All Doctors/patient data:", userDataArray);

        const userWithUid = userDataArray.find(
          (user) => user.email === auth.currentUser.email
        );

        console.log("Doctor/Patient with gmail:", userWithUid);

        dispatch(setProfileData(userWithUid));

        setLoading(false);
      } catch (error) {
        console.error("Error fetching account type:", error.message);
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (accountType) {
      fetchUserData();
    }
  }, [accountType]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col p-6 gap-10 w-[80%] mx-auto">
      <h1 className="text-white text-4xl font-inter">My Profile</h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-4 justify-between items-center text-white bg-[#161D29] p-8 rounded-lg">
          <div className="flex flex-row gap-8 items-center justify-between">
            <img
              src={`${auth.currentUser?.photoURL}`}
              alt="xyz"
              className="aspect-square w-[78px] rounded-full object-cover"
            />
            <div>
              <p className="text-lg">{user.FirstName + " " + user.LastName}</p>
              <p className="text-[#838894] text-md">
                {auth.currentUser?.email}
              </p>
            </div>
          </div>
          <IconBtn
            text="Edit"
            onClick={() => {
              navigate("/dashboard/settings");
            }}
          >
            <AiFillEdit />
          </IconBtn>
        </div>

        <div className="flex flex-row gap-4 justify-between items-center text-white bg-[#161D29] p-8 rounded-lg">
          <div className="flex flex-col gap-10  justify-between">
            <p className="text-lg">About</p>
            <p className="text-[#838894] text-md">
              {user?.about === null
                ? "Write Something About Yourself"
                : `${user?.about}`}
            </p>
          </div>
          <IconBtn
            text="Edit"
            onClick={() => {
              navigate("/dashboard/settings");
            }}
          >
            <AiFillEdit />
          </IconBtn>
        </div>

        <div className="flex flex-row gap-4 justify-between items-center text-white bg-[#161D29] p-8 rounded-lg w-full">
          <div className="flex flex-col gap-10  justify-between w-full">
            <div className="flex flex-row w-full justify-between items-center">
              <p className="text-lg">Profile Details</p>

              <IconBtn
                text="Edit"
                onClick={() => {
                  navigate("/dashboard/settings");
                }}
              >
                <AiFillEdit />
              </IconBtn>
            </div>

            <div className="flex flex-row gap-40 w-[80%]">
              <div className="flex flex-col gap-8 w-[55%]">
                <div>
                  <p>First Name</p>
                  <p className="text-[#838894]">{user?.FirstName}</p>
                </div>

                <div>
                  <p>Email</p>
                  <p className="text-[#838894]">{auth.currentUser?.email}</p>
                </div>

                <div>
                  <p>Gender</p>
                  <p className="text-[#838894]">
                    {user?.gender ? `${user?.gender}` : "Add Gender"}
                  </p>
                </div>
                {accountType === "DOCTORS" && (
                  <div>
                    <p>Qualification</p>
                    <p className="text-[#838894]">
                      {user?.Qualification
                        ? `${user?.Qualification}`
                        : "Add Qualification"}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between w-[55%]">
                <div>
                  <p>Last Name</p>
                  <p className="text-[#838894]">{user?.LastName}</p>
                </div>
                <div>
                  <p>
                    {accountType === "PATIENTS"
                      ? `Date Of Birth`
                      : `Speciality`}
                  </p>
                  <p className="text-[#838894]">
                    {accountType === "PATIENTS"
                      ? user?.DateOfBirth
                        ? `${user?.DateOfBirth}`
                        : "Add Date of Birth"
                      : user?.Speciality
                      ? `${user?.Speciality}`
                      : "Add Speciality"}
                  </p>
                </div>
                <div>
                  <p>Contact Number</p>
                  <p className="text-[#838894]">
                    {user?.ContactNumber
                      ? `${user?.ContactNumber}`
                      : "Add Contact Number"}
                  </p>
                </div>

                {accountType === "DOCTORS" && (
                  <div>
                    <p>Years Of Experience</p>
                    <p className="text-[#838894]">
                      {user?.YearsOfExperience
                        ? `${user?.YearsOfExperience}`
                        : "Add Years Of Experience"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
