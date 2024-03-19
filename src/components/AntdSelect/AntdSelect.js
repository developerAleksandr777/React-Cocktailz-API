import React from "react";
import { Select, Space } from "antd";
import { useFilters } from "../../custom hook/useFilter";

const AntdSelect = ({ categories, handleChange }) => {
  return (
    <Space wrap>
      <Select
        defaultValue={categories[0]?.strCategory || "Ordinary Drink"}
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={categories.map((el) => {
          return {
            value: el.strCategory,
            label: el.strCategory,
          };
        })}
      />
    </Space>
  );
};

export default AntdSelect;
