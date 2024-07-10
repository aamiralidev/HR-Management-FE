import React from "react";
import { FaUserCircle, FaUserPlus, FaEdit } from "react-icons/fa";
import "./DashboardHomePage.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TimeOffCard from "../../components/Dashboard/TimeOffCard";
import NotificationCard from "../../components/Dashboard/NotificationCard";
import { useParams } from "react-router-dom";
import Card from "../../components/Dashboard/Card";
import CelebrationItem from "../../components/Dashboard/CelebrationItem";
import WhosOut from "../../components/Dashboard/WhosOut";
import CompanyLinks from "../../components/Dashboard/CompanyLinks";

const DashboardHomePage = () => {
  const user = useSelector((state) => state?.auth?.user);
  const { companyDomain } = useParams();

  const celebrations = [
    {
      imgSrc: "url1",
      name: "Cheryl Barnet",
      date: "July 23",
      description: "3rd Anniversary",
    },
    {
      imgSrc: "url1",
      name: "Cheryl Barnet",
      date: "July 23",
      description: "3rd Anniversary",
    },
    {
      imgSrc: "url1",
      name: "Cheryl Barnet",
      date: "July 23",
      description: "3rd Anniversary",
    },
    {
      imgSrc: "url1",
      name: "Cheryl Barnet",
      date: "July 23",
      description: "3rd Anniversary",
    },
    {
      imgSrc: "url2",
      name: "Daniel Vance",
      date: "July 23",
      description: "3rd Anniversary",
    },
    {
      imgSrc: "url3",
      name: "Eric Asture",
      date: "July 23",
      description: "3rd Anniversary",
    },
  ];

  const whosOut = [
    {
      date: "Monday, July 07",
      message: "Nobody requested time off for Monday, Jul 07",
    },
    {
      date: "Monday, July 08",
      message: "Nobody requested time off for Monday, Jul 08",
    },
  ];

  return (
    <div className="h-full mt-16">
      <div className="flex justify-between items-start dashboard-home-page bg-gradient-to-r from-green2 to-green3 p-8  text-white shadow-md mb-4">
        <div className="flex items-center space-x-4">
          {/* <div className="logo bg-white text-green-600 rounded-full p-2"> */}
          <FaUserCircle size={40} />
          {/* </div> */}
          <div>
            <h2 className="text-2xl font-bold">
              {user.firstName + user.lastName}
            </h2>
          </div>
        </div>
        <div className="flex space-x-4">
          <Link className="btn-outline" to={`/${companyDomain}/employees/new`}>
            <FaUserPlus className="mr-2" />
            New Employee
          </Link>
          <button className="btn-outline">
            <FaEdit className="mr-2" />
            Edit
          </button>
        </div>
      </div>
      <div className="p-8 grid grid-cols-12 gap-5 -mt-28 w-full">
        <div className="col-span-12 sm:col-span-4">
          <TimeOffCard
            vacationHoursAvailable={40}
            vacationHoursScheduled={0}
            sickHoursAvailable={24}
            sickHoursScheduled={0}
          />
        </div>
        <div className="col-span-12 sm:col-span-8">
          <NotificationCard />
        </div>
      </div>
      <div className="p-8 grid grid-cols-12 gap-5 w-full">
        <div className="col-span-4">
          <h2 className="text-green-700 text-lg font-semibold mb-4">
            🎉 Celebrations
          </h2>
          <Card>
            {celebrations?.map((item, index) => {
              return (
                <CelebrationItem
                  key={index}
                  imgSrc={item.imgSrc}
                  name={item.name}
                  date={item.date}
                  description={item.description}
                />
              );
            })}
          </Card>
        </div>
        <div className="col-span-4">
          <h2 className="text-green-700 text-lg font-semibold mb-4">
            📅 Who's Out
          </h2>
          <Card>
            {whosOut.map((item, index) => {
              return (
                <WhosOut key={index} date={item.date} message={item.message} />
              );
            })}
          </Card>
        </div>
        <div className="col-span-4">
          <h2 className="text-green-700 text-lg font-semibold mb-4">
            🔗 Company Links
          </h2>
          <Card>
            <CompanyLinks />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
