import { oc } from "date-fns/locale";
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

function Stats({ bookings, confirmedStays = [], numDays, cabinCounts }) {
  const numBookings = bookings ? bookings.length : 0;

  const sales = bookings
    ? bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)
    : 0;

  const checkins = confirmedStays ? confirmedStays.length : 0;

  const occupation = confirmedStays
    ? confirmedStays.reduce(function (acc, cur) {
        if (cur.id) {
          return acc + cur.numberNights;
        } else {
          return;
        }
      }, 0) /
      (numDays * cabinCounts.length)
    : 0;

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check in"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
