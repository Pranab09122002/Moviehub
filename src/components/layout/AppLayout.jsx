import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Ui/Loading";

const AppLayout = () => {
 const navigation = useNavigation()
 if(navigation.state === "loading") return <div className="grid md:grid-cols-2"> 
 <Loading/>
 </div>
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

export default AppLayout;
