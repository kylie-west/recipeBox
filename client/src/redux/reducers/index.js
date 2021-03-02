import { combineReducers } from "redux";
import recipes from "./recipes";
import modals from "./modals";
import users from "./users";

export default combineReducers({ recipes, modals, users });
