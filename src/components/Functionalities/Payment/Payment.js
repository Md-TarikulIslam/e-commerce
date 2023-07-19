import {
    Button,
  Card,
  CardBody,
  Chip,
  Input,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import img from "../../assets/images/items/1.webp";
import "./Payment.css";
import { FaTicketAlt, FaArrowRight, FaRegKeyboard } from "react-icons/fa";

const Payment = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-5">
      <div className="flex flex-start justify-between">
        <div>
          <div>
            <Card>
              <CardBody>
                <Typography className="text-sm">
                  Deliver to: Md. Tarikul Islam
                </Typography>
                <div className="flex items-center gap-3 my-2">
                  <div>
                    <Chip
                      variant="ghost"
                      color="green"
                      size="sm"
                      value="Home"
                      className="w-20"
                      icon={
                        <span className="content-[''] block w-2 h-2 rounded-full mx-auto mt-1 bg-green-900" />
                      }
                    />
                  </div>
                  <Typography className="text-sm">01739-426293 </Typography>
                  <Typography className="text-sm">|</Typography>
                  <Typography className="text-sm">
                    {" "}
                    Dhaka, Bangladesh
                  </Typography>
                </div>
                <Card>
                  <CardBody>
                    <Typography className="text-green-500 text-sm">
                      Collect your parcel from the nearest Pick-up Point with a
                      reduced shipping fee
                    </Typography>
                    <Typography className="text-sm">
                      3 suggested collection point(s) nearby
                    </Typography>
                  </CardBody>
                </Card>
                <div className="flex my-2 gap-3 items-center">
                  <Typography className="text-sm">
                    Bill to default billing address{" "}
                  </Typography>
                  <Typography className="text-blue-600 text-sm">
                    Edit
                  </Typography>
                </div>{" "}
                <div className="flex gap-3 items-center">
                  <Typography className="text-sm">
                    Email to tarikul2605@gmail.com{" "}
                  </Typography>
                  <Typography className="text-blue-600 text-sm">
                    Edit
                  </Typography>
                </div>{" "}
              </CardBody>
            </Card>
          </div>
          <div className="my-5">
            <Card>
              <CardBody>
                <div className="flex items-center justify-between">
                  <div>
                    <img className="w-12 rounded-lg" src={img} alt="" />
                  </div>
                  <div>
                    <Typography className="text-sm">
                      Elessi Knit Coats
                    </Typography>
                    <Typography className="text-sm">
                      Elessi, Size: Int M, Color Family: Yellow
                    </Typography>
                  </div>
                  <div className="text-sm">Qty:1</div>
                  <div className="strike-box rounded-lg bg-gray-200 p-1 flex gap-2">
                    <Typography className="strike text-sm">$89</Typography>
                    <Typography className="text-sm">8%</Typography>
                  </div>
                  <div>
                    <Typography className="text-sm">$80</Typography>
                  </div>
                </div>
                <hr className="mt-5" />
                <Card className="w-1/2 my-3 border-red-800 border">
                  <CardBody>
                    <Typography className="text-teal-600 text-sm">
                      Standard Delivery
                    </Typography>
                    <Typography className="text-sm">
                      Receive by 23 Jul - 26 Jul
                    </Typography>
                  </CardBody>
                </Card>
                <div className="flex items-center justify-between">
                  <div>
                    <Card className=" ">
                      <CardBody className="flex justify-between items-center gap-16">
                        <div className="flex items-center gap-2">
                          <p>
                            <FaTicketAlt />
                          </p>
                          <Typography className="text-teal-600 text-sm">
                            Store Voucher
                          </Typography>
                        </div>
                        <div className="flex items-center gap-2">
                          <Typography className="text-sm">
                            Get Voucher
                          </Typography>
                          <p>
                            <FaArrowRight />
                          </p>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                  <div>
                    <Typography className="text-sm">
                      1 item(s). Subtotal:{" "}
                      <span className="text-red-700">$80</span>
                    </Typography>
                    <Typography className="text-sm">Saved $8</Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div>
          <Card>
            <CardBody>
              <Typography className="text-sm">Discount and Payment</Typography>
              <div className="flex justify-between items-center gap-60 my-3">
                <div className="flex items-center gap-2">
                  <p>
                    <FaTicketAlt />
                  </p>
                  <Typography className="text-sm">Store Voucher</Typography>
                </div>
                <Typography className="text-sm">
                  {" "}
                  No Applicable Voucher
                </Typography>
              </div>
              <div className="flex justify-between items-center gap-60 my-3">
                <div className="flex items-center gap-2">
                  <p>
                    <FaRegKeyboard />
                  </p>
                  <Typography className="text-sm">Promo Code</Typography>
                </div>
                <div className="w-20 relative right-36 flex items-center gap-2">
                  <Input
                    type="email"
                    placeholder="Enter the code"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                  <span>
                    <FaArrowRight />
                  </span>
                </div>
              </div>
              <hr className="my-3"/>
              <div>
                <Typography className="text-sm mb-3 text-red-500">Order summery</Typography>
                <div>
                    <div className="flex items-center justify-between">
                        <Typography className="text-sm">Items Total</Typography>
                        <Typography>$80</Typography>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <Typography className="text-sm my-2">Delivery Fee</Typography>
                        <Typography>$2</Typography>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <Typography className="text-sm">Total Payment</Typography>
                        <Typography>$82</Typography>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <Typography className="text-sm"></Typography>
                        <Typography className="text-sm italic my-2">Vat Included, Where Applicable</Typography>
                    </div>
                </div>
              </div>
              <Button fullWidth color="red">Place Order</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payment;
