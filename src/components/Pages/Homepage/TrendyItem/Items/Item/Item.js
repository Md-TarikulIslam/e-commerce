import React from "react";
import img1 from "../../../../../assets/images/items/1.webp";
import img1_1 from "../../../../../assets/images/items/1.1.webp";
import img2 from "../../../../../assets/images/bank/1.avif"
import {
  Breadcrumbs,
  Button,
  ButtonGroup,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Radio,
  Typography,
} from "@material-tailwind/react";
import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaPinterestP,
    FaInstagram,
    FaRegCopyright,
  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcShipped } from "react-icons/fc";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Items from "../Items";

const Item = () => {
  return (
    <div>
      <div className="">
        <Breadcrumbs separator="-" className="w-screen mb-5 h-16">
          <Link to="/" className="opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>

          <a href="#" className="opacity-60">
            Items
          </a>
          <a href="#">Item 1</a>
        </Breadcrumbs>
      </div>
      <div className="flex max-w-screen-2xl mx-auto gap-10 items-start">
        <div className="flex gap-5">
          <img className="w-72" src={img1} alt="" />
          <img className="w-72" src={img1_1} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Elessi Knit Coats</h1>
          <div className="flex items-center my-2">
            <p className="text-xl">
              <FcShipped />
            </p>
            <p className="text-red-500 mx-1">19</p>
            <p>sold in last</p>
            <p className="text-red-500 mx-1">14</p>
            <p> hours</p>
          </div>
          <div className="flex items-center">
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
            <p>
              <FaStarHalfAlt />
            </p>
            <p className="ml-1">4 reviews</p>
          </div>
          <div>
            <p className="text-3xl font-semibold my-1 text-gray-700">$86-$89</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
            laboriosam nisi.
          </p>
          <div className="my-1">
            <p>
              COLOR: <span className="text-red-500">Light</span>
            </p>
            <Card className="w-full max-w-[24rem]">
              <List className="flex-row">
                <ListItem className="p-0">
                  <label
                    htmlFor="horizontal-list-react"
                    className="px-3 py-2 flex items-center w-full cursor-pointer"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        name="horizontal-list"
                        id="horizontal-list-react"
                        ripple={false}
                        color="red"
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      Light
                    </Typography>
                  </label>
                </ListItem>
                <ListItem className="p-0">
                  <label
                    htmlFor="horizontal-list-vue"
                    className="px-3 py-2 flex items-center w-full cursor-pointer"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        name="horizontal-list"
                        id="horizontal-list-vue"
                        ripple={false}
                        color="red"
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      Gray
                    </Typography>
                  </label>
                </ListItem>
                <ListItem className="p-0">
                  <label
                    htmlFor="horizontal-list-svelte"
                    className="px-3 py-2 flex items-center w-full cursor-pointer"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        name="horizontal-list"
                        id="horizontal-list-svelte"
                        ripple={false}
                        color="red"
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      Yellow
                    </Typography>
                  </label>
                </ListItem>
              </List>
            </Card>
          </div>
          <div className="my-1">
            <p>
              SIZE: <span className="text-red-500">M</span>
            </p>
            <Card className="w-full max-w-[24rem]">
              <List className="flex-row">
                <ListItem className="p-0">
                  <label
                    htmlFor="horizontal-list-react"
                    className="px-3 py-2 flex items-center w-full cursor-pointer"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        name="horizontal-list"
                        id="horizontal-list-react"
                        ripple={false}
                        color="red"
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      M
                    </Typography>
                  </label>
                </ListItem>
                <ListItem className="p-0">
                  <label
                    htmlFor="horizontal-list-vue"
                    className="px-3 py-2 flex items-center w-full cursor-pointer"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        name="horizontal-list"
                        id="horizontal-list-vue"
                        ripple={false}
                        color="red"
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      L
                    </Typography>
                  </label>
                </ListItem>
                <ListItem className="p-0">
                  <label
                    htmlFor="horizontal-list-svelte"
                    className="px-3 py-2 flex items-center w-full cursor-pointer"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        name="horizontal-list"
                        id="horizontal-list-svelte"
                        ripple={false}
                        color="red"
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      XL
                    </Typography>
                  </label>
                </ListItem>
              </List>
            </Card>
          </div>
          <div className="flex items-center gap-7 mt-3">
           <div>
           <ButtonGroup color="gray" className=" rounded-xl">
              <Button className="text-black">-</Button>
              <Button className="text-black">1</Button>
              <Button className="text-black">+</Button>
            </ButtonGroup>
           </div>
           <div>
            <Button className="w-48" color="red">Add to cart</Button>
           </div>
          </div>
          <p className="ml-40 my-2">--or--</p>
          <Button className="w-96 hover:bg-green-900">Buy now</Button>
          <img className="my-3" src={img2} alt="" />
          <div className="flex items-center gap-10 mt-10">
            <p>Share on</p>
            <div className="flex items-center gap-3">
            <span className="foo-icons">
              <FaFacebookF />{" "}
            </span>
            <span className="foo-icons">
              <FaTwitter />{" "}
            </span>
            <span className="foo-icons">
              <FaGooglePlusG />{" "}
            </span>
            <span className="foo-icons">
              <FaPinterestP />{" "}
            </span>
            <span className="foo-icons">
              <FaInstagram />{" "}
            </span>
          </div>
          </div>
       
        </div>
      </div>
      <div className="mx-auto">
            <p className="text-center mt-20 mb-10 text-3xl font-bold">Related Products</p>
            <Items></Items>
          </div>
    </div>
  );
};

export default Item;
