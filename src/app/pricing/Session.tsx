import AppointmentBtn from "@/components/common/AppointmentBtn";
import React from "react";

function Session() {
  return (
    <div>
      <div className="container lg:mb-[140px] mb-10">
        <div
          data-aos="zoom-in"
          className="max-w-[600px] lg:text-3xl text-xl font-bold text-gray-900 mb-4 m-auto text-center"
        >
          Book a session to meet our coaches
        </div>
        <div
          data-aos="zoom-in"
          className="lg:text-md text-sm text-neutral-500 max-w-[600px] m-auto text-center lg:mb-16 mb-5"
        >
          Metus eleifend lobortis et in pulvinar semper purus morbi. Duis platea
          tortor pellentesque arcu volutpat neque in varius. Ut nisl egestas{" "}
        </div>
        <div className="lg:flex justify-between items-center gap-7 mb-1 lg:mb-0">
          <div data-aos="fade-right">
            <AppointmentBtn
              name="Path finding consultation"
              picture="./picture/Group 1000002120.png"
              euro="59 € / Session"
              title="Sit nulla sagittis, morbi nulla montes, fermentum, id. Arcu massa dolor dignissim augue habitasse massa porta leo netus. Quam ut sollicitudin vel sed vitae massa porta. Sapien, nibh et non pharetra rhoncus pharetra commodo dolor. Eu sed tortor sed iaculis in. Imperdiet vitae, "
              btn="Book an appointment"
            />
          </div>
          <div data-aos="fade-left">
            <AppointmentBtn
              name="Visa interview coaching"
              picture="./picture/Group 1000002121.png"
              euro="55 € / Session"
              title="Eget imperdiet fames pretium egestas. Mi nibh tellus, porttitor tortor. Viverra at eu nisl nibh cursus. Fringilla nec nunc quis id. Id vitae sem sed fermentum non et hendrerit. In mattis mi, at diam elit cras vulputate pellentesque. Aliquam dictumst tellus orci pretium lectus at. Nam habitasse viverra"
              btn="Book an appointment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Session;
