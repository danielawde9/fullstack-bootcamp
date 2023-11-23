import UserTable from "../Components/UserTable";
import EventTable from "../Components/EventTable";
import VenueTable from "../Components/VenueTable";
import ReservationTable from "../Components/ReservationTable";

const Dashboard = () => {
  return (
    <>
      <UserTable />
      <VenueTable />
      <EventTable />
      <ReservationTable />
    </>
  );
};

export default Dashboard;
