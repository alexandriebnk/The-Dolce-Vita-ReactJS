import React from "react";

const ReservationContext = React.createContext({
  frameTitle: "BOOK A TABLE",
  description: {
    title: "Enjoy a bay front moment",
    text: "A dinner planned ? Romantic, with family or friends by the pool, don't hesitate to book to fully enjoy your moment. The team takes care of everything !",
  },
  icons: {
    guests: {
      icon: "/images/reservation/svg/guests.svg",
    },
    calendar: {
      icon: "/images/reservation/svg/calendar.svg",
    },
    time: {
      icon: "/images/reservation/svg/time.svg",
    },
    name: {
      icon: "/images/reservation/svg/name.svg",
    },
    phone: {
      icon: "/images/reservation/svg/phone.svg",
    },
    email: {
      icon: "/images/reservation/svg/email.svg",
    },
  },
  confirmation: {
    icon: "/images/reservation/svg/sent.svg",
    title: "Thank you !",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
});

export default ReservationContext;
