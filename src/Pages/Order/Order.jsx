import { useState } from "react";
import orderCover from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Cover
        img={orderCover}
        title={"OUR SHOP"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <section className="max-w-screen-xl lg:mx-auto mx-6 mt-16">
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="tabs-container"
        >
          <TabList className="flex justify-center text-2xl items-center space-x-11 mb-14 uppercase">
            <Tab className="tab-item" selectedClassName="tab-item-active">
              Salad
            </Tab>
            <Tab className="tab-item" selectedClassName="tab-item-active">
              Pizza
            </Tab>
            <Tab className="tab-item" selectedClassName="tab-item-active">
              Soups
            </Tab>
            <Tab className="tab-item" selectedClassName="tab-item-active">
              Desserts
            </Tab>
            <Tab className="tab-item" selectedClassName="tab-item-active">
              Drinks
            </Tab>
          </TabList>

          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default Order;
