import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
  ButtonGroup,
} from "@material-tailwind/react";
import { FaTrash } from "react-icons/fa";
import img1 from "../../assets/images/items/1.webp";
import img2 from "../../assets/images/items/2.jpg";
import img3 from "../../assets/images/items/3.webp";
import img4 from "../../assets/images/items/4.jpg";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Item", "Price", "Quantity", "Total", "", ""];

const TABLE_ROWS = [
  {
    img: img1,
    name: "Elessi Knit Coats",
    amount: "$86",
    date: "Wed 3:00pm",
    total: "$86",
    link:'/payment'
  },
  {
    img: img2,
    name: "T-shirt Caro Lines",
    amount: "$25",
    date: "Wed 1:00pm",
    total: "$25",
  },
  {
    img: img3,
    name: "Classic T-shirt Sleeves",
    amount: "$17",
    date: "Mon 7:40pm",
    total: "$17",
  },
  {
    img: img4,
    name: "Colorful Jacket",
    amount: "$14",
    date: "Wed 5:00pm",
    total: "$14",
  },
];

export default function Cart() {
  return (
  <div>
     <div>
          <Typography
            variant="h5"
            color="blue-gray"
            className="text-center text-2xl mt-10"
          >
            Your Cart{" "}
            <span className="text-red-400"> ({TABLE_ROWS.length} items) </span>
          </Typography>
        </div>
      <div className="max-w-screen-xl mx-auto my-10 flex justify-between flex-col lg:flex-row gap-5 lg:gap-0">
      <div>
       
        <Card className="h-full w-full">
          <CardHeader
            floated={false}
            shadow={false}
            className="rounded-none"
          ></CardHeader>
          <CardBody className="overflow-scroll px-0">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ img, name, amount, total, link }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={img}
                            alt={name}
                            size="lg"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          />
                        <Link to={link}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography></Link>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div>
                          <ButtonGroup className=" rounded-xl ">
                            <Button className="text-black bg-blue-50">-</Button>
                            <Button className="text-black bg-blue-50">1</Button>
                            <Button className="text-black bg-blue-50">+</Button>
                          </ButtonGroup>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={total}
                            color={
                              total === "paid"
                                ? "green"
                                : total === "pending"
                                ? "amber"
                                : "red"
                            }
                          />
                        </div>
                      </td>

                      <td className={classes}>
                        <Tooltip content="Delete">
                          <IconButton variant="text" color="blue-gray">
                            <FaTrash className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Button variant="outlined" color="blue-gray" size="sm">
              Previous
            </Button>
            <div className="flex items-center gap-2">
              <IconButton variant="outlined" color="blue-gray" size="sm">
                1
              </IconButton>
              <IconButton variant="text" color="blue-gray" size="sm">
                2
              </IconButton>
              <IconButton variant="text" color="blue-gray" size="sm">
                3
              </IconButton>
            </div>
            <Button variant="outlined" color="blue-gray" size="sm">
              Next
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <div className="w-96 mt-10">
          <Card>
            <CardBody>
              <div className="flex justify-between items-center">
                <p className="font-semibold">Subtotal</p>
                <p>$142</p>
              </div>
              <div className="flex justify-between items-center my-5">
                <p className="font-semibold">Coupon code</p>
                <div className="w-48">
                  <Input
                    type="email"
                    placeholder="Enter code"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-semibold">Grand Total</p>
                <p className="text-2xl">$142</p>
              </div>
              <Button className="mt-5" fullWidth color="red">
                Check out
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  </div>
  );
}
