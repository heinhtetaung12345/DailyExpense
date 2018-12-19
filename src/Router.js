import React from "react";
import { Scene, Router } from "react-native-router-flux";
import SearchBar from "react-native-search-bar";

import MainForm from "./components/MainForm";
import AddIncome from "./components/AddIncome";
import AddExpenses from "./components/AddExpenses";
import AllTransaction from "./components/AllTransaction";
import Report from "./components/Reports";
import Setting from "./components/Setting";
import Category from "./components/settings/Category";
import Currency from "./components/settings/Currency";
import Password from "./components/settings/Password";
import Payment from "./components/settings/Payment";
import Database from "./components/settings/Database";
import Suggestion from "./components/settings/Suggestion";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="form"
          component={MainForm}
          title="Daily Expenses Manager"
          onRight={() => null}
          rightTitle="Add"
          navigationBarStyle={{ backgroundColor: "powderblue" }}
        />
        <Scene
          key="income"
          component={AddIncome}
          title="Add Income"
          onRight={() => null}
          rightTitle="Add"
          navigationBarStyle={{ backgroundColor: "powderblue" }}
        />
        <Scene
          key="expense"
          component={AddExpenses}
          title="Add Expenses"
          onRight={() => null}
          rightTitle="Add"
          navigationBarStyle={{ backgroundColor: "powderblue" }}
        />
        <Scene
          key="transaction"
          component={AllTransaction}
          title="All Transaction"
          onRight={() => null}
          rightTitle="Add"
          navigationBarStyle={{ backgroundColor: "powderblue" }}
        />
        <Scene
          key="report"
          component={Report}
          title="Reports"
          onRight={() => null}
          rightTitle="Add"
          navigationBarStyle={{ backgroundColor: "powderblue" }}
        />
        <Scene
          key="setting"
          component={Setting}
          title="Setting"
          onRight={() => null}
          rightTitle="Add"
          navigationBarStyle={{ backgroundColor: "powderblue" }}
        />
        <Scene
          key="category"
          component={Category}
          title="Category List"
          onRight={() => null}
          rightTitle="Add"
          navigationBarStyle={{ backgroundColor: "powderblue" }}
        />
        <Scene
          key="currency"
          component={Currency}
          title="Country List"
          onRight={() => console.log("you clicked add ")}
          rightTitle="Search"
          navigationBarStyle={{ backgroundColor: "powderblue" }}
        />
        <Scene
          key="password"
          component={Password}
          title="Password"
          navigationBarStyle={{ backgroundColor: "powderblue" }}
        />
        <Scene
          key="payment"
          component={Payment}
          title="Payment Mode List"
          rightTitle="Add"
          onRight={() => null}
          navigationBarStyle={{ backgroundColor: "powderblue" }}
        />
        <Scene
          key="database"
          component={Database}
          title="Database"
          navigationBarStyle={{ backgroundColor: "powderblue" }}
        />
        <Scene
          key="suggestion"
          component={Suggestion}
          title="Suggestion"
          navigationBarStyle={{ backgroundColor: "powderblue" }}
        />
      </Scene>
    </Router>
  );
};
export default RouterComponent;
