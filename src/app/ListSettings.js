import React from "react";
import List from "./List";
import { map } from "../utils";
import * as settings from "../models/settings";

const settingsByProperty = {};
map(settings, (key, setting) => {
  settingsByProperty[setting.property] = setting;
});

export default function ListSettings({ params }) {
  const model = settingsByProperty[params.setting];
  return (
    <List
      model={model}
      firebaseRef={`config/${model.property}`}
      url={`/settings/${model.property}`}
    />
  );
}
