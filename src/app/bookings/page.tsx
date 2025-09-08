"use client"
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type DateRangeType = {
  startDate: Date;
  endDate: Date;
  key: string;
};

export default function BookingForm() {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState<DateRangeType[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const onClose = () => {
    setOpen(false);
  }

  return (
    <div className="flex py-20 flex-col items-center gap-4">
      <h2 className="text-xl font-semibold">Book Your Stay</h2>

      <div className="flex gap-4">
        <input
          readOnly
          value={format(range[0].startDate, "MM/dd/yyyy")}
          className="border px-3 py-2 rounded-lg cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        <input
          readOnly
          value={format(range[0].endDate, "MM/dd/yyyy")}
          className="border px-3 py-2 rounded-lg cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      {open && (
        <div className="absolute mt-20 shadow-lg z-50 bg-white p-4 rounded-xl">
          <DateRange
            editableDateInputs={true}
            onChange={(item: any) => {setRange([item.selection])
              if(item.selection.startDate.getTime() !== item.selection.endDate.getTime()){
                onClose();
              }
            }
          } 
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            minDate={new Date()}
          />
        </div>
      )}

      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4">
        Book Now
      </button>
    </div>
  );
}
