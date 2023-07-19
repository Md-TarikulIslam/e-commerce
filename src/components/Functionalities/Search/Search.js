import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import {
    FaSearch,
  } from "react-icons/fa";
import { XMarkIcon } from "@heroicons/react/24/outline";
 
export function Search() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
   <div className="z-20" >
     <React.Fragment>
      <p onClick={openDrawer}><FaSearch /></p>
      <Drawer open={open} onClose={closeDrawer} placement="left">
        <div className="mb-2 flex items-center justify-between p-4 ">
          <Typography variant="h5" color="blue-gray">
            Search
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <form className="flex flex-col gap-6 p-4 bg-white">
          <Input type="text" label="Enter Text" />
          <Button>Search</Button>
        </form>
      </Drawer>
    </React.Fragment>
   </div>
  );
}